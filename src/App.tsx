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
import Navbar from './organism/Navbar'
import Footer from './molecule/Footer'
import EtonMess from './blogposts/EtonMess'
import StandardBlogPost from './blogposts/StandardBlogPost'


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
          <Route path="/costa-rica-city-guide" element={<CostaRica/>}/>
          <Route path="/austin-city-guide" element={<Austin/>}/>
          <Route path="/hawaii-city-guide" element={<Hawaii/>}/>
          <Route path="/art" element={<Art/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/recipes/eton-mess-dessert" element={<EtonMess/>}/>
          <Route path="/austin-living/cafe-monet" element={
            <StandardBlogPost
              image='/blog_posts/cafe_monet_blog_square.jpg'
              image2='/austin_afternoon.jpg'
              icon='/icons/activities_icon.png'
              title="Cafe Monet - Art Adventure"
              subtitle={`Cafe Monet is a cute paint and pottery shop in downtown Austin. Here's a fun
                         weekend itinerary to do in Austin with family or friends. `}
              subtitle2={`This is a classic British treat! Inspired by my obsession with the
                          Great British Bake Off. The recipe itself is easy to make and can
                          be prepped in advance and assembled in minutes. It keeps well up to 3 days.
                          You will need an electric whisk as this recipe does have meringue involved.
                          `}
              paras= {[`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                 incididunt ut labore et dolore magna aliqua. Massa sapien faucibus et molestie ac.
                 Quisque sagittis purus sit amet volutpat consequat mauris. Magna fermentum iaculis eu non
                  diam phasellus vestibulum lorem sed. Diam phasellus vestibulum lorem sed risus ultricies.
                   Nunc consequat interdum varius sit amet mattis. Lobortis elementum nibh tellus molestie
                    nunc non. Iaculis urna id volutpat lacus laoreet non. Id nibh tortor id aliquet lectus.
                     Sed risus pretium quam vulputate dignissim suspendisse. Imperdiet massa tincidunt nunc
                      pulvinar sapien et. Mauris in aliquam sem fringilla ut morbi tincidunt. Volutpat blandit
                       aliquam etiam erat velit scelerisque. Metus aliquam eleifend mi in nulla posuere.`,
                     `Sapien pellentesque habitant morbi tristique senectus. Ullamcorper dignissim cras tincidunt
                      lobortis feugiat vivamus at. Adipiscing enim eu turpis egestas pretium. Porta lorem mollis
                       aliquam ut porttitor leo. Pulvinar sapien et ligula ullamcorper malesuada proin libero.
                        Tincidunt nunc pulvinar sapien et ligula. Ac felis donec et odio pellentesque diam volutpat.
                         Proin fermentum leo vel orci. Aliquam sem fringilla ut morbi tincidunt. Euismod in pellentesque
                          massa placerat duis ultricies lacus sed turpis. Scelerisque viverra mauris in aliquam.
                          Ante metus dictum at tempor commodo ullamcorper.`,
                        `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                           incididunt ut labore et dolore magna aliqua. Massa sapien faucibus et molestie ac.
                           Quisque sagittis purus sit amet volutpat consequat mauris. Magna fermentum iaculis eu non
                            diam phasellus vestibulum lorem sed. Diam phasellus vestibulum lorem sed risus ultricies.
                             Nunc consequat interdum varius sit amet mattis. Lobortis elementum nibh tellus molestie
                              nunc non. Iaculis urna id volutpat lacus laoreet non. Id nibh tortor id aliquet lectus.
                               Sed risus pretium quam vulputate dignissim suspendisse. Imperdiet massa tincidunt nunc
                                pulvinar sapien et. Mauris in aliquam sem fringilla ut morbi tincidunt. Volutpat blandit
                                 aliquam etiam erat velit scelerisque. Metus aliquam eleifend mi in nulla posuere.`]}
              steps= {[`Head to Cafe Monet`,
                      `Paint some pots`,
                      `Head to Manolis, grab some food`,
                    ]}

              />
          }/>
        </Routes>
        <Footer/>
      </BrowserRouter>

    </ThemeProvider>


  );
}

export default App;
