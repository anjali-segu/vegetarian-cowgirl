import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import {theme} from '../../utils/theme'
import Card from '../../atom/Card';
import { Grid } from '@mui/material';

import Maui_Activities_Blog_Square from '../../assets/images/blog_posts/maui_activities_blog_square.jpg';
import Maui_Beaches_Blog_Square from '../../assets/images/blog_posts/maui_beaches_blog_square.jpg';
import Maui_Haleakala_Blog_Square from '../../assets/images/blog_posts/maui_haleakala_blog_square.jpg';
import Maui_Road_To_Hana_Blog_Square from '../../assets/images/blog_posts/maui_road_to_hana_blog_square.jpg';
import Maui_Travel_Guide_Blog_Square from '../../assets/images/blog_posts/maui_travel_guide_blog_square.jpg';
import Maui_Vegetarian_Blog_Square from '../../assets/images/blog_posts/maui_vegetarian_blog_square.jpg';

interface Props {
}


const HawaiiMauiBlogGrid = (props:Props) => {

  return (
    <ThemeProvider theme={theme}>

    <Grid container justifyContent='center' sx={{paddingTop: theme.spacing(15)}}>
      <Grid item sm={12} md={4} sx={{display:'flex',justifyContent:'center'}}>
      <Card image={Maui_Activities_Blog_Square} title={'MAUI'} subtitle={'Activities in Maui'} post={'/under-construction'}/>
      </Grid>
      <Grid item sm={12} md={4} sx={{display:'flex',justifyContent:'center'}}>
      <Card image={Maui_Travel_Guide_Blog_Square} title={'MAUI'} subtitle={'Maui Travel Guide'} post={'/under-construction'}/>
      </Grid>
      <Grid item sm={12} md={4} sx={{display:'flex',justifyContent:'center'}}>
      <Card image={Maui_Vegetarian_Blog_Square} title={'MAUI'} subtitle={'Vegetarian Restaurants in Maui'} post={'/under-construction'}/>
      </Grid>
    </Grid>
    <Grid container justifyContent='center' sx={{paddingTop: theme.spacing(15)}}>
      <Grid item sm={12} md={4} sx={{display:'flex',justifyContent:'center'}}>
      <Card image={Maui_Beaches_Blog_Square} title={'MAUI'} subtitle={'Best Beaches in Maui'} post={'/under-construction'}/>
      </Grid>
      <Grid item sm={12} md={4} sx={{display:'flex',justifyContent:'center'}}>
      <Card image={Maui_Road_To_Hana_Blog_Square} title={'MAUI'} subtitle={'Road to Hana'} post={'/under-construction'}/>
      </Grid>
      <Grid item sm={12} md={4} sx={{display:'flex',justifyContent:'center'}}>
      <Card image={Maui_Haleakala_Blog_Square} title={'MAUI'} subtitle={'Haleakala'} post={'/under-construction'}/>
      </Grid>
    </Grid>
    </ThemeProvider>
  )
}

export default HawaiiMauiBlogGrid
