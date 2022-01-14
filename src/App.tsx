import React from 'react';
import './App.css';
import {theme} from './utils/theme'
import { ThemeProvider } from '@mui/material/styles'
import Home from './organism/Home'
import Recipes from './organism/Recipes'
import AustinLiving from './organism/AustinLiving'
import Art from './organism/Art'
import About from './organism/About'
import Navbar from './organism/Navbar'
import Footer from './molecule/Footer'

import RecipeBlogPost from './molecule/RecipeBlogPost'



import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/recipes" element={<Recipes/>}/>
          <Route path="/austin-living" element={<AustinLiving/>}/>
          <Route path="/art" element={<Art/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/recipes/eton-mess-dessert" element={
            <RecipeBlogPost
              image='/blog_posts/eton_mess_blog_square.png'
              icon='/icons/baking_icon.png'
              title="Eton Mess Summer Dessert"
              subtitle={`This refreshing dessert is perfect for any summer dinner.
                Dreamy whipped cream with crunch meringue, layered with fresh strawberries
                 and raspberries. `}
              ingredients= {['2 large egg whites',
                             '120g granulated sugar',
                             '500g strawberries, hulled and roughly chopped',
                             '1 cup heavy cream',
                             '1 teaspoon powder sugar',
                             '1/2 cup raspberries']}
              steps= {['STEP 1 Heat oven to 120C/100C fan/gas 1 and line a large baking tray with parchment paper.Whisk the egg whites in a clean bowl using an electric whisk or tabletop mixer until they reach stiff peaks, then add the sugar in 3 lots, re-whisking to stiff peaks every time. Spoon dollops of the mixture onto the baking parchment, cook on the bottom shelf of the oven for 1hr – 1hr15 mins until the meringues are completely hard and come off the paper easily. Leave to cool.',
                  'step 2']}
              />
          }/>
        </Routes>
        <Footer/>
      </BrowserRouter>

    </ThemeProvider>


  );
}

export default App;
