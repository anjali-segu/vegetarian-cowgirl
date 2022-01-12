import * as React from 'react';
import { createTheme,ThemeProvider } from '@mui/material/styles';
import {theme} from '../../utils/theme'
import Card from '../../atom/Card';
import { Grid } from '@mui/material';
import Header from '../../atom/Header'
import HeaderImage from '../../atom/HeaderImage'
import Media from 'react-media';

interface Props {
}


const FeaturedPosts = (props:Props) => {

  return (
    <ThemeProvider theme={theme}>
    <Media query="(max-width: 600px)" render={() =>
      (
        <Grid container justifyContent='center'>
          <Grid item xs={1} sx={{display:'flex',justifyContent:'center'}}>
           <img style={{maxHeight: theme.spacing(13)}}src="Logo3.png" alt="Paris"/>
          </Grid>
        </Grid>
      )}
    />
    <Header text={"Featured Posts"} margin={5}/>
    <Grid container justifyContent='center' sx={{paddingTop: theme.spacing(15),}}>

      <Grid item sm={12} md={12} lg={4} sx={{display:'flex',justifyContent:'center'}}>
        <Card image={'images/costa.jpg'} title={'COSTA RICA'} subtitle={'Day Trip to Arenal Volcano'} post={'/'}/>
      </Grid>

      <Grid item sm={12} md={12} lg={4} sx={{display:'flex',justifyContent:'center'}}>
        <Card image={'blog_posts/uchiko_blog_square.jpg'} title={'RESTAURANTS'} subtitle={'Uchkio - Japanese Vegan Fushion'} post={'/'}/>
      </Grid>

      <Grid item sm={12} md={12} lg={4} sx={{display:'flex',justifyContent:'center'}}>
        <Card image={'blog_posts/cinammon_buns_blog_square.jpg'} title={'BAKING'} subtitle={'Ultimate Cinammon Bun Recipe'} post={'/'}/>
      </Grid>

    </Grid>
    </ThemeProvider>
  )
}

export default FeaturedPosts
