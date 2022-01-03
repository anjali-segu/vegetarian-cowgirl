import RecipeNav from '../../atom/RecipeNav'
import Header from '../../atom/Header'
import BakingBlogGrid from '../../molecule/BakingBlogGrid'
import CookingBlogGrid from '../../molecule/CookingBlogGrid'
import DrinksBlogGrid from '../../molecule/DrinksBlogGrid'
import { createTheme,ThemeProvider } from '@mui/material/styles';
import {theme} from '../../utils/theme'
import HeaderImage from '../../atom/HeaderImage'

interface Props {
}


const Recipes = (props:Props) => {

  return (
    <ThemeProvider theme={theme}>
      <RecipeNav/>
      <HeaderImage image="cookie.jpg"
                   title="Sugar Cookie Cutouts w/ Icing Tips"
                   description= "Learn how to make delicious vanilla almond sugar cookies. I also walk through basic flooding and icing tips. This i a great gift for the holidays and the cookies come out absolutely scrummy"
                   link="/"
                   />
      <Header id={"baking"} text={"Baking"}/>
      <BakingBlogGrid/>
      <Header id={"cooking"}text={"Cooking"}/>
      <CookingBlogGrid/>
      <Header id={"drinks"}text={"Drinks"}/>
      <DrinksBlogGrid/>
    </ThemeProvider>

  )
}

export default Recipes
