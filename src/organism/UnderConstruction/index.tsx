import React from 'react'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import ThemeProvider from '@mui/styles/ThemeProvider'
import Typography from '@mui/material/Typography'
import UnderConstructionIcon from '../../assets/images/icons/other_icon.png'
import Header from '../../atom/Header'
import {theme} from '../../utils/theme'
import Box from '@mui/material/Box'

type Props = {}

const UnderConstruction = (props: Props) => {
  return (
    <ThemeProvider theme={theme}>
        <Grid container justifyContent='center' sx={{marginTop:theme.spacing(2)}}>
         <Grid item xs={1} sx={{display:'flex',justifyContent:'center'}}>
          <img style={{maxHeight: theme.spacing(13)}} src={UnderConstructionIcon} alt="Paris"/>
         </Grid>
       </Grid>
      <Header  text={"Under Construction"} margin={1}/>
      <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
        <Typography variant='h5' sx=
        {{
            padding:theme.spacing(8),

        }}>Check back soon! </Typography>
        <Button href='/' sx={{
        marginTop: theme.spacing(4),
        backgroundColor: "#f09b85",
        borderRadius: 0,
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