import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../../utils/theme'
import Card from '../../atom/Card';
import { Grid } from '@mui/material';

import Cake_Cookies_Blog_Square from '../../assets/images/blog_posts/chocolate_cake_cookies_blog_square.jpg';
import Cinammon_Buns_Blog_Square from '../../assets/images/blog_posts/cinammon_buns_blog_square.jpg';
import Cardamom_Buns_Blog_Square from '../../assets/images/blog_posts/cardamom_buns_blog_square.jpg'
import Cookie_Blog_Square from '../../assets/images/blog_posts/cookie_blog_square.jpg';
import Eton_Mess_Blog_Square from '../../assets/images/blog_posts/eton_mess_blog_square.png';
import Italian_Orange_Cake_Blog_Square from '../../assets/images/blog_posts/italian_orange_cake_blog_square.jpeg';
import Pumpkin_Pie_Blog_Square from '../../assets/images/blog_posts/pumpkin_pie_blog_square.jpeg';
import Cheesecake_Blog_Square from '../../assets/images/blog_posts/cheesecake_blog_square.jpg';
import Grandma_Fudge_Top_Blog_Square from '../../assets/images/blog_posts/chocolate_fudge_top_down_blog_square.jpg';
import Brownie_Blog_Square from '../../assets/images/blog_posts/brownie_blog_square.jpg';
import Gingerbread_Blog_Square from '../../assets/images/blog_posts/gingerbread_blog_square.jpg';
import Macaroon_Blog_Square from '../../assets/images/blog_posts/macaroon_blog_square.jpg';
import Peach_Cobbler_Blog_Square from '../../assets/images/blog_posts/peach_cobbler_blog_square.png';
import Classic_Pumpkin_Pie_Blog_Square from '../../assets/images/blog_posts/classic_pumpkin_pie_blog_square.jpg';
import Ice_Cream_Sandwich_Blog_Square from '../../assets/images/blog_posts/ice_cream_sandwich_blog_square.jpg'
import Chocolate_Lava_Cake_Blog_Square from '../../assets/images/blog_posts/lava_cake_blog_square.jpg'

interface Props {
}


const BakingBlogGrid = (props: Props) => {

  return (
    <ThemeProvider theme={theme}>

      <Grid container justifyContent='center' sx={{ paddingTop: theme.spacing(15) }}>
        <Grid item sm={12} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Card image={Cheesecake_Blog_Square} title={'BAKING'} subtitle={'Light and Fluffy Cheesecake'} post={'/recipes/cheesecake'} />
        </Grid>

        <Grid item sm={12} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Card image={Chocolate_Lava_Cake_Blog_Square} title={'BAKING'} subtitle={'Chocolate Lava Cake'} post={'/recipes/chocolate-lava-cake'} />
        </Grid>

        <Grid item sm={12} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Card image={Ice_Cream_Sandwich_Blog_Square} title={'BAKING'} subtitle={'Brownie Coffee Ice Cream Sandwiches'} post={'/recipes/brownie-ice-cream-sandwich'} />
        </Grid>
      </Grid>

      <Grid container justifyContent='center' sx={{ paddingTop: theme.spacing(15) }}>

        <Grid item sm={12} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Card image={Cardamom_Buns_Blog_Square} title={'BAKING'} subtitle={'Cardamom Buns'} post={'/recipes/cardamom-buns'} />
        </Grid>
        <Grid item sm={12} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Card image={Cinammon_Buns_Blog_Square} title={'BAKING'} subtitle={'Ultimate Cinnamon Rolls'} post={'/recipes/cinnamon-rolls'} />
        </Grid>
        <Grid item sm={12} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Card image={Brownie_Blog_Square} title={'BAKING'} subtitle={'Fudgiest Brownies'} post={'/recipes/fudgey-brownies'} />
        </Grid>
      </Grid>

      <Grid container justifyContent='center' sx={{ paddingTop: theme.spacing(15) }}>
        <Grid item sm={12} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Card image={Eton_Mess_Blog_Square} title={'BAKING'} subtitle={'Eton Mess Summer Dessert'} post={'/recipes/eton-mess-dessert'} />
        </Grid>
        <Grid item sm={12} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Card image={Pumpkin_Pie_Blog_Square} title={'BAKING'} subtitle={'Easy Mascarpone Pumpkin Pie'} post={'/recipes/pumpkin-mascarpone-pie'} />
        </Grid>
        <Grid item sm={12} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Card image={Cookie_Blog_Square} title={'BAKING'} subtitle={'Simple Sugar Cookie Cutouts'} post={'/recipes/sugar-cookies'} />
        </Grid>
      </Grid>

      <Grid container justifyContent='center' sx={{ paddingTop: theme.spacing(15) }}>
        <Grid item sm={12} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Card image={Macaroon_Blog_Square} title={'BAKING'} subtitle={'Raspberry Rose, Orange Blossom Buttercream Macaron'} post={'/recipes/raspberry-rose-macaron'} />
        </Grid>

        <Grid item sm={12} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Card image={Grandma_Fudge_Top_Blog_Square} title={'BAKING'} subtitle={'Grandma Barbieri\'s Fudge'} post={'/recipes/grandmas-fudge'} />
        </Grid>

        <Grid item sm={12} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Card image={Peach_Cobbler_Blog_Square} title={'BAKING'} subtitle={'Texas Peach Cobbler'} post={'/recipes/peach-cobbler'} />
        </Grid>
      </Grid>

      <Grid container justifyContent='center' sx={{ paddingTop: theme.spacing(15) }}>
        <Grid item sm={12} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Card image={Gingerbread_Blog_Square} title={'BAKING'} subtitle={'Soft Gingerbread w/ Royal Icing'} post={'/recipes/soft-gingerbread'} />
        </Grid>

        <Grid item sm={12} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Card image={Classic_Pumpkin_Pie_Blog_Square} title={'BAKING'} subtitle={'Classic Pumpkin Pie'} post={'/recipes/classic-pumpkin-pie'} />
        </Grid>

        <Grid item sm={12} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Card image={Italian_Orange_Cake_Blog_Square} title={'BAKING'} subtitle={'Italian Orange Layered Cake'} post={'/recipes/italian-orange-cake'} />
        </Grid>
      </Grid>

      <Grid container justifyContent='center' sx={{ paddingTop: theme.spacing(15) }}>
        <Grid item sm={12} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
        </Grid>

        <Grid item sm={12} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Card image={Cake_Cookies_Blog_Square} title={'BAKING'} subtitle={'Quick Chocolate Fudgey Cake Cookies'} post={'/recipes/chocolate-cake-cookies'} />
        </Grid>

        <Grid item sm={12} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
        </Grid>
      </Grid>
    </ThemeProvider>
  )
}

export default BakingBlogGrid
