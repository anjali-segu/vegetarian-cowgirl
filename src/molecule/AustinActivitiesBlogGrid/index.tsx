import * as React from 'react';
import { createTheme,ThemeProvider } from '@mui/material/styles';
import {theme} from '../../utils/theme'
import Card from '../../atom/Card';
import { Grid } from '@mui/material';

interface Props {
}


const AustinActivitiesBlogGrid = (props:Props) => {

  return (
    <ThemeProvider theme={theme}>

    <Grid container justifyContent='center' sx={{paddingTop: theme.spacing(15)}}>
    <Grid item sm={12} md={4} sx={{display:'flex',justifyContent:'center'}}>
      <Card image={'blog_posts/murals_blog_square.jpg'} title={'AUSTIN ACTIVITIES'} subtitle={'Beautiful Austin Murals to Visit'} post={'/'}/>
      </Grid>
      <Grid item sm={12} md={4} sx={{display:'flex',justifyContent:'center'}}>
      <Card image={'blog_posts/yoga_spots_blog_square.jpg'} title={'AUSTIN ACTIVITIES'} subtitle={'Unique Yoga Spots'} post={'/'}/>
      </Grid>
      <Grid item sm={12} md={4} sx={{display:'flex',justifyContent:'center'}}>
      <Card image={'blog_posts/cafe_monet_blog_square.jpg'} title={'AUSTIN ACTIVITIES'} subtitle={'Cafe Monet - Austin Art Break'} post={'/austin-living/cafe-monet'}/>
      </Grid>
    </Grid>

    <Grid container justifyContent='center' sx={{paddingTop: theme.spacing(15)}}>
    <Grid item sm={12} md={4} sx={{display:'flex',justifyContent:'center'}}>
      <Card image={'blog_posts/zilker_botanical_blog_square.jpg'} title={'AUSTIN ACTIVITIES'} subtitle={'Zilker Botanical Garden'} post={'/'}/>
      </Grid>
      <Grid item sm={12} md={4} sx={{display:'flex',justifyContent:'center'}}>
      <Card image={'blog_posts/mozarts_blog_square.jpg'} title={'AUSTIN ACTIVITIES'} subtitle={'Mozarts - Christmas in Austin'} post={'/'}/>
      </Grid>
      <Grid item sm={12} md={4} sx={{display:'flex',justifyContent:'center'}}>
      <Card image={'blog_posts/mount_bonnet_blog_square.jpg'} title={'AUSTIN ACTIVITIES'} subtitle={'Mount Bonnet - An Honest Review'} post={'/'}/>
      </Grid>
    </Grid>
    </ThemeProvider>
  )
}

export default AustinActivitiesBlogGrid
