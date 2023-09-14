import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../../utils/theme'
import StandardBlogPost from '../../blogposts/StandardBlogPost'

import Switzerland_Overview from '../../assets/images/blog_posts/switzerland/swiss-overview.jpg';
import Switzerland_Overview2 from '../../assets/images/blog_posts/switzerland/swiss-overview2.jpg';

import Travel_Icon from '../../assets/images/icons/travel_icon.png';

interface Props {
}


const SwitzerlandOverview = (props: Props) => {

  return (
    <ThemeProvider theme={theme}>
      <StandardBlogPost
        image={Switzerland_Overview}
        alt="Scenic view of Interlaken. A river running through the center of two buildings."
        image2={Switzerland_Overview2}
        alt2="Anjali sitting on a green hill in Grindelwald with the Swiss mountains in the background. "
        icon={Travel_Icon}
        alticon="A plane icon"
        title="A Tour of Switzerland - 9 Day Trip"
        subtitle={`An overview of my 9 Day adventure to Switzerland. I explore Geneva, Gstaad, Interlaken, Jungfraujoch, Bern, Grindelwald, and Zurich.`}
        paras={[`Switzerland has always held a place in my heart as an absolute dream destination. Its natural beauty and iconic vistas have never failed to leave me in awe. As a graduation gift, my parents encouraged me to embark on this transformative journey. The challenge was to design an affordable yet unforgettable trip to Switzerland.`,
          `The answer to whether it is possible to plan an affordable trip to Switzerland lies in your hands. Undoubtedly, it is one of the more expensive places I have traveled to, but I firmly believe that the beauty and experiences it offers make it well worth the investment.`,
          `My boyfriend and I meticulously planned our trip, identifying key strategies to keep our expenses in check. Opting for flights to Geneva, which were more budget-friendly compared to Zurich, proved to be a wise decision. Once there, we seamlessly navigated through the country using the Swiss Pass, a true savior that allowed us to explore captivating cities almost daily. I highly recommend it, and you can find more information in my <a target="_blank" href="https://www.google.com"> blog post</a>.`,
          `Geneva welcomed us with an unmistakable air of French culture. Its resemblance to Turin and Genoa was undeniable. Eager to savor the essence of Switzerland, we ventured into Le Gruyerien for our first fondue experience. If you wish to delve into the delectable details, visit my <a target="_blank" href="https://thevegetariancowgirl.com/switzerland/geneva">blog post</a> for an elaborate review. The flavors were exquisite, and the hospitality of the restaurant's owner was simply charming.`,
          `The following day, we embarked on a train journey to Gstaad, an upscale ski town nestled in the Bernese Oberland region of the Swiss Alps. The picturesque mountains and the tranquil ambiance made it feel like a scene from a movie. A delightful hot chocolate at Charly's set the mood for a memorable hike and fondue experience in the heart of the Swiss Alps. Gstaad's reputation for fondue was well-deserved, and the prepacked backpacks containing all the necessary tools added to the charm. Wooden caquelons scattered around the town provided a cozy spot to enjoy fondue while beholding breathtaking views. My <a target="_blank" href="https://thevegetariancowgirl.com/switzerland/gstaad">blog post</a> reveals all the intriguing details of this adventure, along with my fondue reviews.`,
          `Next on our itinerary was Interlaken, situated between the stunning emerald lakes of Thun and Brienz. Its natural beauty inspired us to have our most adventurous day of the trip, as we indulged in paragliding to soak in the awe-inspiring alpine views and kayaking on Lake Brienz. Both experiences, while somewhat extravagant, were worth it, and I enthusiastically recommend the companies we chose. For more details, check out my <a target="_blank" href="https://thevegetariancowgirl.com/switzerland/interlaken">blog post</a>, where I share our favorite parts of Interlaken.`,
          `Our next stop on our Swiss trip was Jungfraujoch. Jungfraujoch is the highest train station in Europe. It is surrounded by glaciers and eternal snow. It is known for its fantastic panoramic views. It is nicknamed Top of Europe, with an elevation of 11,371 ft. Jungfraujoch is only accessible via a Gondola ride or train. Once arriving there all of the attractions are accessible through tunnels in the mountains. Junfraujoch has everything from fun outdoor activities to an ice palace. The entire place takes about a day to cover. Check out my <a target="_blank" href="https://thevegetariancowgirl.com/switzerland/jungfraujoch">blog post</a> for some tips on how to get there along with my favorite attractions to visit.`,
          `In need of a relaxing day to unwind, we headed to Bern, the capital city of Switzerland, which boasts medieval architecture dating back to the 12th century. This historical gem allowed us to delve into Switzerland's rich past, paying homage to Albert Einstein and exploring its wonderful museums. To complete the day, we enjoyed the rejuvenating Hammam & Spa Oktogon, housed in an octagonal building from the 19th century. You can find my full review of Bern's attractions in my <a target="_blank" href="https://thevegetariancowgirl.com/switzerland/bern">blog post</a>.`,
          `We embarked on a day trip to Grindelwald on our second day in Bern, a charming village in the Bernese Alps and a popular gateway to the Jungfrau region. Grindelwald offered a delightful mix of winter skiing and summer hiking, with thrilling activities like zip lining and captivating hikes to the First Cliff, adorned with striking waterfalls and limestone walls. While commercialized, Grindelwald's charm and majestic views were undeniable. My <a target="_blank" href="https://thevegetariancowgirl.com/switzerland/grindelwald">blog post</a> shares more details about our visit and how to get there.`,
          `Upon reaching Zurich, our focus shifted to gathering souvenirs for family and friends. Our haul included a lovely traditional Swiss caquelon from Globus and an assortment of delectable chocolates from Max Chocolatier. The highlight of the day was a visit to the Lindt Chocolate factory, where we indulged in a chocolate paradise. Unfortunately, I caught a cold at this point, leading us to adjust our plans, but we still enjoyed exploring the city. My <a target="_blank" href="https://thevegetariancowgirl.com/switzerland/zurich">blog post</a> provides insights into my favorite spots in Zurich.`,
          `Our final day of the trip brought us back to Geneva, where we took the time to relax and soak in the city before departing the next day. We visited the Red Cross museum and returned to the fondue spot that marked the beginning of our Swiss adventure.`,
          `Our Swiss trip presented us with numerous highlights and valuable lessons in budgeting, identifying worthwhile attractions, and discovering the best food spots. The awe-inspiring views continue to leave me in wonder, and I can't help but wish we had more time to explore Zermatt and Lucerne, known for their stunning natural beauty. This journey marked a significant milestone, my first international trip without family, and allowed me to grow and learn to plan an adventure of a lifetime on my own. I invite you to explore my various blog posts for an in-depth review of each city, complete with food and activity recommendations. Additionally, for a more immersive experience, you can visit my <a target="_blank" href="https://www.youtube.com/@thevegetariancowgirl">YouTube channel</a>, featuring daily vlogs of our captivating journey.`
        ]}
        steps={[`Geneva`,
          `Gstaad`,
          `Interlaken`,
          `Jungfraujoch`,
          `Bern`,
          `Grindelwald`,
          `Zurich`,
        ]}
      />

    </ThemeProvider>
  )
}

export default SwitzerlandOverview
