import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../../utils/theme'
import RestaurantBlogPost from '../RestaurantBlogPost'

import BakeryLorraine_BlogSquare from '../../assets/images/blog_posts/bakery_lorraine_blog_square.jpg';
import BakeryLorraine2_BlogSquare from '../../assets/images/blog_posts/bakery_lorraine2_blog_square.jpg';
import BakeryLorraine3_BlogSquare from '../../assets/images/blog_posts/bakery_lorraine3_blog_square.jpg';
import BakeryLorraine4_BlogSquare from '../../assets/images/blog_posts/bakery_lorraine4_blog_square.jpg';



interface Props {
}


const BakeryLorraine = (props: Props) => {

  return (
    <ThemeProvider theme={theme}>
      <RestaurantBlogPost
        image={BakeryLorraine_BlogSquare}
        alt="Hazelnut tart and coffee"
        image2={BakeryLorraine2_BlogSquare}
        alt2="Coffee and macaroons"
        image3={BakeryLorraine3_BlogSquare}
        alt3="Hazelnut tart"
        image4={BakeryLorraine4_BlogSquare}
        alt4="Coffee and macaroons with flowers"
        title="Bakery Lorraine - French Patisserie"
        subtitle={`A cute French bakery in the heart of the Domain, Bakery Lorraine is must visit! Bakery Lorraine has some of the best macaroons and coffee in Austin. `}
        paras={[
          `Bakery Lorraine is one of my pastry and coffee shops in Northwest Austin. This small quiet bakery is located in the heart of the Domain, in what I call restaurant central, a.k.a Rock Rose Ave. Bakery Lorraine has some of the best pastries in town.`,
          `My absolute favorites to order here is their hazelnut tart, macaroons, and Kouign Amann. The hazelnut tart has a crispy shell, hazelnut cremeaux, and whipped cream. It is and flavorful. If I'm not making my own macaroons, this is the place I go. Their earl grey macaroon and raspberry macaroons are my go to! The last thing I love by them is the Kouign Amann. If you haven't had one of these before I would highly reccommend. It is a buttery flakey croissant in the shape of a muffin that has a lemon custard center. `,
          `Bakery Lorraine also has some of the smoothest coffee in town. They texturize the milk beautifully and their beans are fresh and high quality. I always get their latte to pair with the scrumptious desserts they have to offer.`
          
          ]}
        orders={[
          `Latte`,
          `Hazelnut Tart`,
          `Kouign Amann`,
          `Raspberry and Earl Grey Macaroon`
        ]}

      />
    </ThemeProvider>
  )
}

export default BakeryLorraine
