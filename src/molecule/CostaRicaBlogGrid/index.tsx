import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import {theme} from '../../utils/theme'
import Card from '../../atom/Card';
import { Grid } from '@mui/material';

import Arenal_Bridges_Blog_Square from '../../assets/images/blog_posts/arenal_bridges_blog_square.png'
import Arenal_Volcano_Blog_Square from '../../assets/images/blog_posts/arenal_volcano_blog_square.png'
import Costa_Rica_Beaches_Blog_Square from '../../assets/images/blog_posts/costa_rica_beaches_blog_square.png'
import Costa_Rica_Hotels_Blog_Square from '../../assets/images/blog_posts/costa_rica_hotels_blog_square.png';
import Costa_Rica_Travel_Blog_Square from '../../assets/images/blog_posts/costa_rica_travel_blog_square.png';
import Costa_Rica_Vegetarian_Blog_Square from '../../assets/images/blog_posts/costa_rica_vegetarian_blog_square.png';

interface Props {
}


const CostaRicaBlogGrid = (props:Props) => {

  return (
    <ThemeProvider theme={theme}>

    <Grid container justifyContent='center' sx={{paddingTop: theme.spacing(15)}}>
      <Grid item sm={12} md={4} sx={{display:'flex',justifyContent:'center'}}>
      <Card image={Costa_Rica_Travel_Blog_Square} title={'COSTA RICA'} subtitle={'Costa Rica Travel Guide'} post={'/'}/>
      </Grid>
      <Grid item sm={12} md={4} sx={{display:'flex',justifyContent:'center'}}>
      <Card image={Arenal_Volcano_Blog_Square} title={'COSTA RICA'} subtitle={'Arenal Volcano'} post={'/'}/>
      </Grid>
      <Grid item sm={12} md={4} sx={{display:'flex',justifyContent:'center'}}>
      <Card image={Costa_Rica_Vegetarian_Blog_Square} title={'COSTA RICA'} subtitle={'Vegetarian Restaurants in Costa Rica'} post={'/'}/>
      </Grid>
    </Grid>
    <Grid container justifyContent='center' sx={{paddingTop: theme.spacing(15)}}>
      <Grid item sm={12} md={4} sx={{display:'flex',justifyContent:'center'}}>
      <Card image={Arenal_Bridges_Blog_Square} title={'COSTA RICA'} subtitle={'Activities in Costa Rica'} post={'/'}/>
      </Grid>
      <Grid item sm={12} md={4} sx={{display:'flex',justifyContent:'center'}}>
      <Card image={Costa_Rica_Hotels_Blog_Square} title={'COSTA RICA'} subtitle={'Hotels in Costa Rica'} post={'/'}/>
      </Grid>
      <Grid item sm={12} md={4} sx={{display:'flex',justifyContent:'center'}}>
      <Card image={Costa_Rica_Beaches_Blog_Square} title={'COSTA RICA'} subtitle={'Beaches in Costa Rica'} post={'/'}/>
      </Grid>
    </Grid>
    </ThemeProvider>
  )
}

export default CostaRicaBlogGrid
