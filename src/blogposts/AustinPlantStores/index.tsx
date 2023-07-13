import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../../utils/theme'
import StandardBlogPost from '../../blogposts/StandardBlogPost'

import Austin_Plant_Store from '../../assets/images/blog_posts/austin_plant_store.jpg';
import Plant_Store_Blog_Square from '../../assets/images/blog_posts/frond_plant_blog_square.jpg';

import Activities_Icon from '../../assets/images/icons/activities_icon.png';

interface Props {
}


const AustinTeaGuide = (props: Props) => {

  return (
    <ThemeProvider theme={theme}>
      <StandardBlogPost
        image={Plant_Store_Blog_Square}
        alt="A sign with the word Frond on it inside a store filled with plants"
        image2={Austin_Plant_Store}
        alt2="Bougainvillea plant with dark maroon leaves"
        icon={Activities_Icon}
        alticon="A map and compass icon"
        title="My Favorite Austin Plant Stores"
        subtitle={`The Great Outdoors, Leaf Landscape Supply, and Frond Plant Shop are my absolute favorite plant stores to visit in Austin. They have a great selection of unique indoor and outdoor plants and are extremely affordable. `}
        paras={[`The plant scene in Austin is exciting but can be a bit overwhelming. Austin has everything from boutique nurseries to landscaping garden centers. I have been on the hunt for the best places to find plants. My favorites are The Great Outdoors, Leaf Landscape Supply, and Frond Plant Shop. Between the three of these, you can find most botanicals that won't break the bank.`,
          `The Great Outdoors is located on Congress Avenue in downtown Austin. It is a fairly large garden center with everything from gorgeous pots to unique tropical plants. The staff is extremely knowledgeable and super helpful in aiding you to find the best plants for your space. All of the plants that I have bought from them have turned out beautifully and have been easy to care for. I love the ceramic pot options that they have. Another perk is that they will drill holes for free in any of the pots you purchase.`,
          `Leaf Landscape Supply is located on Pond Springs in Northwest Austin. It is mostly known for its wide range of drought-friendly outdoor plants. This is a great place to visit for any xeriscaping purposes. Inside, they have all of the standard houseplants such as pothos, snake plants, succulents, anthuriums, etc. Their pot selections are a bit small, and most of them don't have drain holes. I would recommend their outdoor plant selection as well as their basic houseplants. They are more affordable than most other garden centers and do provide bulk discounts. We have used them for all our outside landscaping, and the plants have done really well!`,
          `Frond Plant Shop is a boutique plant store in downtown Austin. They have a variety of cute planters and medium-priced plants. My favorite part of this plant store is the people. They are so helpful and friendly to talk to. I chatted a bit with Amanda, who gave me great tips on not only the plants that I was purchasing but also some of my plants at home! The planters are gorgeous but are on the pricier side. Right next door is one of my favorite Austin food trucks, Churros Co. Make sure to plan a pit stop there before heading home!"`]}
        steps={[`Grab brunch at Phoebe's Diner`,
          `Swing by the Great Outdoors for some cute plants`,
          `Get ice cream at Manolis`,
          `Swing by Frond Plant Shop `,
          `Munch on some churros from Churros Co.`
        ]}
      />

    </ThemeProvider>
  )
}

export default AustinTeaGuide
