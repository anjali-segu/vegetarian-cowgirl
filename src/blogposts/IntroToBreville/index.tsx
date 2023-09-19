import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../../utils/theme'
import StandardBlogPost from '../StandardBlogPost'

import Latte_Blog_Square from '../../assets/images/blog_posts/latte_blog_square.jpg';
import Latte_Blog_Square_2 from '../../assets/images/blog_posts/latte2_blog_square.jpg';

import Drinks_Icon from '../../assets/images/icons/drinks_icon.png';

const IntroToBreville = () => {

  return (
    <ThemeProvider theme={theme}>
      <StandardBlogPost
        image={Latte_Blog_Square}
        alt="A latte with a foam white heart"
        image2={Latte_Blog_Square_2}
        alt2="A latte with a flower made from foam"
        icon={Drinks_Icon}
        alticon="A coffee mug and martini glass."
        title="Intro to Breville Espresso Machine"
        subtitle={`Learn how to pull espresso shots in the Breville Espresso Machine.`}
        paras={
          [
            `I am a coffee fanatic, possibly a coffee addict. This adoration for coffee led me down a dark hole in espresso machine exploration. Why is it a dark hole? So many options and possibilities can make it a bit overwhelming!`,
            `I ended up purchasing the Breville espresso machine, and I can say confidently that I made the right decision. The model I own is the <b>Barista Express</b>. <i>Pro tip: Purchase your machine at Bed Bath & Beyond and use a 20% off coupon.</i>`,
            `So began my espresso machine journey. I descended into YouTube's Breville Espresso Machine suggestions and tried to educate myself as much as possible. I quickly learned that there are some basics across all drinks. The main factors that lead to creating the smoothest espresso are bean freshness, bean roast type, grind size, weight, and pressure.`,
            `Not all beans equal. Let's talk about bean freshness. The type of beans you put into the machine can have a huge impact on the flavor of the espresso. Ensure that the roast date of your beans is at most 2 months ago. This will ensure that the latte art sticks and won't lead to a burnt taste in your coffee. In addition, I typically look for light roast beans or light-medium roast beans. Anything darker can also lead to a burnt taste.`,
            `Grind size is the next factor. On my machine, I have set my grind size to 4. Grind size deals with the fineness of the beans. Depending on how fine you set the grind size, it leads to needing more tamping pressure to ensure a smooth, frothy espresso. Feel free to experiment with the grind size.`,
            `With the beans that I typically use, I normally weigh out 21 grams into the portafilter for a double shot. You might need to play around a little with this number until you find your sweet spot. I would suggest the TIMEMORE Coffee Scale, Espresso Scale, and Weigh Digital Coffee Scale with Timer, 2000 Grams. It is available on Amazon.`,
            `The final step before attaching the portafilter is to tamp it. The trick with this step is to apply even pressure. You want to compress the beans a fair amount and then twist the tamp so the grinds are level. This is also a step you will need to play around with before finding your sweet spot as to how much pressure is enough.`,
            `Finally, you will attach the portafilter to the machine and hit the button! This is where you get to see your hard work pay off. I'm not going to lie, the first few, possibly 10 shots of espresso will not be what you want. You will know if you figured it out by the orange-amber crema that will sit on top of the golden dark brown espresso. If no crema shows up, that typically means that there wasn't enough pressure. If the espresso comes out too quickly from the spout, that also means there wasn't enough pressure or enough grinds. Be patient, and practice leads to perfection!`,
            `Once you have mastered pulling shots, now comes steaming the milk. Don't stress yourself out with latte art in the beginning. Focus on steaming and frothing the milk to satisfy your drink's needs. I'm not going to go into great detail in this blog post because there are a lot of amazing resources online already that do a great job of explaining how to utilize the Steam wand. It does take practice, but it'll lead to perfectly textured milk for your coffee desires.`,
            `I love the Breville Espresso Machine! It has led to delicious coffee drinks and has been a great purchase in my household. I rarely go out for coffee anymore because I can make high-quality drinks right at home. I also personally love the mug warmer at the top of the machine that keeps the mugs nice and toasty. My favorite place in Austin to buy top-notch beans is Greater Goods in East Austin. While you are there, be sure to try the Bourbon Latte!`,
            `Key takeaways time! Be patient. It takes time to pull great shots. Trust me, I binned a lot of my first shots before getting good at it. Invest in good beans. It makes all the difference! And finally, educate yourself. This blog post is a great intro to how to approach espresso, but there are a lot of even more technical posts out there that go into even more detail about the science of espresso. Take some time to read and watch some content. It'll help you gauge if you are on the right path and how to troubleshoot along the way.`
          ]
        }
        steps={[`Head to Bed Bath & Beyond and purchase the espresso machine.`,
          `Get some fresh beans from Greater Goods in East Austin.`,
          `Swing by Whole Foods to get some milk for practicing steaming.`,
        ]}

      />
    </ThemeProvider>
  )
}

export default IntroToBreville
