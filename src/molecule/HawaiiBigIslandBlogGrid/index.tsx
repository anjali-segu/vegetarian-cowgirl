import * as React from 'react';
import { createTheme,ThemeProvider } from '@mui/material/styles';
import {theme} from '../../utils/theme'
import Card from '../../atom/Card';
import { Grid } from '@mui/material';

interface Props {
}


const HawaiiBigIslandBlogGrid = (props:Props) => {

  return (
    <ThemeProvider theme={theme}>

    <Grid container justifyContent='center' sx={{paddingTop: theme.spacing(15)}}>
      <Grid item sm={12} md={4} sx={{display:'flex',justifyContent:'center'}}>
      <Card image={'blog_posts/mount_bonnet_blog_square.jpg'} title={'THE BIG ISLAND'} subtitle={'The Big Island Travel Guide'} post={'/'}/>
      </Grid>
      <Grid item sm={12} md={4} sx={{display:'flex',justifyContent:'center'}}>
      <Card image={'blog_posts/zilker_botanical_blog_square.jpg'} title={'THE BIG ISLAND'} subtitle={'Big Island Botanical Garden'} post={'/'}/>
      </Grid>
      <Grid item sm={12} md={4} sx={{display:'flex',justifyContent:'center'}}>
      <Card image={'blog_posts/oseyo_blog_square.jpg'} title={'THE BIG ISLAND'} subtitle={`Best Farmer's Markets`} post={'/'}/>
      </Grid>
    </Grid>
    <Grid container justifyContent='center' sx={{paddingTop: theme.spacing(15)}}>
      <Grid item sm={12} md={4} sx={{display:'flex',justifyContent:'center'}}>
      <Card image={'blog_posts/yoga_spots_blog_square.jpg'} title={'THE BIG ISLAND'} subtitle={'Activities on the Big Island'} post={'/'}/>
      </Grid>
      <Grid item sm={12} md={4} sx={{display:'flex',justifyContent:'center'}}>
      <Card image={'blog_posts/costa_rica_hotels_blog_square.png'} title={'THE BIG ISLAND'} subtitle={'Best Place to Stay'} post={'/'}/>
      </Grid>
      <Grid item sm={12} md={4} sx={{display:'flex',justifyContent:'center'}}>
      <Card image={'blog_posts/murals_blog_square.jpg'} title={'THE BIG ISLAND'} subtitle={'Best Beaches on the Big Island'} post={'/'}/>
      </Grid>
    </Grid>
    </ThemeProvider>
  )
}

export default HawaiiBigIslandBlogGrid
