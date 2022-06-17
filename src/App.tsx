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
import EtonMess from './blogposts/EtonMess'
import CinnamonRolls from './blogposts/CinnamonRolls'
import ChocolateCakeCookies from './blogposts/ChocolateCakeCookies'
import PumpkinMascarponePie from './blogposts/PumpkinMascarponePie'
import SugarCookies from './blogposts/SugarCookies'
import OrangeCake from './blogposts/OrangeCake'
import EggsEnCocotte from './blogposts/EggsEnCocotte'
import DeconstructedElote from './blogposts/DeconstructedElote'
import JalapenoPoppers from './blogposts/JalapenoPoppers'
import TurkishEggs from './blogposts/TurkishEggs'
import MushroomMisoSoup from './blogposts/MushroomMisoSoup'
import AustinPlantStores from './blogposts/AustinPlantStores'
import AustinCafeMonet from './blogposts/AustinCafeMonet'


import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


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
          <Route path="/recipes/eton-mess-dessert" element={<EtonMess/>}/>
          <Route path="/recipes/cinnamon-rolls-dessert" element={<CinnamonRolls/>}/>
          <Route path="/recipes/chocolate-cake-cookies" element={<ChocolateCakeCookies/>}/>
          <Route path="/recipes/pumpkin-mascarpone-pie" element={<PumpkinMascarponePie/>}/>
          <Route path="/recipes/sugar-cookies" element={<SugarCookies/>}/>
          <Route path="/recipes/italian-orange-cake" element={<OrangeCake/>}/>
          <Route path="/recipes/eggs-en-cocotte" element={<EggsEnCocotte/>}/>
          <Route path="/recipes/deconstructed-elote" element={<DeconstructedElote/>}/>
          <Route path="/recipes/puff-pastry-jalepeno-poppers" element={<JalapenoPoppers/>}/>
          <Route path="/recipes/turkish-eggs" element={<TurkishEggs/>}/>
          <Route path="/recipes/mushroom-miso-soup" element={<MushroomMisoSoup/>}/>
          <Route path="/austin-living/cafe-monet" element={<AustinCafeMonet/>}/>
          <Route path="/austin-living/plant-stores" element={<AustinPlantStores/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>

    </ThemeProvider>


  );
}

export default App;
