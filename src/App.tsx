import React from 'react';
import './App.css';
import {theme} from './utils/theme'
import { ThemeProvider } from '@mui/material/styles'
import BlogGrid from './molecule/BlogGrid'
import Navbar from './organism/Navbar'



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
          <Route path="/" element={<BlogGrid/>}/>
        </Routes>
      </BrowserRouter>

    </ThemeProvider>


  );
}

export default App;
