import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../../utils/theme'
import Card from '../../atom/Card';
import { Grid, useMediaQuery } from '@mui/material';
import Header from '../../atom/Header'

import Coffee_Syrup_Blog_Square from '../../assets/images/blog_posts/coffee_syrup_blog_square.jpg';
import Cardamom_Buns_Blog_Square from '../../assets/images/blog_posts/cardamom_buns_blog_square.jpg';
import Uchiko_Blog_Square from '../../assets/images/blog_posts/uchiko_blog_square.jpg';

import Logo3 from '../../assets/images/icons/logos/Logo3.png';

const FeaturedPosts = () => {
  const match = useMediaQuery('(max-width:600px)');
  return (
    <ThemeProvider theme={theme}>
      {match && (
        <Grid container justifyContent='center'>
          <Grid item xs={1} sx={{ display: 'flex', justifyContent: 'center' }}>
            <img style={{ maxHeight: theme.spacing(13) }} src={Logo3} alt="The Vegetarian Cowgirl logo of a cowboy boot and a monstera plant" />
          </Grid>
        </Grid>
      )}
      <Header text={"Featured Posts"} margin={3} />
      <Grid container justifyContent='center' sx={{ paddingTop: theme.spacing(15), }}>

        <Grid item sm={12} md={12} lg={4} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Card image={Coffee_Syrup_Blog_Square} title={'DRINKS'} subtitle={'Lavender, Turmeric, Cardamom, Turmeric Simple Syrup'} post={'/recipes/coffee-syrup'} />
        </Grid>

        <Grid item sm={12} md={12} lg={4} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Card image={Uchiko_Blog_Square} title={'RESTAURANTS'} subtitle={'Uchiko - Japanese Vegan Fushion'} post={'/austin-living/uchiko'} />
        </Grid>

        <Grid item sm={12} md={12} lg={4} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Card image={Cardamom_Buns_Blog_Square} title={'BAKING'} subtitle={'Cardamom Buns'} post={'/recipes/cardamom-buns'} />
        </Grid>

      </Grid>
    </ThemeProvider>
  )
}

export default FeaturedPosts
