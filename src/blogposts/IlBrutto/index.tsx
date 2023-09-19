import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../../utils/theme'
import RestaurantBlogPost from '../RestaurantBlogPost'

import Il_Brutto_BlogSquare from '../../assets/images/blog_posts/il_brutto_blog_square.jpg';
import Il_Brutto2_BlogSquare from '../../assets/images/blog_posts/il_brutto2_blog_square.jpg';
import Il_Brutto3_BlogSquare from '../../assets/images/blog_posts/il_brutto3_blog_square.jpg';
import Il_Brutto4_BlogSquare from '../../assets/images/blog_posts/il_brutto4_blog_square.jpg';

const IlBrutto = () => {

  return (
    <ThemeProvider theme={theme}>
      <RestaurantBlogPost
        image={Il_Brutto_BlogSquare}
        alt="Goat cheese pistachio pasta"
        image2={Il_Brutto2_BlogSquare}
        alt2="Colorful olives"
        image3={Il_Brutto3_BlogSquare}
        alt3="Cacio e Pepe pasta"
        image4={Il_Brutto4_BlogSquare}
        alt4="Hazelnut gelato"
        title="Il Brutto - Classic Italian Dining"
        subtitle={`A fresh take on italian cuisine, makes Il Brutto a great spot to visit. They have some of the best pasta in Austin!`}
        paras={[
          `Il Brutto translates to 'The Ugly.' The name, Il Brutto, is a nod to the iconic spaghetti western film the good, the Bad and the Ugly. Il Brutto is located in East Austin and is a neighborhood Italian spot dedicated to serving authentic Italian cuisine focused on handmade plates of pasta, pizzas, and bread.`,
          `Il Brutto has pasta that is absolutely to die for! Their Cacio e Pepe compares to the pasta I have had in Rome. It is luscious, but the fresh rainbow peppercorns cut through the rich taste and bring some heat. Their agnolotti is also worth a try. It is a goat cheese-stuffed pasta topped with toasted pistachios, orange zest, and thyme. It is light and tangy, making it a perfect summer pasta dish. I would also suggest their homemade gelato. It was luscious and creamy!`,
          `I would recommend sitting outside if you have the chance. They have trees decked with fairy lights making it a cozy spot. Il Brutto gets busy pretty fast. It is worth making a reservation.`

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
