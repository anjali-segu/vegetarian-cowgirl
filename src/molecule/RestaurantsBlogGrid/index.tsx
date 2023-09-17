import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../../utils/theme'
import Card from '../../atom/Card';
import { Grid } from '@mui/material';

import Aba_Blog_Square from '../../assets/images/blog_posts/aba_blog_square.jpg';
import Forthright_Blog_Square from '../../assets/images/blog_posts/forthright_blog_square.jpg';
import Il_Brutto_Blog_Square from '../../assets/images/blog_posts/il_brutto_blog_square.jpg';
import Bakery_Lorraine_Blog_Square from '../../assets/images/blog_posts/bakery_lorraine_blog_square.jpg';
import Oseyo_Blog_Square from '../../assets/images/blog_posts/oseyo_blog_square.jpg';
import Uchiko_Blog_Square from '../../assets/images/blog_posts/uchiko2_blog_square.jpg';

const RestaurantsBlogGrid = () => {

  return (
    <ThemeProvider theme={theme}>

      <Grid container justifyContent='center' sx={{ paddingTop: theme.spacing(15) }}>

        <Grid item sm={12} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Card image={Forthright_Blog_Square} title={'RESTAURANTS'} subtitle={'Forthright - My Favorite Austin Brunch Spot'} post={'/austin-living/forthright'} />
        </Grid>
        <Grid item sm={12} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Card image={Uchiko_Blog_Square} title={'RESTAURANTS'} subtitle={'Uchiko - Japanese Vegetarian Fusion'} post={'/austin-living/uchiko'} />
        </Grid>
        <Grid item sm={12} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Card image={Oseyo_Blog_Square} title={'RESTAURANTS'} subtitle={'Oseyo - Vegetarian Korean Bibimbap'} post={'/austin-living/oseyo'} />
        </Grid>
      </Grid>

      <Grid container justifyContent='center' sx={{ paddingTop: theme.spacing(15) }}>    <Grid item sm={12} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
        <Card image={Il_Brutto_Blog_Square} title={'RESTAURANTS'} subtitle={'Il Brutto - Classic Italian Dining'} post={'/austin-living/il-brutto'} />
      </Grid>
        <Grid item sm={12} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Card image={Aba_Blog_Square} title={'RESTAURANTS'} subtitle={'Aba - Aesthetic Mediterranean Cuisine'} post={'/austin-living/aba'} />
        </Grid>
        <Grid item sm={12} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Card image={Bakery_Lorraine_Blog_Square} title={'RESTAURANTS'} subtitle={'Bakery Lorraine - French Patisserie'} post={'/austin-living/bakery-lorraine'} />
        </Grid>
      </Grid>
    </ThemeProvider>
  )
}

export default RestaurantsBlogGrid
