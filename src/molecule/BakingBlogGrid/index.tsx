import * as React from 'react';
import { createTheme,ThemeProvider } from '@mui/material/styles';
import {theme} from '../../utils/theme'
import Card from '../../atom/Card';
import { Grid } from '@mui/material';

interface Props {
}


const BakingBlogGrid = (props:Props) => {

  return (
    <ThemeProvider theme={theme}>

    <Grid container sx={{paddingTop: theme.spacing(15), paddingLeft:theme.spacing(30),paddingRight:theme.spacing(30),}}>

      <Grid item xs={4} sx={{display:'flex',justifyContent:'center'}}>
      <Card image={'blog_posts/cake_cookies_blog_square.jpg'} title={'BAKING'} subtitle={'Chocolate Fudgey Cake Cookies '} post={'/'}/>
      </Grid>
      <Grid item xs={4} sx={{display:'flex',justifyContent:'center'}}>
      <Card image={'blog_posts/cinammon_buns_blog_square.jpg'} title={'BAKING'} subtitle={'Ultimate Cinammon Buns'} post={'/'}/>
      </Grid>
      <Grid item xs={4} sx={{display:'flex',justifyContent:'center'}}>
      <Card image={'blog_posts/eton_mess_blog_square.jpg'} title={'BAKING'} subtitle={'Eton Mess Summer Dessert'} post={'/'}/>
      </Grid>
    </Grid>

    <Grid container sx={{paddingTop: theme.spacing(15), paddingBottom: theme.spacing(15), paddingLeft:theme.spacing(30),paddingRight:theme.spacing(30),}}>
      <Grid item xs={4} sx={{display:'flex',justifyContent:'center'}}>
      <Card image={'blog_posts/italian_orange_cake_blog_square.jpeg'} title={'BAKING'} subtitle={'Italian Orange Layered Birthday Cake'} post={'/'}/>
      </Grid>
      <Grid item xs={4} sx={{display:'flex',justifyContent:'center'}}>
      <Card image={'blog_posts/pumpkin_pie_blog_square.jpeg'} title={'BAKING'} subtitle={'Easy Mascarpone Pumkin Pie'} post={'/'}/>
      </Grid>
      <Grid item xs={4} sx={{display:'flex',justifyContent:'center'}}>
      <Card image={'blog_posts/cookie_blog_square.jpg'} title={'BAKING'} subtitle={'Simple Sugar Cookie Cutouts'} post={'/'}/>
      </Grid>
    </Grid>
    </ThemeProvider>
  )
}

export default BakingBlogGrid
