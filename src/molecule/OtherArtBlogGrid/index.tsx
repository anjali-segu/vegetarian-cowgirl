import * as React from 'react';
import { createTheme,ThemeProvider } from '@mui/material/styles';
import {theme} from '../../utils/theme'
import Card from '../../atom/Card';
import { Grid } from '@mui/material';

interface Props {
}


const DrinksBlogGrid = (props:Props) => {

  return (
    <ThemeProvider theme={theme}>

    <Grid container justifyContent='center' sx={{paddingTop: theme.spacing(15)}}>

    <Grid item sm={12} md={4} sx={{display:'flex',justifyContent:'center'}}>
      <Card image={'blog_posts/art_supplies_blog_square.jpg'} title={'OTHER'} subtitle={'My Favorite Art Supplies'} post={'/'}/>
      </Grid>
      <Grid item sm={12} md={4} sx={{display:'flex',justifyContent:'center'}}>
      <Card image={'blog_posts/artist_blog_square.jpg'} title={'OTHER'} subtitle={'Top Artists I Follow'} post={'/'}/>
      </Grid>
      <Grid item sm={12} md={4} sx={{display:'flex',justifyContent:'center'}}>
      <Card image={'blog_posts/watercolor_blog_square.jpg'} title={'OTHER'} subtitle={'Intro to Watercolor - Conquer the Art Fear'} post={'/'}/>
      </Grid>
    </Grid>

    </ThemeProvider>
  )
}

export default DrinksBlogGrid
