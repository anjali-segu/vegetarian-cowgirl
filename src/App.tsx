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
          <Route path="/indianapolis-city-guide" element={<Indianapolis/>}/>
          <Route path="/art" element={<Art/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/recipes/eton-mess-dessert" element={<EtonMess/>}/>
          <Route path="/recipes/cinnamon-rolls-dessert" element={<CinnamonRolls/>}/>
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
              paras= {[`Cafe Monet was a cute new find in Austin’s art culture. I know pottery paints
                 shops exist in just about every town, but trust me Cafe Monet is worth a visit. Pricing
                 at Cafe Monet is very affordable. They have a great variety of pieces. Studio Painting is
                  open from Tuesday to Saturday (11am - 7pm) and Sunday (1pm - 7pm). Reservations are taken
                   as well as walk-ins.`,
                   `I went with my brother’s girlfriend for a fun Austin afternoon. We both got a little stuck
                    on how we were going to paint the pottery so we ended up browsing through Pinterest for a
                    little inspiration. Cafe Monet is stocked with all sorts of tools to make your creation come
                     to life! They also have a great selection of glazes. The staff is extremely kind and helpful.
                      They will give you advice if you would like to make sure your piece comes out great. `,
                      `Right next door is Central Market! If you haven’t been to Central Market before I would definitely
                       recommend swinging by. Central Market is the higher end H-E-B and is chalked full of delicious treats.
                        My absolute favorites include their fresh tortilla section and their delicious bread section. They
                         also have a great international selection! `,
                       `To finish off our Austin day we swung by Manolis! I have not had better Italian gelato in the US than here.
                       They create the smoothest and dreamiest scoops that will hit the spot! I personally did not enjoy many of the
                       pastries but their sorbet and ice cream is to die for! My personal favorites include the Passion Fruit Ice Cream,
                        Guava Ice Cream, and Butter Pecan Ice Cream. They also have some great dairy-free and vegan options.
                        Manolis is a 9-minute drive away from Cafe Monet and is definitely worth a visit! It does not have a ton of
                         parking options, but there is a neighborhood right next door from the food trucks where you can park in. `]}
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
