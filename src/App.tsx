import React from 'react';
import './App.css';
import {theme} from './utils/theme'
import { ThemeProvider } from '@mui/material/styles'
import Home from './organism/Home'
import Recipes from './organism/Recipes'
import AustinLiving from './organism/AustinLiving'
import Navbar from './organism/Navbar'
import Footer from './molecule/Footer'



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
        </Routes>
        <Footer/>
      </BrowserRouter>

    </ThemeProvider>


  );
}

export default App;
