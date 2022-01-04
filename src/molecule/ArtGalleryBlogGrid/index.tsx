import * as React from 'react';
import { createTheme,ThemeProvider } from '@mui/material/styles';
import {theme} from '../../utils/theme'
import Card from '../../atom/Card';
import { Grid } from '@mui/material';

interface Props {
}


const ArtGalleryBlogGrid = (props:Props) => {

  return (
    <ThemeProvider theme={theme}>

    <Grid container sx={{paddingTop: theme.spacing(15), paddingLeft:theme.spacing(30),paddingRight:theme.spacing(30),}}>

      <Grid item xs={4} sx={{display:'flex',justifyContent:'center'}}>
      <Card image={'blog_posts/minimalist_blog_square.png'} title={'GALLERY'} subtitle={'Movement - Set of 4'} post={'/'}/>
      </Grid>
      <Grid item xs={4} sx={{display:'flex',justifyContent:'center'}}>
      <Card image={'blog_posts/plant_gallery_blog_square.png'} title={'GALLERY'} subtitle={'Ode to Plants - Set of 7'} post={'/'}/>
      </Grid>
      <Grid item xs={4} sx={{display:'flex',justifyContent:'center'}}>
      <Card image={'blog_posts/blue_gallery_blog_square.png'} title={'GALLERY'} subtitle={'Blue Beauty - Set of 7'} post={'/'}/>
      </Grid>
    </Grid>

    <Grid container sx={{paddingTop: theme.spacing(15), paddingBottom: theme.spacing(15), paddingLeft:theme.spacing(30),paddingRight:theme.spacing(30),}}>
      <Grid item xs={4} sx={{display:'flex',justifyContent:'center'}}>
      <Card image={'blog_posts/music_blog_square.png'} title={'GALLERY'} subtitle={'Jam Out - Set of 4'} post={'/'}/>
      </Grid>
      <Grid item xs={4} sx={{display:'flex',justifyContent:'center'}}>
      <Card image={'blog_posts/mental_health_blog_square.png'} title={'GALLERY'} subtitle={'Break - Set of 4'} post={'/'}/>
      </Grid>
      <Grid item xs={4} sx={{display:'flex',justifyContent:'center'}}>
      <Card image={'blog_posts/beige_blog_square.png'} title={'GALLERY'} subtitle={'Naked Beauty - Set of 7'} post={'/'}/>
      </Grid>
    </Grid>
    </ThemeProvider>
  )
}

export default ArtGalleryBlogGrid
