import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import {theme} from '../../utils/theme'
import Card from '../../atom/Card';
import { Grid } from '@mui/material';

import Cafe_Monet_Blog_Square from '../../assets/images/blog_posts/cafe_monet_blog_square.jpg';
import Mount_Bonnet_Blog_Square from '../../assets/images/blog_posts/mount_bonnet_blog_square.jpg';
import Mozarts_Blog_Square from '../../assets/images/blog_posts/mozarts_blog_square.jpg';
import Murals_Blog_Square from '../../assets/images/blog_posts/murals_blog_square.jpg';
import Yoga_Spots_Blog_Square from '../../assets/images/blog_posts/yoga_spots_blog_square.jpg';
import Zilker_Botanical_Blog_Square from '../../assets/images/blog_posts/zilker_botanical_blog_square.jpg';

interface Props {
}


const AustinActivitiesBlogGrid = (props:Props) => {

  return (
    <ThemeProvider theme={theme}>

    <Grid container justifyContent='center' sx={{paddingTop: theme.spacing(15)}}>
    <Grid item sm={12} md={4} sx={{display:'flex',justifyContent:'center'}}>
      <Card image={Murals_Blog_Square} title={'AUSTIN ACTIVITIES'} subtitle={'Beautiful Austin Murals to Visit'} post={'/under-construction'}/>
      </Grid>
      <Grid item sm={12} md={4} sx={{display:'flex',justifyContent:'center'}}>
      <Card image={Yoga_Spots_Blog_Square} title={'AUSTIN ACTIVITIES'} subtitle={'Unique Yoga Spots'} post={'/under-construction'}/>
      </Grid>
      <Grid item sm={12} md={4} sx={{display:'flex',justifyContent:'center'}}>
      <Card image={Cafe_Monet_Blog_Square} title={'AUSTIN ACTIVITIES'} subtitle={'Cafe Monet - Austin Art Break'} post={'/austin-living/cafe-monet'}/>
      </Grid>
    </Grid>

    <Grid container justifyContent='center' sx={{paddingTop: theme.spacing(15)}}>
    <Grid item sm={12} md={4} sx={{display:'flex',justifyContent:'center'}}>
      <Card image={Zilker_Botanical_Blog_Square} title={'AUSTIN ACTIVITIES'} subtitle={'Zilker Botanical Garden'} post={'/under-construction'}/>
      </Grid>
      <Grid item sm={12} md={4} sx={{display:'flex',justifyContent:'center'}}>
      <Card image={Mozarts_Blog_Square} title={'AUSTIN ACTIVITIES'} subtitle={'Mozarts - Christmas in Austin'} post={'/under-construction'}/>
      </Grid>
      <Grid item sm={12} md={4} sx={{display:'flex',justifyContent:'center'}}>
      <Card image={Mount_Bonnet_Blog_Square} title={'AUSTIN ACTIVITIES'} subtitle={'Mount Bonnell - An Honest Review'} post={'/under-construction'}/>
      </Grid>
    </Grid>
    </ThemeProvider>
  )
}

export default AustinActivitiesBlogGrid
