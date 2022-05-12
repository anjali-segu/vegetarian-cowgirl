import RecipeNav from '../../atom/RecipeNav'
import Header from '../../atom/Header'
import BakingBlogGrid from '../../molecule/BakingBlogGrid'
import CookingBlogGrid from '../../molecule/CookingBlogGrid'
import DrinksBlogGrid from '../../molecule/DrinksBlogGrid'
import { createTheme,ThemeProvider } from '@mui/material/styles';
import {theme} from '../../utils/theme'
import HeaderImage from '../../atom/HeaderImage'
import { Grid } from '@mui/material';

interface Props {
}


const Recipes = (props:Props) => {

  return (
    <ThemeProvider theme={theme}>
      <RecipeNav/>
      <HeaderImage image="cookie.jpg"
                   title="Sugar Cookie Cutouts w/ Icing Tips"
                   description= "Learn how to make delicious vanilla almond sugar cookies. I also walk through basic flooding and icing tips. This i a great gift for the holidays and the cookies come out absolutely scrummy"
                   link="/recipes/sugar-cookies"
                   />
       <Grid container justifyContent='center'>
         <Grid item xs={1} sx={{display:'flex',justifyContent:'center'}}>
          <img style={{maxHeight: theme.spacing(13)}}src="icons/baking_icon.png" alt="Paris"/>
         </Grid>
       </Grid>
      <Header id={"baking"} text={"Baking"} margin={1}/>
      <BakingBlogGrid/>
      <Grid container justifyContent='center'>
        <Grid item xs={1} sx={{display:'flex',justifyContent:'center'}}>
         <img style={{maxHeight: theme.spacing(13)}}src="icons/cooking_icon.png" alt="Paris"/>
        </Grid>
      </Grid>
      <Header id={"cooking"}text={"Cooking"} margin={1}/>
      <CookingBlogGrid/>
      <Grid container justifyContent='center'>
        <Grid item xs={1} sx={{display:'flex',justifyContent:'center'}}>
         <img style={{maxHeight: theme.spacing(13)}}src="icons/drinks_icon.png" alt="Paris"/>
        </Grid>
      </Grid>
      <Header id={"drinks"}text={"Drinks"} margin={1}/>
      <DrinksBlogGrid/>
    </ThemeProvider>

  )
}

export default Recipes
