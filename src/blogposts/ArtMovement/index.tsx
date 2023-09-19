import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../../utils/theme'
import ArtBlogPost from '../../blogposts/ArtBlogPost'

import Male_Female from '../../assets/images/art/male_female.png';
import Movement_IPad from '../../assets/images/blog_posts/movement_blog_square.jpg';
import Minimalist_Blog_Square from '../../assets/images/blog_posts/minimalist_blog_square.png';

const ArtMovement = () => {

  return (
    <ThemeProvider theme={theme}>
      <ArtBlogPost
        image={Minimalist_Blog_Square}
        alt="4 piece gallery wall displayed in a room. Colors are beige, light pink, and brown."
        image2={Male_Female}
        alt2="A woman and man kissing through line art."
        image3={Movement_IPad}
        alt3="A woman drawing art on the iPad through ProCreate app."
        etsy_link="https://www.etsy.com/listing/927352660/printable-beige-line-art-set-of-4?click_key=d2884275cc043d2b9db9ef6a3c3e4e8c88c7db87%3A927352660&click_sum=af8490fa&ref=shop_home_feat_2"
        title="Movement - Set of 4"
        subtitle={`This neutral and earth tone gallery wall encompasses the fluid nature of relationships. The sense of adaptability is what strengthens a relationship.`}
        paras={[`When starting up a new piece, I typically decide on 2 things: <b>what is the message I would like to share</b> and <b>what color story will best convey that</b>. In this case I wanted to discuss the theme of how movement and fluidity within a relationship can lead to it's ultimate success. The image of the woman and man leaning into each other describes the closeness in a relationship. Vulnerability and adaptability go hand in hand. This piece was done using line art to draw attention to the expressions.`,
          `The print with the legs moving is also playing with the concept of movement. I imagine myself thinking about my loved ones moving my legs around, almost zoning out with hapiness. It's the feeling of utter peace and being transported into my happy place that I wanted to convey. The neutral color story continues through each piece to maintain continuity.`,
          `The leaf represents growth. When fluidity and movement is embraced in a relationship, it can truly flourish. Life is about change and when that is embraced it feels as if a new leaf is turned. Finally, the faces represents the different sides of oneself in a relationship. There is so many emotions to feel through the course of a relationship and it is an ode to that movement of emotions that occur.`,
          `It might seem odd at first to compare movement to a relationship. However, the way I perceive it is when that constant flow is embraced, that is when true understanding is discovered. There will be lows and highs, changes and preservation. It's when that is fully understood that a relationship can be at its best. Please check out my Etsy below to support me as an artist. I also do custom pieces so reach out if you would like work on something together.`]}
      />

    </ThemeProvider>
  )
}

export default ArtMovement
