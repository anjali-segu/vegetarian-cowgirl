import * as React from 'react';
import { createTheme,ThemeProvider } from '@mui/material/styles';
import {theme} from '../../utils/theme'
import StandardBlogPost from '../../blogposts/StandardBlogPost'

import Austin_Afternoon from '../../assets/images/blog_posts/austin_afternoon.jpg';
import Cafe_Monet_Blog_Square from '../../assets/images/blog_posts/cafe_monet_blog_square.jpg';

import Activities_Icon from '../../assets/images/icons/activities_icon.png';

interface Props {
}


const AustinCafeMonet = (props:Props) => {

  return (
    <ThemeProvider theme={theme}>
    <StandardBlogPost
      image={Cafe_Monet_Blog_Square}
      image2={Austin_Afternoon}
      icon={Activities_Icon}
      title="Cafe Monet - Art Adventure"
      subtitle={`Cafe Monet is a cute paint and pottery shop in downtown Austin. Here's a fun
                 weekend itinerary to do in Austin with family or friends. `}
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
    </ThemeProvider>
  )
}

export default AustinCafeMonet
