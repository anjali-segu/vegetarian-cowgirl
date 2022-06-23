import React from 'react';
import './App.css';
import { theme } from './utils/theme'
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
import AustinPlantStores from './blogposts/AustinPlantStores'
import AustinCafeMonet from './blogposts/AustinCafeMonet'
import AustinTeaGuide from './blogposts/AustinTeaGuide';
import Forthright from './blogposts/Forthright'

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

// recipe type && recipe component
import Recipe from './utils/recipe';
import DynamicRecipeBlogPost from './blogposts/DynamicRecipeBlogPost';

import {recipes} from './utils/BlogImports'
import IntroToBreville from './blogposts/IntroToBreville';


const createRecipeBlogPosts = (recipes: Recipe[]) => recipes.map(recipe => <Route key={recipe.path} path={recipe.path} element={<DynamicRecipeBlogPost {...recipe} />} />)

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter basename={`/${process.env.PUBLIC_URL}`}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/austin-living" element={<AustinLiving />} />
          <Route path="/costa-rica-city-guide" element={<CostaRica />} />
          <Route path="/austin-city-guide" element={<Austin />} />
          <Route path="/hawaii-city-guide" element={<Hawaii />} />
          <Route path="/indianapolis-city-guide" element={<Indianapolis />} />
          <Route path="/art" element={<Art />} />
          <Route path="/about" element={<About />} />

          {createRecipeBlogPosts(recipes)}

          <Route path="/recipes/intro-to-breville-espresso-machine" element={<IntroToBreville/>}/>

          <Route path="/austin-living/cafe-monet" element={<AustinCafeMonet />} />
          <Route path="/austin-living/plant-stores" element={<AustinPlantStores />} />
          <Route path="/austin-living/austin-tea-guide" element={<AustinTeaGuide />} />
          <Route path='/austin-living/forthright' element={<Forthright/>} />


        </Routes>
        <Footer />
      </BrowserRouter>

    </ThemeProvider>


  );
}

export default App;
