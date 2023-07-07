import RecipeNav from '../../atom/RecipeNav'
import Header from '../../atom/Header'
import BakingBlogGrid from '../../molecule/BakingBlogGrid'
import CookingBlogGrid from '../../molecule/CookingBlogGrid'
import DrinksBlogGrid from '../../molecule/DrinksBlogGrid'
import { ThemeProvider } from '@mui/material/styles';
import {theme} from '../../utils/theme'
import HeaderImage from '../../atom/HeaderImage'
import { Grid } from '@mui/material';

import SugarCookie2 from '../../assets/images/blog_posts/cardamom_buns_blog_square.jpg';

import Baking_Icon from '../../assets/images/icons/baking_icon.png';
import Cooking_Icon from '../../assets/images/icons/cooking_icon.png';
import Drinks_Icon from '../../assets/images/icons/drinks_icon.png';

interface Props {
}


const Recipes = (props:Props) => {

  return (
    <ThemeProvider theme={theme}>
      <RecipeNav/>
      <HeaderImage image={SugarCookie2}
                   title="Cardamom Buns with Vanilla Cream Cheese Frosting"
                   description= "Learn how to make these cardamom buns which are swirled with cardamom brown sugar filling. These brioche buns are easy to make and is a good gateway to bread making. Inspired by my mom's love for cardamom these buns are a twist on classic cinnamon rolls."
                   link="/recipes/cardamom-buns"
                   alt="Golden brown cardamom bun on a white plate."
                   />
       <Grid container justifyContent='center'>
         <Grid item xs={1} sx={{display:'flex',justifyContent:'center'}}>
          <img style={{maxHeight: theme.spacing(13)}}src={Baking_Icon} alt="Whisk and rolling pin icon"/>
         </Grid>
       </Grid>
      <Header id={"baking"} text={"Baking"} margin={1}/>
      <BakingBlogGrid/>
      <Grid container justifyContent='center'>
        <Grid item xs={1} sx={{display:'flex',justifyContent:'center'}}>
         <img style={{maxHeight: theme.spacing(13)}}src={Cooking_Icon} alt="Chef's hat icon"/>
        </Grid>
      </Grid>
      <Header id={"cooking"}text={"Cooking"} margin={1}/>
      <CookingBlogGrid/>
      <Grid container justifyContent='center'>
        <Grid item xs={1} sx={{display:'flex',justifyContent:'center'}}>
         <img style={{maxHeight: theme.spacing(13)}}src={Drinks_Icon} alt="A cup and martini glass icon"/>
        </Grid>
      </Grid>
      <Header id={"drinks"}text={"Drinks"} margin={1}/>
      <DrinksBlogGrid/>
    </ThemeProvider>

  )
}

export default Recipes
