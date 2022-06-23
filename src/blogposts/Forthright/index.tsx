import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../../utils/theme'
import RestaurantBlogPost from '../RestaurantBlogPost'

import Forthright_BlogSquare from '../../assets/images/blog_posts/forthright_blog_square.jpg';
import Forthright2_BlogSquare from '../../assets/images/blog_posts/forthright2_blog_square.jpg';
import Forthright3_BlogSquare from '../../assets/images/blog_posts/forthright3_blog_square.jpg';
import Forthright4_BlogSquare from '../../assets/images/blog_posts/forthright4_blog_square.jpg';



interface Props {
}


const Forthright = (props: Props) => {

  return (
    <ThemeProvider theme={theme}>
      <RestaurantBlogPost
        image={Forthright_BlogSquare}
        image2={Forthright2_BlogSquare}
        image3={Forthright3_BlogSquare}
        image4={Forthright4_BlogSquare}
        title="Forthright - My Favorite Austin Brunch Spot"
        subtitle={`Tucked away in the Seaholm district, Forthright is a brunch spot worth visiting! Their breakfast staples always hit the spot with their innovative twist yet classic flavors.`}
        paras={[
          `Forthright was a breakfast place I found a couple of years ago and I just keep coming back. The servers are extremely kind. The restaurant has a modern hip feel to it, and it is tucked away from the heart of downtown making it a little quieter.`,
          `Forthright makes delicious food from scratch using quality ingredients. They serve classic Americana and Central Texas breakfast and brunch fare. I love the atmosphere, almost french coffee shop like. It is also surrounded by trees on their outside patio making it nice to sit outside as well!`,
          `What struck me the most was the food. Their menu does rotate but there are some classics that stick around. Most notably, is the coconut chia pudding. This was the first chia pudding I ever had and boy was I spoiled! It still is the best chia pudding that I've had in Austin! It is unbelievable creamy, topped with sweet berries and toasted almonds. I've recreated it at home but their version is definately worth a try. I also love their mushroom toast. In the past they had a tropical french toast that was also delicious. In general all of the food always hits the spot!`,
          `Forthright is definately worth a visit. I would reccomend making a reservation ahead of time as they do get pretty busy on the weekends.`
          ]}
        steps={[
          `Chia Pudding`,
          `Breakfast Burger`,
          `Mushroom Toast`,
          `Lavendar Latte`
        ]}

      />
    </ThemeProvider>
  )
}

export default Forthright
