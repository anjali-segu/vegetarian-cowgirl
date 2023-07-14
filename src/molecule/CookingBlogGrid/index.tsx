import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../../utils/theme'
import Card from '../../atom/Card';
import { Grid } from '@mui/material';

import Dumplings_Blog_Square from '../../assets/images/blog_posts/dumplings_blog_square.jpg';
import Eggs_En_Cocotte_Blog_Square from '../../assets/images/blog_posts/eggs_en_cocotte_blog_square.jpg';
import Elote_Blog_Square from '../../assets/images/blog_posts/elote_blog_square.jpg';
import Jalapeno_Poppers_Blog_Square from '../../assets/images/blog_posts/jalapeno_poppers_blog_square.jpg';
import Miso_Soup_Blog_Square from '../../assets/images/blog_posts/miso_soup_blog_square.jpg';
import Turkish_Eggs_Blog_Square from '../../assets/images/blog_posts/turkish_eggs_blog_square.jpg';
import Moms_Jamun_Blog_Square from '../../assets/images/blog_posts/jamun_served_blog_square.jpg';
import Grandmas_Pasta_Blog_Square from '../../assets/images/blog_posts/pasta_sauce_blog_square.jpg';
import Eggs_Benny_Blog_Square from '../../assets/images/blog_posts/eggs_benny_blog_square.jpg';
import Orange_Pancake_Blog_Square from '../../assets/images/blog_posts/orange_pancake_drizzle_blog_square.jpg';
import Cornbread_Blog_Square from '../../assets/images/blog_posts/cornbread_blog_square.jpg';
import Cauliflower_Soup_Blog_Square from '../../assets/images/blog_posts/cauliflower_soup_blog_square.jpg';
import Spring_Rolls_Blog_Square from '../../assets/images/blog_posts/spring_rolls_blog_square.jpg'

interface Props {
}


const CookingBlogGrid = (props: Props) => {

  return (
    <ThemeProvider theme={theme}>
      <Grid container justifyContent='center' sx={{ paddingTop: theme.spacing(15) }}>
        <Grid item sm={12} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Card image={Cornbread_Blog_Square} title={'COOKING'} subtitle={'Jalapeno Cheddar Cornbread'} post={'/recipes/jalapeno-cornbread'} />
        </Grid>

        <Grid item sm={12} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Card image={Spring_Rolls_Blog_Square} title={'COOKING'} subtitle={'Tofu Spring Rolls with Peanut Sauce'} post={'/recipes/spring-rolls'} />
        </Grid>

        <Grid item sm={12} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Card image={Eggs_Benny_Blog_Square} title={'COOKING'} subtitle={`Avocado Hollandaise Eggs Benny`} post={'/recipes/avocado-eggs-benedict'} />
        </Grid>
      </Grid>

      <Grid container justifyContent='center' sx={{ paddingTop: theme.spacing(15) }}>

        <Grid item sm={12} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Card image={Elote_Blog_Square} title={'COOKING'} subtitle={'Deconstructed Elote'} post={'/recipes/deconstructed-elote'} />
        </Grid>

        <Grid item sm={12} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Card image={Moms_Jamun_Blog_Square} title={'COOKING'} subtitle={`Mom's Jamun Dessert`} post={'/recipes/moms-jamun'} />
        </Grid>

        <Grid item sm={12} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Card image={Cauliflower_Soup_Blog_Square} title={'COOKING'} subtitle={'Blender Cauliflower Soup'} post={'/recipes/cauliflower-soup'} />
        </Grid>
      </Grid>

      <Grid container justifyContent='center' sx={{ paddingTop: theme.spacing(15) }}>

        <Grid item sm={12} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Card image={Turkish_Eggs_Blog_Square} title={'COOKING'} subtitle={'Turkish Eggs'} post={'/recipes/turkish-eggs'} />
        </Grid>

        <Grid item sm={12} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Card image={Grandmas_Pasta_Blog_Square} title={'COOKING'} subtitle={`Grandma Barbieri's Pasta Sauce`} post={'/recipes/grandmas-pasta-sauce'} />
        </Grid>

        <Grid item sm={12} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Card image={Eggs_En_Cocotte_Blog_Square} title={'COOKING'} subtitle={'Eggs en Cocotte w/ Caramelized Onions and Roasted Tomatoes'} post={'/recipes/eggs-en-cocotte/'} />
        </Grid>
      </Grid>

      <Grid container justifyContent='center' sx={{ paddingTop: theme.spacing(15) }}>
        <Grid item sm={12} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Card image={Dumplings_Blog_Square} title={'COOKING'} subtitle={'Veggie Packed Dumplings'} post={'/recipes/veggie-packed-dumplings'} />
        </Grid>
        <Grid item sm={12} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Card image={Miso_Soup_Blog_Square} title={'COOKING'} subtitle={'Mushroom Miso Soup'} post={'/recipes/mushroom-miso-soup'} />
        </Grid>
        <Grid item sm={12} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Card image={Jalapeno_Poppers_Blog_Square} title={'COOKING'} subtitle={'Puff Pastry Jalapeno Poppers'} post={'/recipes/puff-pastry-jalapeno-poppers'} />
        </Grid>
      </Grid>

      <Grid container justifyContent='center' sx={{ paddingTop: theme.spacing(15) }}>
        <Grid item sm={12} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Card image={Orange_Pancake_Blog_Square} title={'COOKING'} subtitle={'Chocolate Orange Pancakes'} post={'/recipes/chocolate-orange-pancakes'} />
        </Grid>

        <Grid item sm={12} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
        </Grid>

        <Grid item sm={12} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
        </Grid>
      </Grid>

    </ThemeProvider>
  )
}

export default CookingBlogGrid
