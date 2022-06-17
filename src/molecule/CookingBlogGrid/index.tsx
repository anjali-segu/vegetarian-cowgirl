import * as React from 'react';
import { createTheme,ThemeProvider } from '@mui/material/styles';
import {theme} from '../../utils/theme'
import Card from '../../atom/Card';
import { Grid } from '@mui/material';

import Dumplings_Blog_Square from '../../assets/images/blog_posts/dumplings_blog_square.jpg';
import Eggs_En_Cocotte_Blog_Square from '../../assets/images/blog_posts/eggs_en_cocotte_blog_square.jpg';
import Elote_Blog_Square from '../../assets/images/blog_posts/elote_blog_square.jpg';
import Jalapeno_Poppers_Blog_Square from '../../assets/images/blog_posts/jalapeno_poppers_blog_square.jpg';
import Miso_Soup_Blog_Square from '../../assets/images/blog_posts/miso_soup_blog_square.jpg';
import Turkish_Eggs_Blog_Square from '../../assets/images/blog_posts/turkish_eggs_blog_square.jpg';

interface Props {
}


const CookingBlogGrid = (props:Props) => {

  return (
    <ThemeProvider theme={theme}>

    <Grid container justifyContent='center' sx={{paddingTop: theme.spacing(15)}}>
      <Grid item sm={12} md={4} sx={{display:'flex',justifyContent:'center'}}>
          <Card image={Eggs_En_Cocotte_Blog_Square} title={'COOKING'} subtitle={'Eggs en Cocotte w/ Carmelized Onions and Roasted Tomatoes'} post={'/recipes/eggs-en-cocotte/'}/>
      </Grid>
      <Grid item sm={12} md={4} sx={{display:'flex',justifyContent:'center'}}>
      <Card image={Elote_Blog_Square} title={'COOKING'} subtitle={'Deconstructed Elote'} post={'/recipes/deconstructed-elote'}/>
      </Grid>
      <Grid item sm={12} md={4} sx={{display:'flex',justifyContent:'center'}}>
          <Card image={Jalapeno_Poppers_Blog_Square} title={'COOKING'} subtitle={'Puff Pastry Jalepeno Poppers'} post={'/recipes/puff-pastry-jalepeno-poppers'}/>
      </Grid>
    </Grid>
    <Grid container justifyContent='center' sx={{paddingTop: theme.spacing(15)}}>
      <Grid item sm={12} md={4} sx={{display:'flex',justifyContent:'center'}}>
      <Card image={Turkish_Eggs_Blog_Square} title={'COOKING'} subtitle={'Turkish Eggs'} post={'/recipes/turkish-eggs'}/>
      </Grid>
      <Grid item sm={12} md={4} sx={{display:'flex',justifyContent:'center'}}>
      <Card image={Miso_Soup_Blog_Square} title={'COOKING'} subtitle={'Mushroom Miso Soup'} post={'/recipes/mushroom-miso-soup'}/>
      </Grid>
      <Grid item sm={12} md={4} sx={{display:'flex',justifyContent:'center'}}>
      <Card image={Dumplings_Blog_Square} title={'COOKING'} subtitle={'Veggie Packed Dumplings'} post={'/'}/>
      </Grid>
    </Grid>
    </ThemeProvider>
  )
}

export default CookingBlogGrid
