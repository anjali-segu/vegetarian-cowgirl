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


const RecipeNav = (props:Props) => {

  return (
    <ThemeProvider theme={theme}>
    <Header text={"Recipes"}/>
    <Grid container sx={{paddingTop: theme.spacing(15),paddingBottom: theme.spacing(15), textAlign:'center'}}>

      <Grid item  sm={3} sx={{display: 'inline',justifyContent:'center', }}>
      </Grid>

      <Grid item xs={4} sm={2} sx={{display: 'inline',justifyContent:'center', }}>
        <Link underline="none" href="#baking">
        <Typography
            sx={{
            fontFamily: 'Karla',
            fontWeight: 700 ,
            color: 'black'}}
            gutterBottom
            variant="h5"
            component="div">
          Baking
        </Typography>
        </Link>
      </Grid>

      <Grid item xs={4} sm={2} sx={{display: 'inline',justifyContent:'center', }}>
        <Link underline="none" href="#cooking">
        <Typography sx={{
            fontFamily: 'Karla',
            fontWeight: 700 ,
            color: 'black'}}
            gutterBottom
            variant="h5"
            component="div">
          Cooking
        </Typography>
        </Link>
      </Grid>

      <Grid item xs={4} sm={2} sx={{display: 'inline',justifyContent:'center', }}>
        <Link underline="none" href="#drinks">
        <Typography sx={{
            fontFamily: 'Karla',
            fontWeight: 700 ,
            color: 'black'}}
            gutterBottom
            variant="h5"
            component="div">
          Drinks
        </Typography>
        </Link>
      </Grid>


      <Grid item sm={3} sx={{display: 'inline',justifyContent:'center', }}>
      </Grid>



    </Grid>

    </ThemeProvider>
  )
}

export default RecipeNav
