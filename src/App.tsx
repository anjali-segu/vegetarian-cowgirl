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
import Oseyo from './blogposts/Oseyo'
import Uchiko from './blogposts/Uchiko'
import IlBrutto from './blogposts/IlBrutto'
import Aba from './blogposts/Aba'
import BakeryLorraine from './blogposts/BakeryLorraine';
import ArtMovement from './blogposts/ArtMovement'

import {
  Routes,
  Route,
  Link as RRDOMLink,
} from "react-router-dom";

// recipe type && recipe component
import Recipe from './utils/recipe';
import DynamicRecipeBlogPost from './blogposts/DynamicRecipeBlogPost';

import { recipes } from './utils/BlogImports'
import IntroToBreville from './blogposts/IntroToBreville';
import UnderConstruction from './organism/UnderConstruction';
import { Box, Input, List, ListItem, ListItemButton, ListItemText } from '@mui/material';

import { searchRecipes } from './utils/search';



const createRecipeBlogPosts = (recipes: Recipe[]) => recipes.map(recipe => <Route key={recipe.path} path={recipe.path} element={<DynamicRecipeBlogPost {...recipe} />} />)

const App: React.FC = () => {

  const inputRef = React.useRef<HTMLInputElement>(null);

  const [list, setList] = React.useState<{ title: string, path: string, score: number }[]>([]);

  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <div id='content-wrap'>
        <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
          <Input placeholder='Search' inputRef={inputRef} onChange={() => {
            if (inputRef.current?.value !== undefined) {
              const results = searchRecipes(inputRef.current?.value, recipes);
              let searchResults = Object.values(results).sort((a, b) => b.searchScore - a.searchScore).map(x => { return { title: x.recipe.title, path: x.recipe.path, score: x.searchScore } });
              let top = [searchResults[0]]
              for (let i = 0; i < searchResults.length - 1; ++i) {
                if (searchResults[i].score - searchResults[i + 1].score > searchResults[i].score * .667) {
                  break;
                }
                top.push(searchResults[i + 1])
              }
              setList(top.slice(0, 5));
            }
          }} />
          {list.length > 0 &&
            <Box width='50%' display='flex' justifyContent='left'>
              <List>
                {list.map(e => <ListItem key={e.path}>
                  <ListItemButton onClick={() => {
                    if (inputRef.current?.value !== undefined) {
                      inputRef.current.value = ''
                      setList([])
                    }
                  }}>
                    <RRDOMLink to={e.path}><ListItemText primary={e.title} secondary={e.score} /></RRDOMLink>
                  </ListItemButton>
                </ListItem>)}
              </List>
            </Box>}

        </Box>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/austin-living" element={<AustinLiving />} />
          <Route path="/costa-rica" element={<CostaRica />} />
          <Route path="/austin" element={<Austin />} />
          <Route path="/hawaii" element={<Hawaii />} />
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

    </ThemeProvider>


  );
}

export default App;
