import * as React from 'react';
import { createTheme,ThemeProvider } from '@mui/material/styles';
import {theme} from '../../utils/theme'
import Card from '../../atom/Card';
import { Grid } from '@mui/material';

import Latte_Blog_Square from '../../assets/images/blog_posts/latte_blog_square.jpg';
import Psl_Blog_Square from '../../assets/images/blog_posts/psl_blog_square.jpg';
import Tea_Jar_Blog_Square from '../../assets/images/blog_posts/tea_jar_blog_square.jpg';

interface Props {
}


const DrinksBlogGrid = (props:Props) => {

  return (
    <ThemeProvider theme={theme}>

    <Grid container justifyContent='center' sx={{paddingTop: theme.spacing(15)}}>

      <Grid item sm={12} md={4} sx={{display:'flex',justifyContent:'center'}}>
      <Card image={Tea_Jar_Blog_Square} title={'TEA'} subtitle={'Austin Ultimate Tea Guide'} post={'/'}/>
      </Grid>
      <Grid item sm={12} md={4} sx={{display:'flex',justifyContent:'center'}}>
      <Card image={Latte_Blog_Square} title={'COFFEE'} subtitle={'Intro to Breville Espresso Machine'} post={'/'}/>
      </Grid>
      <Grid item sm={12} md={4} sx={{display:'flex',justifyContent:'center'}}>
      <Card image={Psl_Blog_Square} title={'COFFEE'} subtitle={'Pumpkin Spiced Latte w/ Espresso Machine'} post={'/'}/>
      </Grid>
    </Grid>

    </ThemeProvider>
  )
}

export default DrinksBlogGrid
