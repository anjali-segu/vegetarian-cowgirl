import * as React from 'react';
import { createTheme,ThemeProvider } from '@mui/material/styles';
import {theme} from '../../utils/theme'
import Card from '../../atom/Card';
import { Grid } from '@mui/material';

interface Props {
}


const DrinksBlogGrid = (props:Props) => {

  return (
    <ThemeProvider theme={theme}>

    <Grid container sx={{paddingTop: theme.spacing(15), paddingLeft:theme.spacing(30),paddingRight:theme.spacing(30), paddingBottom: theme.spacing(15),}}>

      <Grid item xs={4} sx={{display:'flex',justifyContent:'center'}}>
      <Card image={'blog_posts/tea_jar_blog_square.jpg'} title={'TEA'} subtitle={'Austin Ultimate Tea Guide'} post={'/'}/>
      </Grid>
      <Grid item xs={4} sx={{display:'flex',justifyContent:'center'}}>
      <Card image={'blog_posts/latte_blog_square.jpg'} title={'COFFEE'} subtitle={'Intro to Breville Espresso Machine'} post={'/'}/>
      </Grid>
      <Grid item xs={4} sx={{display:'flex',justifyContent:'center'}}>
      <Card image={'blog_posts/psl_blog_square.jpg'} title={'COFFEE'} subtitle={'Pumpkin Spiced Latte w/ Espresso Machine'} post={'/'}/>
      </Grid>
    </Grid>

    </ThemeProvider>
  )
}

export default DrinksBlogGrid
