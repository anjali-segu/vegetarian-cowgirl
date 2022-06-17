import * as React from 'react';
import { createTheme,ThemeProvider } from '@mui/material/styles';
import {theme} from '../../utils/theme'
import Card from '../../atom/Card';
import { Grid } from '@mui/material';

import Indianapolis_Airbnb_Blog_Square from '../../assets/images/blog_posts/indianapolis_airbnb_blog_square.jpg';
import Indianapolis_Art_Blog_Square from '../../assets/images/blog_posts/indianapolis_art_blog_square.jpg';
import Indianapolis_Day_Trip_Blog_Square from '../../assets/images/blog_posts/indianapolis_day_trip_blog_square.jpeg';
import Indianapolis_Sights_Blog_Square from '../../assets/images/blog_posts/indianapolis_sights_blog_square.jpg';
import Indianapolis_Travel_Guid_Blog_Square from '../../assets/images/blog_posts/indianapolis_travel_guid_blog_square.jpg';
import Indianapolis_Vegetarian_Blog_Square from '../../assets/images/blog_posts/indianapolis_vegetarian_blog_square.jpg';

interface Props {
}


const IndianapolisBlogGrid = (props:Props) => {

  return (
    <ThemeProvider theme={theme}>

    <Grid container justifyContent='center' sx={{paddingTop: theme.spacing(15)}}>
      <Grid item sm={12} md={4} sx={{display:'flex',justifyContent:'center'}}>
      <Card image={Indianapolis_Travel_Guid_Blog_Square} title={'INDIANAPOLIS'} subtitle={'Indianapolis Travel Guide'} post={'/'}/>
      </Grid>
      <Grid item sm={12} md={4} sx={{display:'flex',justifyContent:'center'}}>
      <Card image={Indianapolis_Art_Blog_Square} title={'INDIANAPOLIS'} subtitle={'Indianapolis Art Museum'} post={'/'}/>
      </Grid>
      <Grid item sm={12} md={4} sx={{display:'flex',justifyContent:'center'}}>
      <Card image={Indianapolis_Vegetarian_Blog_Square} title={'INDIANAPOLIS'} subtitle={'Vegetarian Restaurants to Visit'} post={'/'}/>
      </Grid>
    </Grid>
    <Grid container justifyContent='center' sx={{paddingTop: theme.spacing(15)}}>
      <Grid item sm={12} md={4} sx={{display:'flex',justifyContent:'center'}}>
      <Card image={Indianapolis_Day_Trip_Blog_Square} title={'INDIANAPOLIS'} subtitle={'Day Trip to Indianapolis'} post={'/'}/>
      </Grid>
      <Grid item sm={12} md={4} sx={{display:'flex',justifyContent:'center'}}>
      <Card image={Indianapolis_Airbnb_Blog_Square} title={'INDIANAPOLIS'} subtitle={'Airbnbs in Indianapolis'} post={'/'}/>
      </Grid>
      <Grid item sm={12} md={4} sx={{display:'flex',justifyContent:'center'}}>
      <Card image={Indianapolis_Sights_Blog_Square} title={'INDIANAPOLIS'} subtitle={'Top Coffee Shops'} post={'/'}/>
      </Grid>
    </Grid>
    </ThemeProvider>
  )
}

export default IndianapolisBlogGrid
