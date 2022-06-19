import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import {theme} from '../../utils/theme'
import Card from '../../atom/Card';
import { Grid } from '@mui/material';

import Big_Island_Activities_Blog_Square from '../../assets/images/blog_posts/big_island_activities_blog_square.jpg';
import Big_Island_Beaches_Blog_Square from '../../assets/images/blog_posts/big_island_beaches_blog_square.jpg';
import Big_Island_Botanical_Blog_Square from '../../assets/images/blog_posts/big_island_botanical_blog_square.jpg';
import Big_Island_Farmers_Market_Blog_Square from '../../assets/images/blog_posts/big_island_farmers_market_blog_square.jpg';
import Big_Island_Stay_Blog_Square from '../../assets/images/blog_posts/big_island_stay_blog_square.jpg';
import Big_Island_Travel_Blog_Square from '../../assets/images/blog_posts/big_island_travel_blog_square.jpg';

interface Props {
}


const HawaiiBigIslandBlogGrid = (props:Props) => {

  return (
    <ThemeProvider theme={theme}>

    <Grid container justifyContent='center' sx={{paddingTop: theme.spacing(15)}}>
      <Grid item sm={12} md={4} sx={{display:'flex',justifyContent:'center'}}>
      <Card image={Big_Island_Travel_Blog_Square} title={'THE BIG ISLAND'} subtitle={'The Big Island Travel Guide'} post={'/'}/>
      </Grid>
      <Grid item sm={12} md={4} sx={{display:'flex',justifyContent:'center'}}>
      <Card image={Big_Island_Botanical_Blog_Square} title={'THE BIG ISLAND'} subtitle={'Big Island Botanical Garden'} post={'/'}/>
      </Grid>
      <Grid item sm={12} md={4} sx={{display:'flex',justifyContent:'center'}}>
      <Card image={Big_Island_Farmers_Market_Blog_Square} title={'THE BIG ISLAND'} subtitle={`Best Farmer's Markets`} post={'/'}/>
      </Grid>
    </Grid>
    <Grid container justifyContent='center' sx={{paddingTop: theme.spacing(15)}}>
      <Grid item sm={12} md={4} sx={{display:'flex',justifyContent:'center'}}>
      <Card image={Big_Island_Activities_Blog_Square} title={'THE BIG ISLAND'} subtitle={'Activities on the Big Island'} post={'/'}/>
      </Grid>
      <Grid item sm={12} md={4} sx={{display:'flex',justifyContent:'center'}}>
      <Card image={Big_Island_Stay_Blog_Square} title={'THE BIG ISLAND'} subtitle={'Best Place to Stay'} post={'/'}/>
      </Grid>
      <Grid item sm={12} md={4} sx={{display:'flex',justifyContent:'center'}}>
      <Card image={Big_Island_Beaches_Blog_Square} title={'THE BIG ISLAND'} subtitle={'Best Beaches on the Big Island'} post={'/'}/>
      </Grid>
    </Grid>
    </ThemeProvider>
  )
}

export default HawaiiBigIslandBlogGrid
