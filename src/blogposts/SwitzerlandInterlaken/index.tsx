import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../../utils/theme'
import StandardBlogPost from '../../blogposts/StandardBlogPost'

import Interlaken from '../../assets/images/blog_posts/switzerland/interlaken.jpeg';
import Interlaken2 from '../../assets/images/blog_posts/switzerland/interlaken2.jpg';

import Travel_Icon from '../../assets/images/icons/travel_icon.png';

const SwitzerlandInterlaken = () => {

  return (
    <ThemeProvider theme={theme}>
      <StandardBlogPost
        image={Interlaken2}
        alt="Anjali and her paragliding instructor in the air with the city of Interlaken below them."
        image2={Interlaken}
        alt2="Colorful kayaks in the emerald colored Lake Brienz."
        icon={Travel_Icon}
        alticon="A plane icon"
        title="Interlaken, Switzerland - A Thrilling Adventure"
        subtitle={`Interlaken is known for its classic Switzerland beauty. It is sandwiched between two gorgeous emerald lakes allowing for all sorts of exciting adventures. I partook in Paragliding and kayaking during my visit here.`}
        paras={[`Two hours away from Gstaad via train, we arrived in the picturesque town of Interlaken, known for its ethereal beauty. Nestled between two enchanting lakes, Lake Thun and Lake Brienz, the town is surrounded by majestic mountains, dense forests, alpine meadows, and glaciers, offering numerous hiking and skiing trails to enjoy.`,
          `Upon arrival, we quickly dropped off our luggage at our Airbnb near the Interlaken West train station and headed straight for a paragliding adventure with <b>Paragliding Interlaken</b>. The company provided excellent service, picking us up from the train station and driving us to their main building in the center of Interlaken, close to the landing zone.`,
          `The thrilling adventure began with a van ride up the mountain, taking around 20 minutes to reach the cliff from which we would take off. I must admit that, before meeting my boyfriend, I wasn't particularly adventurous, but he has shown me the wonders of letting go of my fears and embracing the world of excitement. Since then, we've been ziplining, snorkeling, and kayaking together. Paragliding was a new experience for me, but I found it surprisingly accessible to almost anyone. It's essential to wear hiking boots with good traction as you'll be running off a cliff, but don't worry if you don't have them; you can rent them from the company.`,
          `Once strapped into the harness on top of the cliff, you'll be paired with an experienced and friendly pilot for a tandem jump. I informed my pilot about my previous knee surgery, and he assured me of a gentle landing.`,
          `Taking small steps off the cliff, we slowly lifted into the air. From the top, I had a breathtaking bird's eye view of the entire town, including the majestic Interlaken region and Jungfrau Mountain. We opted for the double airtime package, which utilizes thermals to climb higher into the sky, extending the duration of the adventure—a possibility only during the summertime. If you're prone to motion sickness, consider taking Dramamine, as the sensation of riding the thermals can be similar to sea travel. My considerate pilot noticed my slight nausea and promptly began our descent. Throughout the flight, the company captures videos and photos using a GoPro, ensuring unforgettable memories.`,
          `An interesting aspect of the experience is the landing, which takes place in a field right in the middle of Interlaken, making it incredibly convenient to continue with your day or embark on the next adventure. There are plenty of food options nearby, but instead, we were off to our next thrill!`,
          `To make the most of our one day in Interlaken, we also booked a kayaking tour with <b>Hightide Kayak School</b> on Lake Brienz. We opted for the Summer Kayaking tour, starting from the beach and Hightide base in Bönigen. Paddling to the north shore, we discovered beautiful cliffs, the 12th-century Ringgenberg castle, and hidden beaches along the lake before crossing the lake and the river of the Lütschine.`,
          `For the kayaking tour, I recommend bringing sandals, a water bottle, a hat, sunscreen, and sunglasses. We ended up removing our hiking boots early and going barefoot, which made it a bit tricky when visiting the Ringgenberg castle, reachable by walking up a paved path that can be quite hot on a summer day. Despite that, we had a fantastic time. The turquoise water of Lake Brienz was breathtaking and refreshingly clean enough to drink, being composed of water melted off the mountains.`,
          `Our tour guide was lovely, providing us with valuable tips to enhance our kayaking experience and sharing some fascinating history about the area. Overall, I would say Hightide Kayak School is more of an educational experience than a traditional organized tour. The kayaking adventure lasted about 2.5 hours, leaving us with unforgettable memories.`,
          `After both adventures, we returned to our Airbnb, quite tired and eager for a delicious meal. Both my boyfriend and I were craving authentic Napoli-style pizza to end the day. We headed to <b>Il Buongustaio</b>, which serves mouthwatering Italian pizza. I ordered the Pizza Italia, topped with tomato sauce, Bufala DOC, cherry tomatoes, and fresh basil—it was undoubtedly the best pizza of our trip! To satisfy our sweet tooth, we decided to visit <b>Funky Chocolate</b>. We indulged in fresh chocolate-covered strawberries, where warm melted milk chocolate beautifully covered fresh strawberries, providing a delightful finale to our day.`,
          `Interlaken's beauty was absolutely mesmerizing. While I wouldn't recommend doing both kayaking and paragliding in a single day, our time constraints led us to make the most of our visit. If possible, I recommend staying in Interlaken for at least 2 to 3 days to explore all the attractions and soak in the stunning views fully. It's a destination that deserves to be savored and appreciated.`
        ]}
        steps={[`Breakfast at Mohler`,
          `Paraglide with Paragliding Interlaken`,
          `Pick up some quick eats at Des Alpes Creperie`,
          `Kayak Lake Brienz with Hightide Kaying School`,
          `Enjoy pizza at Il Buongustaio`,
          `Satisfy those chocolate desires at Funky Chocolate`
        ]}
      />

    </ThemeProvider>
  )
}

export default SwitzerlandInterlaken
