import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import {theme} from '../../utils/theme'
import Card from '../../atom/Card';
import { Grid } from '@mui/material';

import Art_Supplies_Blog_Square from '../../assets/images/blog_posts/art_supplies_blog_square.jpg'
import Artist_Blog_Square from '../../assets/images/blog_posts/artist_blog_square.jpg'
import Watercolor_Blog_Square from '../../assets/images/blog_posts/watercolor_blog_square.jpg'

interface Props {
}


const DrinksBlogGrid = (props:Props) => {

  return (
    <ThemeProvider theme={theme}>

    <Grid container justifyContent='center' sx={{paddingTop: theme.spacing(15)}}>

    <Grid item sm={12} md={4} sx={{display:'flex',justifyContent:'center'}}>
      <Card image={Art_Supplies_Blog_Square} title={'OTHER'} subtitle={'My Favorite Art Supplies'} post={'/art/supplies'}/>
      </Grid>
      <Grid item sm={12} md={4} sx={{display:'flex',justifyContent:'center'}}>
      <Card image={Artist_Blog_Square} title={'OTHER'} subtitle={'Top Artists I Follow'} post={'/art/artists'}/>
      </Grid>
      <Grid item sm={12} md={4} sx={{display:'flex',justifyContent:'center'}}>
      <Card image={Watercolor_Blog_Square} title={'OTHER'} subtitle={'Intro to Watercolor - Conquer the Art Fear'} post={'/art/watercolor'}/>
      </Grid>
    </Grid>

    </ThemeProvider>
  )
}

export default DrinksBlogGrid
