import { createTheme,ThemeProvider } from '@mui/material/styles';
import {theme} from '../../utils/theme'
import Card from '../../atom/Card';
import { Grid } from '@mui/material';

interface Props {
}


const BakingBlogGrid = (props:Props) => {

  return (
    <ThemeProvider theme={theme}>

    <Grid container justifyContent='center' sx={{paddingTop: theme.spacing(15)}}>

      <Grid item sm={12} md={4} sx={{display:'flex',justifyContent:'center'}}>
      <Card image={'blog_posts/cake_cookies_blog_square.jpg'} title={'BAKING'} subtitle={'Chocolate Fudgey Cake Cookies '} post={'/recipes/chocolate-cake-cookies'}/>
      </Grid>
      <Grid item sm={12} md={4} sx={{display:'flex',justifyContent:'center'}}>
      <Card image={'blog_posts/cinammon_buns_blog_square.jpg'} title={'BAKING'} subtitle={'Ultimate Cinammon Buns'} post={'/recipes/cinnamon-rolls-dessert'}/>
      </Grid>
      <Grid item sm={12} md={4} sx={{display:'flex',justifyContent:'center'}}>
      <Card image={'blog_posts/eton_mess_blog_square.jpg'} title={'BAKING'} subtitle={'Eton Mess Summer Dessert'} post={'/recipes/eton-mess-dessert'}/>
      </Grid>
    </Grid>

    <Grid container justifyContent='center' sx={{paddingTop: theme.spacing(15)}}>
      <Grid item sm={12} md={4} sx={{display:'flex',justifyContent:'center'}}>
      <Card image={'blog_posts/italian_orange_cake_blog_square.jpeg'} title={'BAKING'} subtitle={'Italian Orange Layered Birthday Cake'} post={'/'}/>
      </Grid>
      <Grid item sm={12} md={4} sx={{display:'flex',justifyContent:'center'}}>
      <Card image={'blog_posts/pumpkin_pie_blog_square.jpeg'} title={'BAKING'} subtitle={'Easy Mascarpone Pumkin Pie'} post={'/recipes/pumpkin-mascarpone-pie'}/>
      </Grid>
      <Grid item sm={12} md={4} sx={{display:'flex',justifyContent:'center'}}>
      <Card image={'blog_posts/cookie_blog_square.jpg'} title={'BAKING'} subtitle={'Simple Sugar Cookie Cutouts'} post={'/recipes/sugar-cookies'}/>
      </Grid>
    </Grid>
    </ThemeProvider>
  )
}

export default BakingBlogGrid
