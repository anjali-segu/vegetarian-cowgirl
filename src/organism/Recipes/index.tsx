import RecipeNav from '../../atom/RecipeNav'
import Header from '../../atom/Header'
import BakingBlogGrid from '../../molecule/BakingBlogGrid'
import CookingBlogGrid from '../../molecule/CookingBlogGrid'
import DrinksBlogGrid from '../../molecule/DrinksBlogGrid'
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../../utils/theme'
import HeaderImage from '../../atom/HeaderImage'
import { Grid } from '@mui/material';

import SugarCookie2 from '../../assets/images/blog_posts/sugar_cookie2_blog_square.jpg';

import Baking_Icon from '../../assets/images/icons/baking_icon.png';
import Cooking_Icon from '../../assets/images/icons/cooking_icon.png';
import Drinks_Icon from '../../assets/images/icons/drinks_icon.png';
import Recipe from '../../utils/recipe'

interface Props {
  recipes: Recipe[]
}


const Recipes = (props: Props) => {

  return (
    <ThemeProvider theme={theme}>
      <RecipeNav recipes={props.recipes} />
      <HeaderImage image={SugarCookie2}
        title="Sugar Cookie Cutouts w/ Icing Tips"
        description="Learn how to make delicious vanilla almond sugar cookies. I also walk through basic flooding and icing tips. This i a great gift for the holidays and the cookies come out absolutely scrummy"
        link="/recipes/sugar-cookies"
        alt="Sugar cookies on black marble iced with pink, purple, and blue icing."
      />
      <Grid container justifyContent='center'>
        <Grid item xs={1} sx={{ display: 'flex', justifyContent: 'center' }}>
          <img style={{ maxHeight: theme.spacing(13) }} src={Baking_Icon} alt="Whisk and rolling pin icon" />
        </Grid>
      </Grid>
      <Header id={"baking"} text={"Baking"} margin={1} />
      <BakingBlogGrid />
      <Grid container justifyContent='center'>
        <Grid item xs={1} sx={{ display: 'flex', justifyContent: 'center' }}>
          <img style={{ maxHeight: theme.spacing(13) }} src={Cooking_Icon} alt="Chef's hat icon" />
        </Grid>
      </Grid>
      <Header id={"cooking"} text={"Cooking"} margin={1} />
      <CookingBlogGrid />
      <Grid container justifyContent='center'>
        <Grid item xs={1} sx={{ display: 'flex', justifyContent: 'center' }}>
          <img style={{ maxHeight: theme.spacing(13) }} src={Drinks_Icon} alt="A cup and martini glass icon" />
        </Grid>
      </Grid>
      <Header id={"drinks"} text={"Drinks"} margin={1} />
      <DrinksBlogGrid />
    </ThemeProvider>

  )
}

export default Recipes
