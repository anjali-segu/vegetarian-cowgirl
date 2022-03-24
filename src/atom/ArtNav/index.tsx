import * as React from 'react';
import { createTheme,ThemeProvider } from '@mui/material/styles';
import {theme} from '../../utils/theme'
import { Grid } from '@mui/material';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Header from '../../atom/Header'
import Link from '@mui/material/Link';




interface Props {
}


const ArtNav = (props:Props) => {

  return (
    <ThemeProvider theme={theme}>
    <Header margin={2} text={"Art"}/>
    <Grid container justifyContent='center' sx={{paddingTop: theme.spacing(15),paddingBottom: theme.spacing(5), textAlign:'center'}}>

      <Grid item md={3} sx={{display: 'inline',justifyContent:'center', }}>
      </Grid>

      <Grid item sm={4} md={2} sx={{display: 'inline',justifyContent:'center', }}>
        <Link underline="none" href="#gallerydrops">
        <Typography
            sx={{
              [theme.breakpoints.only('xs')]:{
                  fontSize:theme.spacing(4.5),
                  paddingLeft:theme.spacing(2.5),
                  paddingRight:theme.spacing(2.5),
              },
            fontFamily: 'Karla',
            fontWeight: 700 ,
            color: 'black'}}
            gutterBottom
            variant="h5"
            component="div">
          Gallery Drops
        </Typography>
        </Link>
      </Grid>

      <Grid item sm={4} md={2} sx={{display: 'inline',justifyContent:'center', }}>
        <Link underline="none" href="#creativeprocess">
        <Typography sx={{
          [theme.breakpoints.only('xs')]:{
              fontSize:theme.spacing(4.5),
              paddingLeft:theme.spacing(2.5),
              paddingRight:theme.spacing(2.5),
          },
            fontFamily: 'Karla',
            fontWeight: 700 ,
            color: 'black'}}
            gutterBottom
            variant="h5"
            component="div">
          My Creative Process
        </Typography>
        </Link>
      </Grid>

      <Grid item sm={4} md={2} sx={{display: 'inline',justifyContent:'center', }}>
        <Link underline="none" href="#other2">
        <Typography sx={{
          [theme.breakpoints.only('xs')]:{
              fontSize:theme.spacing(4.5),
              paddingLeft:theme.spacing(2.5),
              paddingRight:theme.spacing(2.5),
          },
            fontFamily: 'Karla',
            fontWeight: 700 ,
            color: 'black'}}
            gutterBottom
            variant="h5"
            component="div">
          Other
        </Typography>
        </Link>
      </Grid>


      <Grid item md={3} sx={{display: 'inline',justifyContent:'center', }}>
      </Grid>



    </Grid>

    </ThemeProvider>
  )
}

export default ArtNav