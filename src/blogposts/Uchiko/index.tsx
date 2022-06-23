import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../../utils/theme'
import RestaurantBlogPost from '../RestaurantBlogPost'

import Uchiko_BlogSquare from '../../assets/images/blog_posts/uchiko_blog_square.jpg';
import Uchiko2_BlogSquare from '../../assets/images/blog_posts/uchiko2_blog_square.jpg';
import Uchiko3_BlogSquare from '../../assets/images/blog_posts/uchiko3_blog_square.jpg';
import Uchiko4_BlogSquare from '../../assets/images/blog_posts/uchiko4_blog_square.jpg';



interface Props {
}


const Oseyo = (props: Props) => {

  return (
    <ThemeProvider theme={theme}>
      <RestaurantBlogPost
        image={Uchiko_BlogSquare}
        image2={Uchiko2_BlogSquare}
        image3={Uchiko3_BlogSquare}
        image4={Uchiko4_BlogSquare}
        title="Uchiko - Japanese Vegetarian Fusion"
        subtitle={`An experimental take on Japanese foundations, Uchiko is a unique spot playing with the artistry of food. The chefs take pride in their approach to Japanese food and make bold creative decisions. `}
        paras={[
          `Uchiko is food art at its finest. What I mean by that is not only does the food look like a piece of art, the taste is also an artful experience. The flavors play with the textures in a way that I haven't seen be done by most other restaurants.`,
          `My favorite part of Uchiko is the attention to detail. Their servers are extremely friendly and kind. They take care of you and are extremely helpful! The food is made from fresh fine ingredients. The silverware and dishes are crafted by local artists. Each part has so much though and consideration making the entire dining experience an utter joy!`,
          `What took me by surprise is that they have their own vegetarian menu! As a vegeterian, this is a touch that always makes me extremely happy. I don't have to siphon through the menu to figure out what is vegetarian, instead I can order whatever my heart desires!`,
          `The tempura at Uchiko is on another level. It is light, crisp, and flakey. The crisp exterior is also well seasoned and each dish is paired with delectible sauces to dip in. My personal favorite Tempura dish was the Kabocha Squash tempura. It was unique in flavor and had a wonderful texture. I also enjoyed the giant onion rings!`,
          `The main dishes are mostly small sharing plates, so be sure to order a good few per person. The waiting staff will typically let you know if you have ordered the right amount. Don't forget to try their amazing desserts! The same level of detail is applied to them. My favorite dessert was the milk and cereal. It has chocolate mousse, cereal crusted balls with condensed milk centers, and a crunchy meringue on top. I also love the jasmine cream which is a texture and flavor heaven. At the bottom is a quinoa crisp, jasmine cream, and fresh green cilantro and pineapple topping.`,
          `Uchiko is a creative experimental Japenese restaurant that is taking an innovative approach to food. This is one of my absolute favorite restaurants in Austin. Uchiko gets busy quite fast, so make sure to make a reservation in advance.`
          ]}
        orders={[
          `Hana - Cauliflower Dish`,
          `Kabocha Tempura`,
          `Shag Roll`,
          `Tempura Onion Rings`,
          `Milk and Cereal`,
          `Jasmine Cream`,
          `Banana Bread`
        ]}

      />
    </ThemeProvider>
  )
}

export default Oseyo
