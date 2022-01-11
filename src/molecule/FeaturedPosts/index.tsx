import * as React from 'react';
import { createTheme,ThemeProvider } from '@mui/material/styles';
import {theme} from '../../utils/theme'
import Card from '../../atom/Card';
import { Grid } from '@mui/material';
import Header from '../../atom/Header'

interface Props {
}


const FeaturedPosts = (props:Props) => {

  return (
    <ThemeProvider theme={theme}>
    <Header text={"Featured Posts"}/>
    <Grid container sx={{paddingTop: theme.spacing(15), paddingLeft:theme.spacing(30),paddingRight:theme.spacing(30),}}>

      <Grid item xs={12} md={4} sx={{display:'flex',justifyContent:'center'}}>
        <Card image={'images/costa.jpg'} title={'COSTA RICA'} subtitle={'Day Trip to Arenal Volcano'} post={'/'}/>
      </Grid>

      <Grid item xs={12} md={4} sx={{display:'flex',justifyContent:'center'}}>
        <Card image={'blog_posts/uchiko_blog_square.jpg'} title={'RESTAURANTS'} subtitle={'Uchkio - Japanese Vegan Fushion'} post={'/'}/>
      </Grid>

      <Grid item xs={12} md={4} sx={{display:'flex',justifyContent:'center'}}>
        <Card image={'blog_posts/cinammon_buns_blog_square.jpg'} title={'BAKING'} subtitle={'Ultimate Cinammon Bun Recipe'} post={'/'}/>
      </Grid>

    </Grid>
    </ThemeProvider>
  )
}

export default FeaturedPosts
