import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import {theme} from '../../utils/theme'
import Card from '../../atom/Card';
import { Grid } from '@mui/material';
import Header from '../../atom/Header'
import Media from 'react-media';

import Austin_Tea_Guide_Blog_Square from '../../assets/images/blog_posts/tea_jar_blog_square.jpg';
import Moms_Jamun_Blog_Square from '../../assets/images/blog_posts/jamun_served_blog_square.jpg';
import Uchiko_Blog_Square from '../../assets/images/blog_posts/uchiko_blog_square.jpg';

import Logo3 from '../../assets/images/icons/logos/Logo3.png';

interface Props {
}


const FeaturedPosts = (props:Props) => {

  return (
    <ThemeProvider theme={theme}>
    <Media query="(max-width: 600px)" render={() =>
      (
        <Grid container justifyContent='center'>
          <Grid item xs={1} sx={{display:'flex',justifyContent:'center'}}>
           <img style={{maxHeight: theme.spacing(13)}}src={Logo3} alt="The Vegetarian Cowgirl logo of a cowboy boot and a monstera plant"/>
          </Grid>
        </Grid>
      )}
    />
    <Header text={"Featured Posts"} margin={3}/>
    <Grid container justifyContent='center' sx={{paddingTop: theme.spacing(15),}}>

      <Grid item sm={12} md={12} lg={4} sx={{display:'flex',justifyContent:'center'}}>
        <Card image={Austin_Tea_Guide_Blog_Square} title={'AUSTIN'} subtitle={'Austin Ultimate Tea Guide'} post={'/austin-living/austin-tea-guide'}/>
      </Grid>

      <Grid item sm={12} md={12} lg={4} sx={{display:'flex',justifyContent:'center'}}>
        <Card image={Uchiko_Blog_Square} title={'RESTAURANTS'} subtitle={'Uchiko - Japanese Vegan Fushion'} post={'/austin-living/uchiko'}/>
      </Grid>

      <Grid item sm={12} md={12} lg={4} sx={{display:'flex',justifyContent:'center'}}>
        <Card image={Moms_Jamun_Blog_Square} title={'COOKING'} subtitle={`Mom's Jamun Dessert`} post={'/recipes/moms-jamun'}/>
      </Grid>

    </Grid>
    </ThemeProvider>
  )
}

export default FeaturedPosts
