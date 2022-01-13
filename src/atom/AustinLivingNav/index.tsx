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


const AustinLivingNav = (props:Props) => {

  return (
    <ThemeProvider theme={theme}>
    <Header text={"Austin Living"}/>
    <Grid container justifyContent='center' sx={{paddingTop: theme.spacing(15),paddingBottom: theme.spacing(15), textAlign:'center'}}>

      <Grid item  md={3} sx={{display: 'inline',justifyContent:'center', }}>
      </Grid>

      <Grid item sm={4} md={2} sx={{display: 'inline',justifyContent:'center', }}>
        <Link underline="none" href="#restaurants">
        <Typography
            sx={{
            [theme.breakpoints.only('xs')]:{
                fontSize:theme.spacing(5),
                paddingLeft:theme.spacing(2),
                paddingRight:theme.spacing(2),
            },
            textAlign:'center',
            fontFamily: 'Karla',
            fontWeight: 700 ,
            color: 'black'}}
            gutterBottom
            variant="h5"
            component="div">
          Restaurants
        </Typography>
        </Link>
      </Grid>

      <Grid item sm={4} md={2} sx={{display: 'inline',justifyContent:'center', }}>
        <Link underline="none" href="#austinactivities">
        <Typography sx={{
          [theme.breakpoints.only('xs')]:{
              fontSize:theme.spacing(5),
              paddingLeft:theme.spacing(2),
              paddingRight:theme.spacing(2),
          },
            textAlign:'center',
            fontFamily: 'Karla',
            fontWeight: 700 ,
            color: 'black'}}
            gutterBottom
            variant="h5"
            component="div">
          Austin Activities
        </Typography>
        </Link>
      </Grid>

      <Grid item sm={4} md={2} sx={{display: 'inline',justifyContent:'center', }}>
        <Link underline="none" href="#other">
        <Typography sx={{
          [theme.breakpoints.only('xs')]:{
              fontSize:theme.spacing(5),
              paddingLeft:theme.spacing(2),
              paddingRight:theme.spacing(2),
          },
            textAlign:'center',
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

export default AustinLivingNav
