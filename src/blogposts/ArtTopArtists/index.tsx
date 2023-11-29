import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../../utils/theme'
import ArtBlogPost from '../../blogposts/ArtBlogPost'

import Artist from '../../assets/images/blog_posts/artist3.png' 
import Artist2 from '../../assets/images/blog_posts/artist_blog_square.jpg';
import Artist3 from '../../assets/images/blog_posts/artist2.png';

const ArtTopArtists = () => {

  return (
    <ThemeProvider theme={theme}>
      <ArtBlogPost
        image={Artist}
        alt=""
        image2={Artist2}
        alt2=""
        image3={Artist3}
        alt3=""
        etsy_link="https://printsbyminimalist.etsy.com"
        title="Top Artists I Follow"
        subtitle={``}
        paras={[`<a href="https://www.floriangadsby.com/" target="_blank"><b>Florian Gadsby - Clay</b></a><br><i>Style: Modern and clean line-based pottery.</i><br>`,
        `So, I've recently jumped into the world of pottery. Always been a sucker for hands-on stuff - be it kneading dough or finger painting. There's just something about that tactile joy that resonates in my brain. Pottery felt like the next big satisfaction for me. I mean, imagine sipping your homemade espresso from a mug you crafted yourself - talk about exciting, right?`,
        `So, I hopped into classes at Mud Studio here in Austin, kickstarting this clay-filled adventure. Along the way, I craved a fellow potter's perspective, someone to deepen my understanding of this art form. Enter Florian Gadsby, a YouTube sensation whose style and technique I instantly fell in love with. His modern, clean line-based pottery vibes perfectly align with my aesthetic. Florian dives deep into the nitty-gritty of creating his pieces, sharing techniques that even a beginner like me can appreciate. Incorporating his tips into my studio sessions has been a game-changer.`,
        `<a href="https://kendalldavisclay.com/" target="_blank"><b>Kendall Davis Clay - Clay</b></a><br><i>Style: Quirky and beautifully made pottery with a lot of personality and character.</i><br>`,
        `Enter Kendall Davis, another potter I stumbled upon on Instagram, and oh boy, did I fall for her unique style. Her pieces are this perfect blend of quirky and beautifully made - each one boasting its own personality and character. I enjoy browsing her Instagram, soaking up inspiration from this skilled potter, and exploring the boundless possibilities that clay offers.`,
        `<a href="https://charlescecilstudios.com/" target="_blank"><b>Charles H. Cecil Studios - Oil Paint</b></a><br><i>Style: Creates beautiful classical oil paintings, preserving the classical style.</i><br>`,
        `Now, let's talk about classical beauty in the form of oil paintings by Charles H. Cecil. My mom's been wielding the paintbrush for a solid 23 years, so when we visited museums, we'd often get lost in admiration for classical oil paintings, marveling at the detail and technique behind them. I stumbled upon Cecil's work on Instagram and was blown away by how he preserves that classical style. The fact that he's still teaching in Florence, Italy is pure artistic magic. Dreaming of the day I can snag some classes for my mom and paint alongside her.`,
        `<a href="https://www.safeyahaljabouri.co.uk/" target="_blank"><b>Safeyah Aljabouri - Oil Paint</b></a><br><i>Style: Modern oil painting with a focus on palette blending and color theory.</i><br>`,
        `Switching gears to modern vibes with Safeyah Aljabouri, an immensely talented oil painter. Her style? A bit more modern, with a spotlight on palette blending and color theory. Her Instagram is a treasure trove of insights. She delves into the importance of different techniques, making the world of oil painting more instructive and, honestly, more enjoyable. My favorite? When she paints the same piece with different paint counts, she showcases how each added color brings new depth. Who knew you don’t need a gazillion colors for stunning artwork? I love her unique take on the oil painting scene.`,
        `<a href="https://nehaassar.com/" target="_blank"><b>Neha Assar Panchal - Henna</b></a><br><i>Style: Specializes in intricate henna designs with a focus on storytelling.</i><br>`,
        `Art knows no bounds, right? Neha Assar Panchal proves that with her intricate henna designs. Primarily for brides, she weaves stories through her detailed designs. But here’s the kicker – she takes those skills and brings henna to shoes and glasses, turning them into canvases of their own. The level of detail and uniqueness she brings to each henna design is simply mind-blowing. Artistry, knows how to tell a story, especially in the hands of Neha.`]}
      />

    </ThemeProvider>
  )
}

export default ArtTopArtists
