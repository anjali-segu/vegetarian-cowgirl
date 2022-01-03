import * as React from 'react';
import { createTheme,ThemeProvider } from '@mui/material/styles';
import {theme} from '../../utils/theme'
import Card from '../../atom/Card';
import { Grid } from '@mui/material';

interface Props {
}


const CookingBlogGrid = (props:Props) => {

  return (
    <ThemeProvider theme={theme}>

    <Grid container sx={{paddingTop: theme.spacing(15), paddingLeft:theme.spacing(30),paddingRight:theme.spacing(30),}}>

      <Grid item xs={4} sx={{display:'flex',justifyContent:'center'}}>
      <Card image={'images/costa.jpg'} title={'COSTA RICA'} subtitle={'Day Trip to Arenal Volcano'} post={'/'}/>
      </Grid>
      <Grid item xs={4} sx={{display:'flex',justifyContent:'center'}}>
      <Card image={'images/costa.jpg'} title={'COSTA RICA'} subtitle={'Day Trip to Arenal Volcano'} post={'/'}/>
      </Grid>
      <Grid item xs={4} sx={{display:'flex',justifyContent:'center'}}>
      <Card image={'images/costa.jpg'} title={'COSTA RICA'} subtitle={'Day Trip to Arenal Volcano'} post={'/'}/>
      </Grid>
    </Grid>

    <Grid container sx={{paddingTop: theme.spacing(15), paddingBottom: theme.spacing(15), paddingLeft:theme.spacing(30),paddingRight:theme.spacing(30),}}>
      <Grid item xs={4} sx={{display:'flex',justifyContent:'center'}}>
      <Card image={'images/costa.jpg'} title={'COSTA RICA'} subtitle={'Day Trip to Arenal Volcano'} post={'/'}/>
      </Grid>
      <Grid item xs={4} sx={{display:'flex',justifyContent:'center'}}>
      <Card image={'images/costa.jpg'} title={'COSTA RICA'} subtitle={'Day Trip to Arenal Volcano'} post={'/'}/>
      </Grid>
      <Grid item xs={4} sx={{display:'flex',justifyContent:'center'}}>
      <Card image={'images/costa.jpg'} title={'COSTA RICA'} subtitle={'Day Trip to Arenal Volcano'} post={'/'}/>
      </Grid>
    </Grid>
    </ThemeProvider>
  )
}

export default CookingBlogGrid
