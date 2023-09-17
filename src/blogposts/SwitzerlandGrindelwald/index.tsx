import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../../utils/theme'
import StandardBlogPost from '../../blogposts/StandardBlogPost'

import Grindelwald from '../../assets/images/blog_posts/switzerland/grindelwald.jpg';
import Grindelwald2 from '../../assets/images/blog_posts/switzerland/grindelwald2.jpg';

import Travel_Icon from '../../assets/images/icons/travel_icon.png';

const SwitzerlandGrindelwald = () => {

  return (
    <ThemeProvider theme={theme}>
      <StandardBlogPost
        image={Grindelwald}
        alt="Anjali at the First Cliff photo point with mountains and green hills in the background."
        image2={Grindelwald2}
        alt2="Anjali sitting on a green hill with the Swiss mountain in the background."
        icon={Travel_Icon}
        alticon="A plane icon"
        title="Grindelwald, Switzerland - Captivating Views, Adventure Fever"
        subtitle={`Our trip had 2 days in Bern, so we decided to make a day trip to Grindelwald to soak in Switzerland's gorgeous outdoor beauty.`}
        paras={[`On our second day in Bern, we decided to take a day trip to Grindelwald. Before heading to the train station, we stopped by <b>Adrianos Bar and Cafe</b> for a quick breakfast. I ordered the Moca, a double espresso shot with Chocolat Marta. It was deliciously robust and invigorating. Additionally, we savored some pain au chocolat that were simply delightful. The croissant had a perfectly flaky and buttery texture.`,
          `Following our scrumptious breakfast in Bern, we made our way to the train station to embark on our journey to Grindelwald. Nestled in Switzerland’s Bernese Alps, Grindelwald is a charming village known as a popular gateway to the Jungfrau Region, offering skiing in winter and hiking in summer. It also serves as a base for mountaineering ascents up the iconic north face of Eiger Mountain. Grindelwald's allure lies in its dramatic beauty, characterized by waterfalls and striated limestone walls.`,
          `We took a train and gondola ride from Schreckfeld to reach First. At First, we embarked on the First Cliff Walk, a renowned mountain attraction. This unique experience features a metal walkway and a single-rope hanging bridge, extending along the cliff of the First Mountain at an elevation of 7,112 feet. Alongside the cliffside catwalk, there's a viewing platform offering unparalleled vistas of the alpine landscapes and snow-capped peaks of the Bernese Oberland region. The entire walk, including the queue time for photographs at the viewing platform, typically takes around 30 to 40 minutes.`,
          `Concluding the walk, you'll find a restaurant where you can grab a quick bite to eat. Be aware that the prices resemble those at restaurants in Jungfraujoch. However, the quality of the food doesn't match the steep prices. Looking back, I would recommend bringing along a sandwich or snack to enjoy amidst the mountains. We opted for some fries and hot chocolate, which unfortunately fell below expectations. It's important to note that vegetarian options are limited.`,
          `Having concluded our main attraction for the day, we were ready for a thrilling adventure. First offers several exciting activities to choose from. You can soar above the mountains with the First Flyer or First Glider, or race downhill on a Mountain Cart or Trottbike Scooter. We decided to experience the First Glider, essentially ziplining in a Superman pose across the mountains using a bird-like contraption. You can watch our exhilarating glide through the alpine terrain on our YouTube video. As someone who had only ziplined once before, I found this to be even more straightforward, and the glider moves at a comfortably slow pace, making it a more relaxed option compared to other attractions.`,
          `However, the extended waiting times for the attractions were my only letdown. We waited for an hour and a half to experience the First Glider, and some of the other attractions had wait times exceeding two hours. Be prepared to spend a significant amount of time in line, despite the worthwhile experiences. If you're planning a day trip, you might only have the opportunity to enjoy 1-2 attractions.`,
          `Although we had intentions of embarking on the Bachalpsee hike and the Flower Trail, time unfortunately got the best of us. The Bachalpsee hike takes approximately 1 hour each way without stops. This hike leads you to Lake Bachalp, a picturesque mountain lake in Switzerland. To accommodate a hike in your itinerary, consider arriving at First early in the day.`,
          `For those visiting in summer, it's advisable to bring a lightweight jacket and dress in layers. The higher altitude of the mountains can bring about chilly temperatures. Additionally, the First Glider generates a brisk breeze as you glide through the mountainous landscape. Comfortable athletic shoes or hiking boots are also recommended, as some paths consist of dirt trails and traction is essential.`,
          `After a delightful day trip to Grindelwald, we retraced our steps via the gondola back to Bern. The journey offered stunning views through expansive windows. Once again, we visited <b>Luce</b> to savor some authentic Italian pasta before retiring to our cozy Airbnb for a peaceful night's sleep. I enthusiastically recommend including Grindelwald in your Switzerland travel itinerary.`
        ]}
        steps={[`Visit Adrianos Bar and Cafe in Bern for your morning coffee fix`,
          `Take the train and gondola to First`,
          `Embark on the First Cliff walk and soak in the gorgeous views`,
          `Soar on the First Glider through the mountains `,
          `Hike the Bachalpsee Trail and visit a gorgeous mountainside lake`
        ]}
      />

    </ThemeProvider>
  )
}

export default SwitzerlandGrindelwald
