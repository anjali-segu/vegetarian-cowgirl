import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../../utils/theme'
import Card from '../../atom/Card';
import { Grid } from '@mui/material';

import Latte_Blog_Square from '../../assets/images/blog_posts/latte_blog_square.jpg';
import Psl_Blog_Square from '../../assets/images/blog_posts/psl_blog_square.jpg';
import Tea_Jar_Blog_Square from '../../assets/images/blog_posts/tea_jar_blog_square.jpg';
import Coffee_Syrup_Blog_Square from '../../assets/images/blog_posts/coffee_syrup_blog_square.jpg';
import Pecan_Latte_Blog_Square from '../../assets/images/blog_posts/pecan_latte_blog_square.jpg';

const DrinksBlogGrid = () => {

  return (
    <ThemeProvider theme={theme}>

      <Grid container justifyContent='center' sx={{ paddingTop: theme.spacing(15) }}>
        <Grid item sm={12} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Card image={Coffee_Syrup_Blog_Square} title={'COFFEE'} subtitle={'Lavender, Turmeric, Cardamom, Turmeric Simple Syrup'} post={'/recipes/coffee-syrup'} />
        </Grid>
        <Grid item sm={12} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Card image={Latte_Blog_Square} title={'COFFEE'} subtitle={'Intro to Breville Espresso Machine'} post={'/recipes/intro-to-breville-espresso-machine'} />
        </Grid>
        <Grid item sm={12} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Card image={Pecan_Latte_Blog_Square} title={'COFFEE'} subtitle={'Pecan Latte'} post={'/recipes/pecan-latte'} />
        </Grid>
      </Grid>

      <Grid container justifyContent='center' sx={{ paddingTop: theme.spacing(15) }}>
        <Grid item sm={12} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Card image={Psl_Blog_Square} title={'COFFEE'} subtitle={'Pumpkin Spiced Latte w/ Espresso Machine'} post={'/recipes/pumpkin-spiced-latte'} />
        </Grid>
        <Grid item sm={12} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Card image={Tea_Jar_Blog_Square} title={'TEA'} subtitle={'Austin Ultimate Tea Guide'} post={'/austin-living/austin-tea-guide'} />
        </Grid>
        <Grid item sm={12} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>

        </Grid>
      </Grid>

    </ThemeProvider>
  )
}

export default DrinksBlogGrid
