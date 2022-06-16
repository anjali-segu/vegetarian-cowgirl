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

    <Grid container justifyContent='center' sx={{paddingTop: theme.spacing(15)}}>
      <Grid item sm={12} md={4} sx={{display:'flex',justifyContent:'center'}}>
          <Card image={'blog_posts/eggs_en_cocotte_blog_square.jpg'} title={'COOKING'} subtitle={'Eggs en Cocotte w/ Carmelized Onions and Roasted Tomatoes'} post={'/recipes/eggs-en-cocotte/'}/>
      </Grid>
      <Grid item sm={12} md={4} sx={{display:'flex',justifyContent:'center'}}>
      <Card image={'blog_posts/elote_blog_square.jpg'} title={'COOKING'} subtitle={'Deconstructed Elote'} post={'/recipes/deconstructed-elote'}/>
      </Grid>
      <Grid item sm={12} md={4} sx={{display:'flex',justifyContent:'center'}}>
          <Card image={'blog_posts/jalepeno_poppers_blog_square.jpg'} title={'COOKING'} subtitle={'Puff Pastry Jalepeno Poppers'} post={'/recipes/puff-pastry-jalepeno-poppers'}/>
      </Grid>
    </Grid>
    <Grid container justifyContent='center' sx={{paddingTop: theme.spacing(15)}}>
      <Grid item sm={12} md={4} sx={{display:'flex',justifyContent:'center'}}>
      <Card image={'blog_posts/turkish_eggs_blog_square.jpg'} title={'COOKING'} subtitle={'Turkish Eggs'} post={'/recipes/turkish-eggs'}/>
      </Grid>
      <Grid item sm={12} md={4} sx={{display:'flex',justifyContent:'center'}}>
      <Card image={'blog_posts/miso_soup_blog_square.jpg'} title={'COOKING'} subtitle={'Mushroom Miso Soup'} post={'/recipes/mushroom-miso-soup'}/>
      </Grid>
      <Grid item sm={12} md={4} sx={{display:'flex',justifyContent:'center'}}>
      <Card image={'blog_posts/dumplings_blog_square.jpg'} title={'COOKING'} subtitle={'Veggie Packed Dumplings'} post={'/recipes/veggie-packed-dumplings'}/>
      </Grid>
    </Grid>
    </ThemeProvider>
  )
}

export default CookingBlogGrid
