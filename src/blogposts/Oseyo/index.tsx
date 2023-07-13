import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../../utils/theme'
import RestaurantBlogPost from '../RestaurantBlogPost'

import Oseyo_BlogSquare from '../../assets/images/blog_posts/oseyo_blog_square.jpg';
import Oseyo2_BlogSquare from '../../assets/images/blog_posts/oseyo2_blog_square.jpg';
import Oseyo3_BlogSquare from '../../assets/images/blog_posts/oseyo3_blog_square.jpg';
import Oseyo4_BlogSquare from '../../assets/images/blog_posts/oseyo4_blog_square.jpg';



interface Props {
}


const Oseyo = (props: Props) => {

  return (
    <ThemeProvider theme={theme}>
      <RestaurantBlogPost
        image={Oseyo_BlogSquare}
        alt="Ddukbokki in red hot sauce"
        image2={Oseyo2_BlogSquare}
        alt2="Crispy dumplings on a black plate"
        image3={Oseyo3_BlogSquare}
        alt3="Bibimbap in a hot stone bowl"
        image4={Oseyo4_BlogSquare}
        alt4="Two colorful sparkling drinks"
        title="Oseyo - Vegetarian Korean Bibimbap"
        subtitle={`A modern twist on Korean food, makes Oseyo worth a visit! Their vegetarian Bibimbap is to die for! `}
        paras={[
          `Oseyo is a modern take on Korean-American food inspired by mom's recipes. They emphasize their minimalist approach by maximizing the freshness of their ingredients and attention to detail. Oseyo is in East Austin.`,
          `What caught me first about Oseyo was its modern aesthetics. The building itself is gorgeous with its wood paneling. The minimalist approach makes it stand out amongst the busy Austin vibes. Inside, you are acquainted with Korean-inspired design. Everything is simple, but there is an attention to detail that elevates the feeling. Outside is a cute covered patio space.`,
          `Often I get weary when the aesthetic is top-notch because I worry if the food will have that same attention to detail, but Oseyo does both right! My favorite item to order is the Vegetarian Bibimbap! It is loaded with fresh and pickled veggies and topped with an egg. The dish is in a hot stone. The rice gets extremely crispy and toasty! The meals also come with Kimchi and an assortment of spicy and sour additions to mix into the Bibimbap to give it a punch.`,
          `In addition to the Bibimbap, I love their dumplings and Ddukbokki. I rarely get to try these classics because they are typically not vegetarian. It was a thrill to get the chance to try them. I would also recommend trying their Yuzu lemonade. It is refreshing on a hot Austin afternoon.`,
          `Oseyo is a great place to try authentic Korean food made vegetarian-friendly. The atmosphere compliments the food making it a great place to visit.`
        ]}
        orders={[
          `Gun Mandu (Dumplings)`,
          `Ddukbokki`,
          `Dolsot Bibimbap`,
          `Yuzu Lemonade`
        ]}

      />
    </ThemeProvider>
  )
}

export default Oseyo
