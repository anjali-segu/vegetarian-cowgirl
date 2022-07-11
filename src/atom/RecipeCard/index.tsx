import React, { useCallback, useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import ThemeProvider from '@mui/styles/ThemeProvider'
import Typography from '@mui/material/Typography';

import { theme } from '../../utils/theme'
import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Tooltip from '@mui/material/Tooltip';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';

type Props = {
    icon: string
    icon_alt?: string
    title: string
    serves: number
    preptime: string
    cooktime: string
    totaltime: string
    ingredients: string[][]
    categories?: string[]
    steps: string[]
}

const generateCategories = (ingredients: string[][], categories?: string[]) => {
    if (categories) {
        let retval: JSX.Element[] = []
        let end = Math.min(categories.length, ingredients.length)
        for (let i = 0; i < end; ++i) {
            retval.push((
                <React.Fragment key={categories[i]}>
                    <Grid item xs={1}>
                    </Grid>

                    <Grid item xs={10}>
                        <Typography sx={{
                            fontFamily: 'Karla',
                            fontWeight: 700,
                            color: 'black',
                            marginTop: theme.spacing(4)
                        }}
                            gutterBottom
                            variant="body1"
                            component="div">
                            {categories[i]}
                        </Typography>

                        <ul>
                            {ingredients[i].map(ingredient => (
                                <li key={ingredient} dangerouslySetInnerHTML={{ __html: ingredient }} style={{
                                    fontFamily: 'Karla',
                                    color: 'black',
                                    fontWeight: 500,
                                    fontSize: theme.spacing(4),
                                }} />
                            ))}
                        </ul>
                    </Grid>

                    <Grid item xs={1}>
                    </Grid>
                </React.Fragment>
            ))
        }
        return retval
    } else {
        return ingredients.map(ingredients => (
            <React.Fragment key={ingredients.join(',')}>
                <Grid item xs={1}>
                </Grid>

                <Grid item xs={10}>
                    <ul>
                        {ingredients.map(ingredient => (
                            <li key={ingredient} dangerouslySetInnerHTML={{ __html: ingredient }} style={{
                                fontFamily: 'Karla',
                                color: 'black',
                                fontWeight: 500,
                                fontSize: theme.spacing(4),
                            }} />
                        ))}
                    </ul>
                </Grid>

                <Grid item xs={1}>
                </Grid>
            </React.Fragment>
        ))
    }
}

interface ChromiumNavigator extends Navigator {
    wakeLock: any
}

const RecipeCard = (props: Props) => {
    const [wakeLock, setWakeLock] = useState<any>(null)
    const [cookMode, setCookMode] = useState(false)
    const [multiplier, setMultiplier] = useState(1)

    const [cookModeSuccessAlertOpen, setCookModeSuccessAlertOpen] = useState(false)
    const [cookModeWarningAlertOpen, setCookModeWarningAlertOpen] = useState(false)

    const requestWakeLock = useCallback(
        // Function that attempts to request a wake lock.
        () =>
            (navigator as ChromiumNavigator).wakeLock.request('screen').then((wakeLock: any) => setWakeLock(wakeLock)).catch((err: any) => console.error(`${err.name}, ${err.message}`)),
        [setWakeLock],
    )

    const releaseWakeLock = useCallback(
        // Function that attempts to release the wake lock.
        () => {
            if (wakeLock) {
                wakeLock.release().then(() => setWakeLock(null)).catch((err: any) => console.error(`${err.name}, ${err.message}`))
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

    const handleClose = (_event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setCookModeSuccessAlertOpen(false);
        setCookModeWarningAlertOpen(false);
    };

    const handleMultiplier = (
        event: React.MouseEvent<HTMLElement>,
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
                                    sx={{p: theme.spacing(2.5)}}
                                    color='primary'
                                >
                                    <ToggleButton value={1/2} aria-label="one half times">
                                        <Typography sx={{ fontWeight: 900 }}>½×</Typography>
                                    </ToggleButton>
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


                                {'wakeLock' in navigator &&
                                    <FormGroup>
                                        <Tooltip title="Prevent your screen from going dark" placement='right'>
                                            <FormControlLabel control={<Switch checked={cookMode} onClick={toggleCookMode} />}
                                                label="Cook Mode" />
                                        </Tooltip>
                                    </FormGroup>}
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

                            {generateCategories(props.ingredients, props.categories)}

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
                                    Steps
                                </Typography>
                            </Grid>

                            <Grid item xs={1}>
                            </Grid>


                            <Grid item xs={1}>
                            </Grid>

                            <Grid item xs={10}>



                                <ol>
                                    {props.steps.map(step => (
                                        <li key={step} dangerouslySetInnerHTML={{ __html: step }} style={{
                                            fontFamily: 'Karla',
                                            color: 'black',
                                            fontWeight: 500,
                                            fontSize: theme.spacing(4),
                                        }} />
                                    ))}
                                </ol>

                            </Grid>

                            <Grid item xs={1}>
                            </Grid>



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