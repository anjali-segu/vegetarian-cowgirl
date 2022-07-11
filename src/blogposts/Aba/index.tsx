import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../../utils/theme'
import RestaurantBlogPost from '../RestaurantBlogPost'

import Aba_BlogSquare from '../../assets/images/blog_posts/aba_blog_square.jpg';
import Aba2_BlogSquare from '../../assets/images/blog_posts/aba2_blog_square.jpg';
import Aba3_BlogSquare from '../../assets/images/blog_posts/aba3_blog_square.jpg';
import Aba4_BlogSquare from '../../assets/images/blog_posts/aba4_blog_square.jpg';



interface Props {
}


const Aba = (props: Props) => {

  return (
    <ThemeProvider theme={theme}>
      <RestaurantBlogPost
        image={Aba_BlogSquare}
        alt="Falafel in a bowl"
        image2={Aba2_BlogSquare}
        alt2="Eggplant dish"
        image3={Aba3_BlogSquare}
        alt3="Feta dish"
        image4={Aba4_BlogSquare}
        alt4="Coffee mug"
        title="Aba - Aesthetic Mediterranean Cuisine"
        subtitle={`A magical garden aesthetic, best describe Aba. A secret spot located on Congress, Aba gives mediteranean food a new take.  `}
        paras={[
          `Aba is a Mediterranean restaurant originating from Chicago's historic Fulton Market District. Aba, meaning father in Hebrew, incorporates Chef CJ Jacobson's lighter style of cooking with influences from the Mediterranean, including Israel, Lebanon, Turkey, and Greece.`,
          `Aba has such a unique atmosphere, which first drew me to it. They have a boho fairytale aesthetic that makes dining their a treat! Everything from the decor to the dishes that are plated on, the whimsical feel continues. Outside they have beautiful garden seating. We sat inside since it was a hot day and I was still taken back by the gorgeous design inside.`,
          `Aba has light and refreshing dishes. My personal favorites were the green falafel, whipped feta spread, and charred eggplant spread. The spreads come with pita bread to dip in. Aba does acidity in their dishes correctly! All of the dips had a bright refreshing tast making their dishes addicting. Their coffee was also delicious and came in a Morroccan inspired mug.`
          
          ]}
        orders={[
          `Green Falafel`,
          `Whipped Feta Spread`,
          `Charred Eggplant Spread`
        ]}

      />
    </ThemeProvider>
  )
}

export default Aba
