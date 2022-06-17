import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import {theme} from '../../utils/theme'
import Card from '../../atom/Card';
import { Grid } from '@mui/material';

import Aba_Blog_Square from '../../assets/images/blog_posts/aba_blog_square.jpg';
import Forthwrite_Blog_Square from '../../assets/images/blog_posts/forthwrite_blog_square.jpg';
import Il_Brutto_Blog_Square from '../../assets/images/blog_posts/il_brutto_blog_square.jpg';
import La_Madeleine_Blog_Square from '../../assets/images/blog_posts/la_madeleine_blog_square.jpg';
import Oseyo_Blog_Square from '../../assets/images/blog_posts/oseyo_blog_square.jpg';
import Uchiko_Blog_Square from '../../assets/images/blog_posts/uchiko_blog_square.jpg';

interface Props {
}


const RestaurantsBlogGrid = (props:Props) => {

  return (
    <ThemeProvider theme={theme}>

    <Grid container justifyContent='center' sx={{paddingTop: theme.spacing(15)}}>

    <Grid item sm={12} md={4} sx={{display:'flex',justifyContent:'center'}}>
      <Card image={Forthwrite_Blog_Square} title={'RESTAURANTS'} subtitle={'Forthwrite - My Favorite Austin Brunch Spot'} post={'/'}/>
      </Grid>
      <Grid item sm={12} md={4} sx={{display:'flex',justifyContent:'center'}}>
      <Card image={Uchiko_Blog_Square} title={'RESTAURANTS'} subtitle={'Uchiko - Japanese Vegan Fusion'} post={'/'}/>
      </Grid>
      <Grid item sm={12} md={4} sx={{display:'flex',justifyContent:'center'}}>
      <Card image={Oseyo_Blog_Square} title={'RESTAURANTS'} subtitle={'Oseyo - Korean Bibimbap'} post={'/'}/>
      </Grid>
    </Grid>

    <Grid container justifyContent='center' sx={{paddingTop: theme.spacing(15)}}>    <Grid item sm={12} md={4} sx={{display:'flex',justifyContent:'center'}}>
      <Card image={Il_Brutto_Blog_Square} title={'RESTAURANTS'} subtitle={'Il Brutto - Classic Italian Dining'} post={'/'}/>
      </Grid>
      <Grid item sm={12} md={4} sx={{display:'flex',justifyContent:'center'}}>
      <Card image={Aba_Blog_Square} title={'RESTAURANTS'} subtitle={'Aba - Aesthetic Mediterranean Cuisine'} post={'/'}/>
      </Grid>
      <Grid item sm={12} md={4} sx={{display:'flex',justifyContent:'center'}}>
      <Card image={La_Madeleine_Blog_Square} title={'RESTAURANTS'} subtitle={'La Madeleine - French Patisserie'} post={'/'}/>
      </Grid>
    </Grid>
    </ThemeProvider>
  )
}

export default RestaurantsBlogGrid
