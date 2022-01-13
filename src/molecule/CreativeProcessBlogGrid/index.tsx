import * as React from 'react';
import { createTheme,ThemeProvider } from '@mui/material/styles';
import {theme} from '../../utils/theme'
import Card from '../../atom/Card';
import { Grid } from '@mui/material';

interface Props {
}


const CreativeProcessBlogGrid = (props:Props) => {

  return (
    <ThemeProvider theme={theme}>

    <Grid container justifyContent='center' sx={{paddingTop: theme.spacing(15)}}>

    <Grid item sm={12} md={4} sx={{display:'flex',justifyContent:'center'}}>
      <Card image={'blog_posts/brushes_blog_square.jpg'} title={'CREATIVE PROCESS'} subtitle={'The Creative Stump -  How to Get Past It'} post={'/'}/>
      </Grid>
      <Grid item sm={12} md={4} sx={{display:'flex',justifyContent:'center'}}>
      <Card image={'blog_posts/google_blog_square.jpg'} title={'CREATIVE PROCESS'} subtitle={'Inspiration 101'} post={'/'}/>
      </Grid>
      <Grid item sm={12} md={4} sx={{display:'flex',justifyContent:'center'}}>
      <Card image={'blog_posts/burst_blog_square.jpg'} title={'CREATIVE PROCESS'} subtitle={'Creative Burst Utilization'} post={'/'}/>
      </Grid>
    </Grid>

    <Grid container justifyContent='center' sx={{paddingTop: theme.spacing(15)}}>
    <Grid item sm={12} md={4} sx={{display:'flex',justifyContent:'center'}}>
      <Card image={'blog_posts/paintbrush_blog_square.jpg'} title={'CREATIVE PROCESS'} subtitle={'Color Stories in Gallery Walls'} post={'/'}/>
      </Grid>
      <Grid item sm={12} md={4} sx={{display:'flex',justifyContent:'center'}}>
      <Card image={'blog_posts/procreate_blog_square.jpg'} title={'CREATIVE PROCESS'} subtitle={'Intro to Procreate'} post={'/'}/>
      </Grid>
      <Grid item sm={12} md={4} sx={{display:'flex',justifyContent:'center'}}>
      <Card image={'blog_posts/planning_blog_square.png'} title={'CREATIVE PROCESS'} subtitle={'Google Drawing - A Secret Hack'} post={'/'}/>
      </Grid>
    </Grid>
    </ThemeProvider>
  )
}

export default CreativeProcessBlogGrid
