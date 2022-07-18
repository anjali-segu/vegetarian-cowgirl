import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../../utils/theme'
import StandardBlogPost from '../StandardBlogPost'

import Tea_Jar_Blog_Square from '../../assets/images/blog_posts/tea_jar_blog_square.jpg';

import Brentwood_Social from '../../assets/images/blog_posts/brentwood_social.jpg';
import Drinks_Icon from '../../assets/images/icons/drinks_icon.png';


interface Props {
}


const AustinPlantStores = (props: Props) => {

  return (
    <ThemeProvider theme={theme}>
      <StandardBlogPost
        image={Tea_Jar_Blog_Square}
        alt="Jars filled with different teas and labeled"
        image2={Brentwood_Social}
        alt2="A pink ornate tea cup"
        icon={Drinks_Icon}
        alticon="A coffee mug and martini glass."
        title="Austin Tea Guide"
        subtitle={`The Steeping Room is my absolute favorite Austin tea spot. Find everything from delicious flakey scones to some of the best teas I've ever had right in Austin.  `}
        paras={[` Austin has some amazing tea stores that are worth checking out! My first honorable mention goes to The Steeping Room. This has been a store that I have visited since I move to Austin about 8 years ago and I still go there for all my tea needs.`,
        `The Steeping Room is located in downtown Austin on Lamar Blvd. It is a charming little store tucked away. Inside you will be met with large steel vats filled with tea leaves on shelves. They stock every type of tea blend that you can think of. My personal favorites are the Milk Oolong, Lady Grey, Eastside Earl Grey, and White Snowball. The milk oolong is the creamiest white tea I have ever had. It has mellow soft sweet cream notes that are very unique to this tea. The Lady Grey is a lavender earl grey tea that is perfect for the morning. Their classic Eastside Earl Grey is also perfect. The White Snowball is a seasonal blend that is orange blossom vanilla white tea that is wonderful to curl up with around the fire. The Steeping Room has hundred of teas for you to discover. In addition, they can ship blends right to your door! `,
        `Not only do they have first-class tea, but the Steeping Room also has a delectable breakfast menu! I personally am obsessed with their scones. I would recommend the triple berry spelt scone and the cheddar rosemary scone. I always order the scone set menu item when I visit the steeping room to try some new teas and get my scone fill for the day! `,
        `Another tea spot I would recommend is Brentwood Social House. They have a great selection of teatime treats for any dietary restriction. I have tried their high tea and it was an absolute treat! They provide the cutest teacups and displayed all the treats on a tiered platter just like I could dream for! Their tea is great but I go here for the treats and the atmosphere. `,
        `Now while I did say this was an Austin Tea Guide, I couldn't skip out on one more place that isn't Austin based, The Art of Tea. I shop for all my other tea needs on their online website. They have some amazing caffeine-free blends, matcha, and green tea. I am obsessed with their Jasmine Pearls which is a jasmine green tea. I have not found another jasmine tea that has even come close. The Art of Tea puts a great deal of effort into all of its tea blends and it pays off in the divine taste. I would highly recommend checking them out. `]}
        steps={[`Grab breakfast at the Steeping Room.`,
                `Check out the Art of Tea's website.`
        ]}
      />

    </ThemeProvider>
  )
}

export default AustinPlantStores
