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
import Switzerland from './organism/Switzerland'
import Indianapolis from './organism/Indianapolis'
import Navbar from './organism/Navbar'
import Footer from './molecule/Footer'
import AustinPlantStores from './blogposts/AustinPlantStores'
import AustinCafeMonet from './blogposts/AustinCafeMonet'
import AustinTeaGuide from './blogposts/AustinTeaGuide';
import Forthright from './blogposts/Forthright'
import Oseyo from './blogposts/Oseyo'
import Uchiko from './blogposts/Uchiko'
import IlBrutto from './blogposts/IlBrutto'
import Aba from './blogposts/Aba'
import BakeryLorraine from './blogposts/BakeryLorraine';
import ArtMovement from './blogposts/ArtMovement'

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

// recipe type && recipe component
import Recipe from './utils/recipe';
import DynamicRecipeBlogPost from './blogposts/DynamicRecipeBlogPost';

import { recipes } from './utils/BlogImports'
import IntroToBreville from './blogposts/IntroToBreville';
import UnderConstruction from './organism/UnderConstruction';


const createRecipeBlogPosts = (recipes: Recipe[]) => recipes.map(recipe => <Route key={recipe.path} path={recipe.path} element={<DynamicRecipeBlogPost {...recipe} />} />)

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter basename={`/${process.env.PUBLIC_URL}`}>
        <Navbar />
        <div id='content-wrap'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recipes" element={<Recipes />} />
            <Route path="/austin-living" element={<AustinLiving />} />
            <Route path="/costa-rica" element={<CostaRica />} />
            <Route path="/austin" element={<Austin />} />
            <Route path="/hawaii" element={<Hawaii />} />
            <Route path="/switzerland" element={<Switzerland />} />
            <Route path="/indianapolis" element={<Indianapolis />} />
            <Route path="/art" element={<Art />} />
            <Route path="/about" element={<About />} />

            {createRecipeBlogPosts(recipes)}

            <Route path="/recipes/intro-to-breville-espresso-machine" element={<IntroToBreville />} />

            <Route path="/austin-living/cafe-monet" element={<AustinCafeMonet />} />
            <Route path="/austin-living/plant-stores" element={<AustinPlantStores />} />
            <Route path="/austin-living/austin-tea-guide" element={<AustinTeaGuide />} />
            <Route path='/austin-living/forthright' element={<Forthright />} />
            <Route path='/austin-living/oseyo' element={<Oseyo />} />
            <Route path='/austin-living/uchiko' element={<Uchiko />} />
            <Route path='/austin-living/il-brutto' element={<IlBrutto />} />
            <Route path='/austin-living/aba' element={<Aba />} />
            <Route path='/austin-living/bakery-lorraine' element={<BakeryLorraine />} />


            <Route path='/art/gallery/movement' element={<ArtMovement />} />

            <Route path='*' element={<UnderConstruction />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>

    </ThemeProvider>


  );
}

export default App;
