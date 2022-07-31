import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import {theme} from '../../utils/theme'
import Card from '../../atom/Card';
import { Grid } from '@mui/material';

import Brushes_Blog_Square from '../../assets/images/blog_posts/brushes_blog_square.jpg';
import Burst_Blog_Square from '../../assets/images/blog_posts/burst_blog_square.jpg';
import Google_Blog_Square from '../../assets/images/blog_posts/google_blog_square.jpg';
import Paintbrush_Blog_Square from '../../assets/images/blog_posts/paintbrush_blog_square.jpg';
import Planning_Blog_Square from '../../assets/images/blog_posts/planning_blog_square.png';
import Procreate_Blog_Square from '../../assets/images/blog_posts/procreate_blog_square.jpg';

interface Props {
}


const CreativeProcessBlogGrid = (props:Props) => {

  return (
    <ThemeProvider theme={theme}>

    <Grid container justifyContent='center' sx={{paddingTop: theme.spacing(15)}}>

    <Grid item sm={12} md={4} sx={{display:'flex',justifyContent:'center'}}>
      <Card image={Brushes_Blog_Square} title={'CREATIVE PROCESS'} subtitle={'The Creative Stump -  How to Get Past It'} post={'/art/creative-process/creative-stump'}/>
      </Grid>
      <Grid item sm={12} md={4} sx={{display:'flex',justifyContent:'center'}}>
      <Card image={Google_Blog_Square} title={'CREATIVE PROCESS'} subtitle={'Inspiration 101'} post={'/art/creative-process/inspiration-101'}/>
      </Grid>
      <Grid item sm={12} md={4} sx={{display:'flex',justifyContent:'center'}}>
      <Card image={Burst_Blog_Square} title={'CREATIVE PROCESS'} subtitle={'Creative Burst Utilization'} post={'/art/creative-process/creative-burst'}/>
      </Grid>
    </Grid>

    <Grid container justifyContent='center' sx={{paddingTop: theme.spacing(15)}}>
    <Grid item sm={12} md={4} sx={{display:'flex',justifyContent:'center'}}>
      <Card image={Paintbrush_Blog_Square} title={'CREATIVE PROCESS'} subtitle={'Color Stories in Gallery Walls'} post={'/art/creative-process/color-stories'}/>
      </Grid>
      <Grid item sm={12} md={4} sx={{display:'flex',justifyContent:'center'}}>
      <Card image={Procreate_Blog_Square} title={'CREATIVE PROCESS'} subtitle={'Intro to Procreate'} post={'/art/creative-process/procreate'}/>
      </Grid>
      <Grid item sm={12} md={4} sx={{display:'flex',justifyContent:'center'}}>
      <Card image={Planning_Blog_Square} title={'CREATIVE PROCESS'} subtitle={'Google Drawing - A Secret Hack'} post={'/art/creative-process/google-drawing'}/>
      </Grid>
    </Grid>
    </ThemeProvider>
  )
}

export default CreativeProcessBlogGrid
