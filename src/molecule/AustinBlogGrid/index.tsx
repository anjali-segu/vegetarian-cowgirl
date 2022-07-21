import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import {theme} from '../../utils/theme'
import Card from '../../atom/Card';
import { Grid } from '@mui/material';

import Costa_Rica_Hotels_Blog_Square from '../../assets/images/blog_posts/costa_rica_hotels_blog_square.png';
import Mount_Bonnet_Blog_Square from '../../assets/images/blog_posts/mount_bonnet_blog_square.jpg';
import Murals_Blog_Square from '../../assets/images/blog_posts/murals_blog_square.jpg';
import Oseyo_Blog_Square from '../../assets/images/blog_posts/oseyo_blog_square.jpg';
import Yoga_Spots_Blog_Square from '../../assets/images/blog_posts/yoga_spots_blog_square.jpg';
import Zilker_Botanical_Blog_Square from '../../assets/images/blog_posts/zilker_botanical_blog_square.jpg';

interface Props {
}


const AustinBlogGrid = (props:Props) => {

  return (
    <ThemeProvider theme={theme}>

    <Grid container justifyContent='center' sx={{paddingTop: theme.spacing(15)}}>
      <Grid item sm={12} md={4} sx={{display:'flex',justifyContent:'center'}}>
      <Card image={Mount_Bonnet_Blog_Square} title={'AUSTIN'} subtitle={'Austin Travel Guide'} post={'/austin/mount-bonnell'}/>
      </Grid>
      <Grid item sm={12} md={4} sx={{display:'flex',justifyContent:'center'}}>
      <Card image={Zilker_Botanical_Blog_Square} title={'AUSTIN'} subtitle={'Zilker Botanical Garden'} post={'/austin/zilker'}/>
      </Grid>
      <Grid item sm={12} md={4} sx={{display:'flex',justifyContent:'center'}}>
      <Card image={Oseyo_Blog_Square} title={'AUSTIN'} subtitle={'Vegetarian Restaurants in Austin'} post={'/austin/oseyo'}/>
      </Grid>
    </Grid>
    <Grid container justifyContent='center' sx={{paddingTop: theme.spacing(15)}}>
      <Grid item sm={12} md={4} sx={{display:'flex',justifyContent:'center'}}>
      <Card image={Yoga_Spots_Blog_Square} title={'AUSTIN'} subtitle={'Activities in Austin'} post={'/austin/yoga-spots'}/>
      </Grid>
      <Grid item sm={12} md={4} sx={{display:'flex',justifyContent:'center'}}>
      <Card image={Costa_Rica_Hotels_Blog_Square} title={'AUSTIN'} subtitle={'Airbnbs in Austin'} post={'/austin/airbnbs'}/>
      </Grid>
      <Grid item sm={12} md={4} sx={{display:'flex',justifyContent:'center'}}>
      <Card image={Murals_Blog_Square} title={'AUSTIN'} subtitle={'Beautiful Austin Murals to Visit'} post={'/austin/murals'}/>
      </Grid>
    </Grid>
    </ThemeProvider>
  )
}

export default AustinBlogGrid
