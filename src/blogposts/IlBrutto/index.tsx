import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../../utils/theme'
import RestaurantBlogPost from '../RestaurantBlogPost'

import Il_Brutto_BlogSquare from '../../assets/images/blog_posts/il_brutto_blog_square.jpg';
import Il_Brutto2_BlogSquare from '../../assets/images/blog_posts/il_brutto2_blog_square.jpg';
import Il_Brutto3_BlogSquare from '../../assets/images/blog_posts/il_brutto3_blog_square.jpg';
import Il_Brutto4_BlogSquare from '../../assets/images/blog_posts/il_brutto4_blog_square.jpg';



interface Props {
}


const IlBrutto = (props: Props) => {

  return (
    <ThemeProvider theme={theme}>
      <RestaurantBlogPost
        image={Il_Brutto_BlogSquare}
        image2={Il_Brutto2_BlogSquare}
        image3={Il_Brutto3_BlogSquare}
        image4={Il_Brutto4_BlogSquare}
        title="Il Brutto - Classic Italian Dining"
        subtitle={`A fresh take on italian cuisine, makes Il Brutto a great spot to visit. They have some of the best pasta in Austin!`}
        paras={[
          `Translated as 'The Ugly' the name Il Brutto is a nod to the iconic spaghetti western film the good, the bad and the ugly. Il Brutto is located in East Austin and is a neighborhood italian spot dedicated to serving authentic italian cuisine with a focus on handmade pastas, pizzas, and breads.`,
          `Il Brutto has pasta that is absolutely to die for! Their cacio e pepe compares to the pasta I have had in Rome. It is luscious, but the fresh rainbow peppercorns cut through the rich taste and bring some heat. Their agnolotti is also worth a try. It is a goat cheese stuffed pasta topped with toasted pistachios, orange zest, and thyme. It is light and tangy, making it a perfect summer pasta dish. I would also suggest their House Made Gelato. It was luscious and creamy!`,
          `I would reccomend sitting outside if you have the chance. They have trees decked with fairy lights making it a cozy spot. Il Brutto gets busy pretty fast so it is worth making a reservation ahead of time.`
          
          ]}
        orders={[
          `Marinated Olives`,
          `Agnolotti`,
          `Cacio e Pepe`,
          `Hazelnut Gelato`
        ]}

      />
    </ThemeProvider>
  )
}

export default IlBrutto
