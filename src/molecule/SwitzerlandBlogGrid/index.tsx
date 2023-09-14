import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../../utils/theme'
import Card from '../../atom/Card';
import { Grid } from '@mui/material';

import Bern_Blog_Square from '../../assets/images/blog_posts/switzerland/bern_blog_square.jpg';
import Food_Blog_Square from '../../assets/images/blog_posts/switzerland/food_blog_square.jpg';
import Geneva_Blog_Square from '../../assets/images/blog_posts/switzerland/geneva_blog_square.jpg';
import Grindelwald_Blog_Square from '../../assets/images/blog_posts/switzerland/grindelwald_blog_square.jpg';
import Gstaad_Blog_Square from '../../assets/images/blog_posts/switzerland/gstaad_blog_square.jpg';
import Interlaken_Blog_Square from '../../assets/images/blog_posts/switzerland/interlaken_blog_square.jpg';
import Jungfrau_Blog_Square from '../../assets/images/blog_posts/switzerland/jungfrau_blog_square.jpg';
import Swiss_Overview_Blog_Square from '../../assets/images/blog_posts/switzerland/swiss-overview_blog_square.jpg';
import Zurich_Blog_Square from '../../assets/images/blog_posts/switzerland/zurich_blog_square.jpg';

interface Props {
}


const SwitzerlandBlogGrid = (props: Props) => {

  return (
    <ThemeProvider theme={theme}>

      <Grid container justifyContent='center' sx={{ paddingTop: theme.spacing(15) }}>
        <Grid item sm={12} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Card image={Swiss_Overview_Blog_Square} title={'SWITZERLAND'} subtitle={'Switzerland Overview'} post={'/switzerland/swiss-overview'} />
        </Grid>
        <Grid item sm={12} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Card image={Food_Blog_Square} title={'SWITZERLAND'} subtitle={'Food of Switzerland'} post={'/switzerland/food'} />
        </Grid>
        <Grid item sm={12} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Card image={Geneva_Blog_Square} title={'SWITZERLAND'} subtitle={'Geneva'} post={'/switzerland/geneva'} />
        </Grid>
      </Grid>
      <Grid container justifyContent='center' sx={{ paddingTop: theme.spacing(15) }}>
        <Grid item sm={12} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Card image={Gstaad_Blog_Square} title={'SWITZERLAND'} subtitle={'Gstaad'} post={'/switzerland/gstaad'} />
        </Grid>
        <Grid item sm={12} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Card image={Interlaken_Blog_Square} title={'SWITZERLAND'} subtitle={'Interlaken'} post={'/switzerland/interlaken'} />
        </Grid>
        <Grid item sm={12} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Card image={Jungfrau_Blog_Square} title={'SWITZERLAND'} subtitle={'Jungfraujoch'} post={'/switzerland/jungfraujoch'} />
        </Grid>
      </Grid>
      <Grid container justifyContent='center' sx={{ paddingTop: theme.spacing(15) }}>
        <Grid item sm={12} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Card image={Bern_Blog_Square} title={'SWITZERLAND'} subtitle={'Bern'} post={'/switzerland/bern'} />
        </Grid>
        <Grid item sm={12} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Card image={Grindelwald_Blog_Square} title={'SWITZERLAND'} subtitle={'Grindelwald'} post={'/switzerland/grindelwald'} />
        </Grid>
        <Grid item sm={12} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Card image={Zurich_Blog_Square} title={'SWITZERLAND'} subtitle={'Zurich'} post={'/switzerland/zurich'} />
        </Grid>
      </Grid>
    </ThemeProvider>
  )
}

export default SwitzerlandBlogGrid
