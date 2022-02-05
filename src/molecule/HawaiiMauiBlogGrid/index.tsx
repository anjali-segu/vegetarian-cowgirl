import * as React from 'react';
import { createTheme,ThemeProvider } from '@mui/material/styles';
import {theme} from '../../utils/theme'
import Card from '../../atom/Card';
import { Grid } from '@mui/material';

interface Props {
}


const HawaiiMauiBlogGrid = (props:Props) => {

  return (
    <ThemeProvider theme={theme}>

    <Grid container justifyContent='center' sx={{paddingTop: theme.spacing(15)}}>
      <Grid item sm={12} md={4} sx={{display:'flex',justifyContent:'center'}}>
      <Card image={'blog_posts/mount_bonnet_blog_square.jpg'} title={'MAUI'} subtitle={'Maui Travel Guide'} post={'/'}/>
      </Grid>
      <Grid item sm={12} md={4} sx={{display:'flex',justifyContent:'center'}}>
      <Card image={'blog_posts/zilker_botanical_blog_square.jpg'} title={'MAUI'} subtitle={'Road to Hana'} post={'/'}/>
      </Grid>
      <Grid item sm={12} md={4} sx={{display:'flex',justifyContent:'center'}}>
      <Card image={'blog_posts/oseyo_blog_square.jpg'} title={'MAUI'} subtitle={'Vegetarian Restaurants in Maui'} post={'/'}/>
      </Grid>
    </Grid>
    <Grid container justifyContent='center' sx={{paddingTop: theme.spacing(15)}}>
      <Grid item sm={12} md={4} sx={{display:'flex',justifyContent:'center'}}>
      <Card image={'blog_posts/yoga_spots_blog_square.jpg'} title={'MAUI'} subtitle={'Activities in Maui'} post={'/'}/>
      </Grid>
      <Grid item sm={12} md={4} sx={{display:'flex',justifyContent:'center'}}>
      <Card image={'blog_posts/costa_rica_hotels_blog_square.png'} title={'MAUI'} subtitle={'Haleakala'} post={'/'}/>
      </Grid>
      <Grid item sm={12} md={4} sx={{display:'flex',justifyContent:'center'}}>
      <Card image={'blog_posts/murals_blog_square.jpg'} title={'MAUI'} subtitle={'Best Beaches in Maui'} post={'/'}/>
      </Grid>
    </Grid>
    </ThemeProvider>
  )
}

export default HawaiiMauiBlogGrid
