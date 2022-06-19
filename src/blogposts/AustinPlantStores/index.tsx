import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import {theme} from '../../utils/theme'
import StandardBlogPost from '../../blogposts/StandardBlogPost'

import Austin_Plant_Store from '../../assets/images/blog_posts/austin_plant_store.jpg';
import Plant_Store_Blog_Square from '../../assets/images/blog_posts/plant_store_blog_square.jpg';

import Activities_Icon from '../../assets/images/icons/activities_icon.png';

interface Props {
}


const AustinPlantStores = (props:Props) => {

  return (
    <ThemeProvider theme={theme}>
    <StandardBlogPost
      image={Plant_Store_Blog_Square}
      image2={Austin_Plant_Store}
      icon={Activities_Icon}
      title="My Favorite Austin Plant Stores"
      subtitle={`The Great Outdoors and Leaf Landscape Supply are my absolute favorite
                 plant stores to visit in Austin. They have a great selection of unique
                 indoor and outdoor plants and are extremely affordable. `}
      paras= {[`The plant scene in Austin is exciting but can be a bit overwhelming.
        Austin has everything from boutique nurseries to landscaping garden centers.
        I have been on the hunt for the best places to find plants. My two favorites
        are The Great Outdoors and Leaf Landscape Supply. Between, the two of these
        you can find most botanicals that won’t break the bank. `,
        `The Great Outdoors is located on Congress Avenue in downtown Austin. It
        is a fairly large garden center with everything from gorgeous pots to unique tropical
         plants. The staff is extremely knowledgeable and super helpful in aiding you to find
          the best plants for your space. All of the plants that I have bought from them have
           turned out beautifully and have been easy to care for. I love the ceramic pot options
           that they have. Another perk is they will drill holes for free in any of the pots
            your purchase.`,
               `Leaf Landscape Supply is located on Pond Springs in Northwest Austin. It is
                mostly known for its wide range of drought-friendly outdoor plants. This is
                 a great place to visit for any xeriscaping purposes. Inside, they have all
                  of the standard house plants such as pothos, snake plants, succulents, anthuriums,
                   etc. Their pot selections are a bit small and most of them don’t have drain holes.
                    I would recommend their outdoor plant selection as well as their basic house
                     plants. They are more affordable than most other garden centers and do provide
                      bulk discounts. We have used them for all our outside landscaping and the plants
                       have done really well! `]}
      steps= {[`Grab brunch at Phoebe’s Diner`,
              `Swing by the Great Outdoors for some cute plants`,
              `Get ice cream at Manolis`,
            ]}
      />

    </ThemeProvider>
  )
}

export default AustinPlantStores
