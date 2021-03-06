import { ThemeProvider } from '@mui/material/styles';
import {theme} from '../../utils/theme'
import Card from '../../atom/Card';
import { Grid } from '@mui/material';

import Cake_Cookies_Blog_Square from '../../assets/images/blog_posts/cake_cookies_blog_square.jpg';
import Cinammon_Buns_Blog_Square from '../../assets/images/blog_posts/cinammon_buns_blog_square.jpg';
import Cookie_Blog_Square from '../../assets/images/blog_posts/cookie_blog_square.jpg';
import Eton_Mess_Blog_Square from '../../assets/images/blog_posts/eton_mess_blog_square.png';
import Italian_Orange_Cake_Blog_Square from '../../assets/images/blog_posts/italian_orange_cake_blog_square.jpeg';
import Pumpkin_Pie_Blog_Square from '../../assets/images/blog_posts/pumpkin_pie_blog_square.jpeg';

interface Props {
}


const BakingBlogGrid = (props:Props) => {

  return (
    <ThemeProvider theme={theme}>

    <Grid container justifyContent='center' sx={{paddingTop: theme.spacing(15)}}>

      <Grid item sm={12} md={4} sx={{display:'flex',justifyContent:'center'}}>
      <Card image={Cake_Cookies_Blog_Square} title={'BAKING'} subtitle={'Chocolate Fudgey Cake Cookies '} post={'/recipes/chocolate-cake-cookies'}/>
      </Grid>
      <Grid item sm={12} md={4} sx={{display:'flex',justifyContent:'center'}}>
      <Card image={Cinammon_Buns_Blog_Square} title={'BAKING'} subtitle={'Ultimate Cinammon Buns'} post={'/recipes/cinnamon-rolls-dessert'}/>
      </Grid>
      <Grid item sm={12} md={4} sx={{display:'flex',justifyContent:'center'}}>
      <Card image={Eton_Mess_Blog_Square} title={'BAKING'} subtitle={'Eton Mess Summer Dessert'} post={'/recipes/eton-mess-dessert'}/>
      </Grid>
    </Grid>

    <Grid container justifyContent='center' sx={{paddingTop: theme.spacing(15)}}>
      <Grid item sm={12} md={4} sx={{display:'flex',justifyContent:'center'}}>
      <Card image={Italian_Orange_Cake_Blog_Square} title={'BAKING'} subtitle={'Italian Orange Layered Cake'} post={'/recipes/italian-orange-cake'}/>
      </Grid>
      <Grid item sm={12} md={4} sx={{display:'flex',justifyContent:'center'}}>
      <Card image={Pumpkin_Pie_Blog_Square} title={'BAKING'} subtitle={'Easy Mascarpone Pumkin Pie'} post={'/recipes/pumpkin-mascarpone-pie'}/>
      </Grid>
      <Grid item sm={12} md={4} sx={{display:'flex',justifyContent:'center'}}>
      <Card image={Cookie_Blog_Square} title={'BAKING'} subtitle={'Simple Sugar Cookie Cutouts'} post={'/recipes/sugar-cookies'}/>
      </Grid>
    </Grid>
    </ThemeProvider>
  )
}

export default BakingBlogGrid
