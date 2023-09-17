import React, { useCallback, useEffect, useState } from 'react'
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Grid from '@mui/material/Grid';
import Snackbar from '@mui/material/Snackbar';
import Switch from '@mui/material/Switch';
import { ThemeProvider } from '@mui/material/styles'
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';

import Ingredient from '../../utils/ingredient';
import { generateCategories, generateSteps } from '../../utils/RecipeCardHelpers';
import { theme } from '../../utils/theme'

type Props = {
    icon: string
    icon_alt?: string
    title: string
    serves: number
    preptime: string
    cooktime: string
    totaltime: string
    ingredients?: { [key: string]: Ingredient }
    categories?: { [key: string]: { ingredients: { [key: string]: Ingredient } } }
    steps: string[]
    indivisible?: boolean
}

// Define the WakeLock type
interface WakeLock {
    request(type?: 'screen' | undefined): Promise<WakeLockSentinel>;
}

interface ChromiumNavigator extends Navigator {
    wakeLock: WakeLock
}

const RecipeCard = (props: Props) => {
    const [wakeLock, setWakeLock] = useState<WakeLockSentinel | null>(null)
    const [cookMode, setCookMode] = useState(false)
    const [highlightEquipment, setHighlightEquipment] = useState(false)
    const [multiplier, setMultiplier] = useState(1)

    const [cookModeSuccessAlertOpen, setCookModeSuccessAlertOpen] = useState(false)
    const [cookModeWarningAlertOpen, setCookModeWarningAlertOpen] = useState(false)

    const requestWakeLock = useCallback(
        // Function that attempts to request a wake lock.
        () =>
            (navigator as ChromiumNavigator).wakeLock.request('screen').then((wakeLock) => setWakeLock(wakeLock)).catch((err) => console.error(`${err.name}, ${err.message}`)),
        [setWakeLock],
    )

    const releaseWakeLock = useCallback(
        // Function that attempts to release the wake lock.
        () => {
            if (wakeLock) {
                wakeLock.release().then(() => setWakeLock(null)).catch((err) => console.error(`${err.name}, ${err.message}`))
            }
        },
        [setWakeLock, wakeLock],
    )

    useEffect(() => {
        if (wakeLock) {
            wakeLock.addEventListener('release', () => {
                setCookModeSuccessAlertOpen(false)
                setCookModeWarningAlertOpen(true)
            });
            setCookModeSuccessAlertOpen(true)
            setCookModeWarningAlertOpen(false)
        }
    }, [wakeLock])

    const toggleCookMode = useCallback(
        () => {
            if (cookMode) {
                releaseWakeLock()
            } else {
                requestWakeLock()
            }
            setCookMode(!cookMode)
        },
        [cookMode, releaseWakeLock, requestWakeLock, setCookMode],
    )

    const toggleHighlightEquipment = useCallback(
        () => {
            const equipments = document.querySelectorAll(".equipment");
            for (const equipment of equipments) {
                if (equipment instanceof HTMLElement) {
                    equipment.dataset["highlighted"] = `${!highlightEquipment}`
                }
            }
            setHighlightEquipment(!highlightEquipment);
        },
        [highlightEquipment, setHighlightEquipment],
    )

    const handleClose = (_event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setCookModeSuccessAlertOpen(false);
        setCookModeWarningAlertOpen(false);
    };

    const handleMultiplier = (
        _event: React.MouseEvent<HTMLElement>,
        newMultiplier: number | null,
    ) => {
        if (newMultiplier !== null) {
            setMultiplier(newMultiplier);
        }
    };

    return (
        <ThemeProvider theme={theme}>
            <Grid container justifyContent='center' sx={{ marginTop: theme.spacing(10) }}>
                <Card id='recipe' sx={{
                    [theme.breakpoints.only('xs')]: {
                        minWidth: theme.spacing(10),
                    },
                    marginBottom: theme.spacing(5),
                    marginLeft: theme.spacing(2),
                    marginRight: theme.spacing(2),
                    maxWidth: theme.spacing(160),
                    border: 2
                }}>
                    <CardContent>
                        <Grid container justifyContent='center'>
                            <Grid item xs={1} sx={{ display: 'flex', justifyContent: 'center' }}>
                                <img style={{ maxHeight: theme.spacing(13) }} src={props.icon} alt={props.icon_alt} />
                            </Grid>
                        </Grid>
                        <Grid item lg={12}>
                            <Typography sx={{
                                fontFamily: 'Jost',
                                fontWeight: 600,
                                textAlign: 'center',
                                color: 'black',
                                marginTop: theme.spacing(5)
                            }}
                                gutterBottom
                                variant="h6"
                                component="div">
                                {props.title}
                            </Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center' }}>
                                <Typography sx={{
                                    fontFamily: 'Karla',
                                    fontWeight: 700,
                                    textAlign: 'center',
                                }}
                                    gutterBottom
                                    variant="body1"
                                    component="div">
                                    Serves {props.serves * multiplier}
                                </Typography>

                                <ToggleButtonGroup
                                    value={multiplier}
                                    exclusive
                                    onChange={handleMultiplier}
                                    aria-label="recipe multiplier"
                                    sx={{ p: theme.spacing(2.5) }}
                                    color='primary'
                                >
                                    {!props.indivisible && <ToggleButton value={1 / 2} aria-label="one half times">
                                        <Typography sx={{ fontWeight: 900 }}>½×</Typography>
                                    </ToggleButton>}
                                    <ToggleButton value={1} aria-label="one times">
                                        <Typography sx={{ fontWeight: 900 }}>1×</Typography>
                                    </ToggleButton>
                                    <ToggleButton value={2} aria-label="two times">
                                        <Typography sx={{ fontWeight: 900 }}>2×</Typography>
                                    </ToggleButton>
                                    <ToggleButton value={3} aria-label="three times">
                                        <Typography sx={{ fontWeight: 900 }}>3×</Typography>
                                    </ToggleButton>
                                </ToggleButtonGroup>


                                <FormGroup>
                                    {'wakeLock' in navigator &&
                                        <Tooltip title="Prevent your screen from going dark" placement='right'>
                                            <FormControlLabel control={<Switch checked={cookMode} onClick={toggleCookMode} />}
                                                label="Cook Mode" />
                                        </Tooltip>
                                    }
                                    <Tooltip title="Highlight equipment needed for recipe" placement='right'>
                                        <FormControlLabel control={<Switch checked={highlightEquipment} onClick={toggleHighlightEquipment} />}
                                            label="Show Equipment" />
                                    </Tooltip>
                                </FormGroup>
                            </Box>
                        </Grid>

                        <Grid container sx={{ marginTop: theme.spacing(4), paddingTop: theme.spacing(1), borderTop: 1 }}>
                            <Grid item xs={4}>
                                <Typography sx={{
                                    fontFamily: 'Karla',
                                    fontWeight: 700,
                                    textAlign: 'center',
                                    color: 'black',
                                    borderRight: 1,
                                    paddingLeft: theme.spacing(1),
                                    paddingRight: theme.spacing(1),
                                }}
                                    gutterBottom
                                    variant="body1"
                                    component="div">
                                    Prep Time: {props.preptime}
                                </Typography>



                            </Grid>

                            <Grid item xs={4}>
                                <Typography sx={{
                                    fontFamily: 'Karla',
                                    fontWeight: 700,
                                    textAlign: 'center',
                                    color: 'black',
                                    borderRight: 1,
                                    paddingLeft: theme.spacing(1),
                                    paddingRight: theme.spacing(1),
                                }}
                                    gutterBottom
                                    variant="body1"
                                    component="div">
                                    Cook Time: {props.cooktime}
                                </Typography>
                            </Grid>

                            <Grid item xs={4}>
                                <Typography sx={{
                                    fontFamily: 'Karla',
                                    fontWeight: 700,
                                    textAlign: 'center',
                                    color: 'black',
                                    paddingLeft: theme.spacing(1),
                                    paddingRight: theme.spacing(1),
                                }}
                                    gutterBottom
                                    variant="body1"
                                    component="div">
                                    Total Time: {props.totaltime}
                                </Typography>
                            </Grid>


                            <Grid item xs={1}>
                            </Grid>

                            <Grid item xs={10}>
                                <Typography sx={{
                                    fontFamily: 'Jost',
                                    fontWeight: 700,
                                    color: 'black',
                                    marginTop: theme.spacing(8)
                                }}
                                    gutterBottom
                                    variant="body1"
                                    component="div">
                                    Ingredients
                                </Typography>
                            </Grid>

                            <Grid item xs={1}>
                            </Grid>

                            {generateCategories(multiplier, props.ingredients, props.categories)}

                            {generateSteps(props.steps, multiplier, props.categories, props.ingredients, props.serves)}

                        </Grid>

                    </CardContent>
                </Card>
            </Grid>
            <Snackbar open={cookModeSuccessAlertOpen} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    <AlertTitle>Cook mode enabled</AlertTitle>
                    Your screen will not go dark while you cook
                </Alert>
            </Snackbar>
            <Snackbar open={cookModeWarningAlertOpen} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="warning" sx={{ width: '100%' }}>
                    <AlertTitle>Cook mode disabled</AlertTitle>
                    Your screen may go dark
                </Alert>
            </Snackbar>
        </ThemeProvider>
    )
}

export default RecipeCard