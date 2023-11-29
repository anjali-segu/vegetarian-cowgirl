import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../../utils/theme'
import ArtBlogPost from '../../blogposts/ArtBlogPost'

import Watercolor from '../../assets/images/blog_posts/art_supplies3.jpg' 
import Watercolor2 from '../../assets/images/blog_posts/watercolor_blog_square.jpg';
import Watercolor3 from '../../assets/images/blog_posts/watercolor.jpg';

const ArtIntroToWatercolor = () => {

  return (
    <ThemeProvider theme={theme}>
      <ArtBlogPost
        image={Watercolor}
        alt=""
        image2={Watercolor2}
        alt2=""
        image3={Watercolor3}
        alt3=""
        etsy_link="https://printsbyminimalist.etsy.com"
        title="Intro to Watercolor - Conquer the Art Fear"
        subtitle={`Starting a new art form is always a bit scary and nerve wracking, but here are some tips to walk you through it.`}
        paras={[`Art fear: "I can’t do it; it's too hard, it's too scary, is it too complex? What do I even make? Never mind…"`,
        `Have you ever thought of any of those phrases? I’ve been there many, many times. It’s always scary when you venture into a new medium. Some mediums do transfer skills into others, while others feel like you are fresh out of the water. Watercolor is unique in the way that it blends and layers compared to other painting mediums like oil colors and acrylics. I started painting with those two mediums first before venturing into watercolors.`,
        `Watercolor does have a low barrier to entry. By that, I mean that it is simple to get started, and you don't need too many tools. With a few various brushes and basic colors, it is easy to start creating. On the other hand, mediums like oil take many tools and specific items, just to begin.`,
        `When starting a new medium, I first try to copy pieces that already exist on the internet. It is intimidating to stare at a blank page and come up with an idea from scratch. I try not to stress about that too much and instead browse Pinterest and Etsy for ideas. At the beginning, I try not to deviate much from the example piece. Oftentimes I will print a screenshot of the target piece and trace it onto my paper. This makes it easier to create and allows me to focus only on stroke work and color creation. I know this seems a bit monotonous and boring, but it takes away a lot of the stress that I personally have when starting to learn.`,
        `While gaining some insight into how the medium flows and works, I keep one fundamental thing in mind: Perfection takes practice. In the beginning, it is going to be tough to control the water flow, and the amount of pigment, and create blended strokes, but with time it gets easier and more intuitive. Patience is incredibly important along with some self-love!`,
        `After I independently try to learn, I like to turn to actual experts to see what they say. One book that I was gifted that I fell in love with is "<a href="https://www.amazon.com/Everyday-Watercolor-Learn-Paint-Days/dp/0399579729" target="_blank">Everyday Watercolor: Learn to Paint Watercolor in 30 Days</a>." Jenna Rainey goes into detail on every aspect of watercolor. It makes it simple and clear how to technically approach watercolor. I am not going to go into too much detail as there are so many experts in this world who can do a much better job than myself. I highly recommend her book as a jumping-off point.`,
        `Once I have played around, and learned some techniques, that is when the fun begins. I can start to create new pieces with my own art style. Watercolor is incredibly therapeutic because I find the water movement relaxing and satisfying. I still look online for inspiration, but finally, I can make my own twists and expand into different directions. Not every piece will be my favorite or even make it out of my portfolio, but the process is what I enjoy. I started to upgrade some of my tools and acquired watercolor pencils that allowed me to delve into detailed works that were much harder to accomplish with liquid watercolor paint. Check out my favorite art supplies in this blog post for specifics.`,
        `Finally, whenever I just want to splatter color on paper, I enjoy just making random cardstock or bookmarks to express the colors and feelings in my brain. Not all art has to be perfectly planned or organized. Pure expression is beautiful. I encourage you to try this and see what you can create. Some of my favorite pieces were made completely on a whim of pure expression.`,
        `The key to starting a new medium is to be patient and kind to yourself. I hope hearing my journey through the form helps you. It is okay to be scared and nervous, but just know you are not alone in your journey and embrace the discomfort. Before you know it, you will be creating new pieces in a medium you were once nervous about.`]}
      />

    </ThemeProvider>
  )
}

export default ArtIntroToWatercolor
