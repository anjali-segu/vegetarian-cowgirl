import React from 'react';
import './App.css';
import {theme} from './utils/theme'
import { ThemeProvider } from '@mui/material/styles'
import Home from './organism/Home'
import Recipes from './organism/Recipes'
import AustinLiving from './organism/AustinLiving'
import Art from './organism/Art'
import About from './organism/About'
import CostaRica from './organism/CostaRica'
import Austin from './organism/Austin'
import Hawaii from './organism/Hawaii'
import Indianapolis from './organism/Indianapolis'
import Navbar from './organism/Navbar'
import Footer from './molecule/Footer'
import EggsEnCocotte from './blogposts/EggsEnCocotte'
import DeconstructedElote from './blogposts/DeconstructedElote'
import JalapenoPoppers from './blogposts/JalapenoPoppers'
import TurkishEggs from './blogposts/TurkishEggs'
import MushroomMisoSoup from './blogposts/MushroomMisoSoup'
import VeggieDumplings from './blogposts/VeggieDumplings'
import AustinPlantStores from './blogposts/AustinPlantStores'
import AustinCafeMonet from './blogposts/AustinCafeMonet'


import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

// recipe type && recipe component
import Recipe from './utils/recipe';
import DynamicRecipeBlogPost from './blogposts/DynamicRecipeBlogPost';

// recipe json files
import ChocolateCakeCookiesJson from './assets/recipes/chocolate-cake-cookies.json';
import CinnamonBunsJson from './assets/recipes/cinnamon-buns.json';
import EtonMessJson from './assets/recipes/eton-mess.json';
import OrangeCakeJson from './assets/recipes/orange-cake.json';
import PumpkinMascarponePieJson from './assets/recipes/pumpkin-mascarpone-pie.json';
import SugarCookiesJson from './assets/recipes/sugar-cookies.json';

// blog post images (squares)
import Chocolate_Cake_Cookies_Blog_Square from './assets/images/blog_posts/chocolate_cake_cookies_blog_square.jpg';
import Cinammon_Buns_Blog_Square from './assets/images/blog_posts/cinammon_buns_blog_square.jpg';
import Dumplings_Blog_Square from './assets/images/blog_posts/dumplings_blog_square.jpg';
import Eggs_En_Cocotte_Blog_Square from './assets/images/blog_posts/eggs_en_cocotte_blog_square.jpg';
import Elote_Blog_Square from './assets/images/blog_posts/elote_blog_square.jpg';
import Eton_Mess_Blog_Square from './assets/images/blog_posts/eton_mess_blog_square.png';
import Jalapeno_Poppers_Blog_Square from './assets/images/blog_posts/jalapeno_poppers_blog_square.jpg';
import Miso_Soup_Blog_Square from './assets/images/blog_posts/miso_soup_blog_square.jpg';
import Orange_Cake_Blog_Square from './assets/images/blog_posts/orange_cake_blog_square.jpg';
import Pumpkin_Pie_Blog_Square from './assets/images/blog_posts/pumpkin_pie_blog_square.jpeg';
import Sugar_Cookie_Blog_Square from './assets/images/blog_posts/sugar_cookie_blog_square.jpg';
import Turkish_Eggs_Blog_Square from './assets/images/blog_posts/turkish_eggs_blog_square.jpg';

// icons
import Baking_Icon from './assets/images/icons/baking_icon.png';
import Cooking_Icon from './assets/images/icons/cooking_icon.png';

const recipes = [
  {path: '/recipes/eton-mess-dessert', image: Eton_Mess_Blog_Square, icon: Baking_Icon, ...EtonMessJson},
  {path: '/recipes/cinnamon-rolls-dessert', image: Cinammon_Buns_Blog_Square, icon: Baking_Icon, ...CinnamonBunsJson},
  {path: '/recipes/chocolate-cake-cookies', image: Chocolate_Cake_Cookies_Blog_Square, icon: Baking_Icon, ...ChocolateCakeCookiesJson},
  {path: '/recipes/pumpkin-mascarpone-pie', image: Pumpkin_Pie_Blog_Square, icon: Baking_Icon, ...PumpkinMascarponePieJson},
  {path: '/recipes/sugar-cookies', image: Sugar_Cookie_Blog_Square, icon: Baking_Icon, ...SugarCookiesJson},
  {path: '/recipes/italian-orange-cake', image: Orange_Cake_Blog_Square, icon: Baking_Icon, ...OrangeCakeJson},
  // {path: '/recipes/eggs-en-cocotte', image: Eggs_En_Cocotte_Blog_Square, icon: Cooking_Icon, ...},
  // {path: '/recipes/deconstructed-elote', image: Elote_Blog_Square, icon: Cooking_Icon, ...},
  // {path: '/recipes/puff-pastry-jalepeno-poppers', image: Jalapeno_Poppers_Blog_Square, icon: Cooking_Icon, ...},
  // {path: '/recipes/turkish-eggs', image: Turkish_Eggs_Blog_Square, icon: Cooking_Icon, ...},
  // {path: '/recipes/mushroom-miso-soup', image: Miso_Soup_Blog_Square, icon: Cooking_Icon, ...},
  // {path: '/recipes/veggie-packed-dumplings', image: Dumplings_Blog_Square, icon: Cooking_Icon, ...},
]

const createRecipeBlogPosts = (recipes: Recipe[]) => recipes.map(recipe => <Route key={recipe.path} path={recipe.path} element={<DynamicRecipeBlogPost {...recipe} />} />)

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter basename={`/${process.env.PUBLIC_URL}`}>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/recipes" element={<Recipes/>}/>
          <Route path="/austin-living" element={<AustinLiving/>}/>
          <Route path="/costa-rica-city-guide" element={<CostaRica/>}/>
          <Route path="/austin-city-guide" element={<Austin/>}/>
          <Route path="/hawaii-city-guide" element={<Hawaii/>}/>
          <Route path="/indianapolis-city-guide" element={<Indianapolis/>}/>
          <Route path="/art" element={<Art/>}/>
          <Route path="/about" element={<About/>}/>
          
          {createRecipeBlogPosts(recipes)}
          
          <Route path="/austin-living/cafe-monet" element={<AustinCafeMonet/>}/>
          <Route path="/austin-living/plant-stores" element={<AustinPlantStores/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>

    </ThemeProvider>


  );
}

export default App;
