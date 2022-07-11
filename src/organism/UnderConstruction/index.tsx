import React from 'react'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import ThemeProvider from '@mui/styles/ThemeProvider'
import Typography from '@mui/material/Typography'
import SiteLogo from '../../assets/images/icons/logos/LogoBlack.png'
import UnderConstructionIcon from '../../assets/images/icons/construction_icon.png'
import Header from '../../atom/Header'
import {theme} from '../../utils/theme'
import Box from '@mui/material/Box'

type Props = {}

const UnderConstruction = (props: Props) => {
  return (
    <ThemeProvider theme={theme}>
        <Grid container justifyContent='center' sx={{marginTop:theme.spacing(2)}}>
         <Grid item xs={1} sx={{display:'flex',justifyContent:'center'}}>
          <img style={{maxHeight: theme.spacing(13)}} src={SiteLogo} />
         </Grid>
       </Grid>
      <Header  text={"Under Construction"} margin={1}/>
      <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
        <Typography variant='h4' sx=
        {{
            fontSize:theme.spacing(7),
            padding:theme.spacing(12),

        }}>Check back soon! </Typography>
        <img style={{maxHeight: theme.spacing(80)}} src={UnderConstructionIcon} />
        <Button href='/' sx={{
        margin: theme.spacing(15),
        backgroundColor: "#f09b85",
        borderRadius: 0,
        fontSize:theme.spacing(4),
        "&:hover": {
          backgroundColor: "#ffffff",
          color: "#f09b85",

        },
      }}
        variant="contained"
        disableElevation size="medium">
        Go Home
      </Button>
      </Box>
    </ThemeProvider>
  )
}

export default UnderConstruction