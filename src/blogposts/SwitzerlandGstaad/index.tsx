import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../../utils/theme'
import StandardBlogPost from '../../blogposts/StandardBlogPost'

import Gstaad from '../../assets/images/blog_posts/switzerland/gstaad.jpg';
import Gstaad2 from '../../assets/images/blog_posts/switzerland/gstaad2.jpg';

import Travel_Icon from '../../assets/images/icons/travel_icon.png';

interface Props {
}


const SwitzerlandGstaad = (props: Props) => {

  return (
    <ThemeProvider theme={theme}>
      <StandardBlogPost
        image={Gstaad}
        alt="Anjali sitting in a giant wooden caquelon with the Swiss mountains in the background. "
        image2={Gstaad2}
        alt2="Anjali walking through the main town in Gstaad. There are wooden buildings on both sides of her."
        icon={Travel_Icon}
        alticon="A plane icon"
        title="Gstaad, Switzerland - Fondueland, Breathtaking Hikes"
        subtitle={`Gstaad quickly became one of my favorite moments of the entire trip. The views are spectacular and magical. The fondue was absolutely delicious.`}
        paras={[`After spending our first day in a more urban part of Switzerland, we were eager to immerse ourselves in the natural beauty of Gstaad. We took the train from Geneva to Gstaad after enjoying a delightful breakfast at <b>Tres Alp'ain</b>. Although we initially planned to visit Birdie Food and Coffee, we were disappointed to find them closed during our intended visit.`,
        `At Tres Alp'ain, we ordered some vegetable quiches, a raspberry custard tart, and a mille feuille. All of the items were scrumptious and freshly made. The tarts had just been pulled out of the kitchen before arriving at our table. The staff spoke little to no English, but we managed to communicate our preferences by pointing to the items on display.`,
        `The train ride from Geneva to Gstaad took three hours, but the breathtaking alpine views made it feel much shorter. The last connecting train to Gstaad is renowned for its panoramic views, so try to find a seat that allows you to enjoy the stunning scenery on both sides of the aisle.`,
        `Upon arriving in Gstaad, our Airbnb host pleasantly surprised us by offering a ride to our accommodation from the train station. I cannot recommend this Airbnb enough. The hosts were incredibly friendly, the stay was clean and comfortable, and to top it all off, the place offered a wonderful view. Perched atop a hill, we had a panoramic view of the rolling hills of Switzerland dotted with charming alpine cabins, all set against a backdrop of majestic snow-capped mountains. As an added bonus, our hosts had an adorable cat and dog!`,
        `After settling in, our host kindly offered to take us back into town to begin our day of adventures. As we explored, we were in awe of Gstaad's picturesque Swiss countryside. The town's center exudes a charming and cozy vibe with its collection of quaint little shops and restaurants, all boasting a wooden cabin aesthetic. Gstaad truly feels like a charming ski town, with its houses throughout the area following the same rustic and inviting style.`,
        `One highlight of our visit was a stop at <b>Charly's</b> to savor some hot chocolate. The waitress confidently claimed they had the best hot chocolate in Switzerland, and I must agree. Sweeter than the one we had in Geneva, their hot chocolate was still not overly sweet. It came topped with a generous amount of delicious whipped cream and a cute chocolate button. The warm and cozy interior of the restaurant matched the overall alpine cabin atmosphere. Charly's also offered a variety of food options, such as sandwiches and pastries, although we chose to save room for our next adventure: the fondue hike.`,
        `Before embarking on the hike, we stopped by <b>Molkerei Gstaad</b>, a dairy store that sells fondue backpacks. These backpacks contain everything needed for a delightful fondue experience - fondue mix, utensils, a stirring spatula, plates, bread, caquelon, and a burner - all pre-packed and ready to go. After prebooking online, we were pleased to receive a bonus free piece of cheese per person using the Gstaad card provided by our Airbnb host.`,
        `Our host shared their favorite fondue hike in the area, which took place in Wispile, Gstaad. The hike leads you through fields and forests, eventually leading to Lauenesee Lake where you could enjoy a picnic and swim. Sadly, the hike was closed during our visit, but I highly recommend it, especially in early summer and spring when the hillside is adorned with wildflowers, creating a truly scenic experience. Instead, we opted for the <b>Schlittmoosstrasse hike</b>, a 15-minute walk from the center of the village of Schönried. The trail, though simple and paved for the most part, had a slight increase in elevation towards the end, which necessitated proper footwear for traction, such as tennis shoes or hiking boots.`,
        `At the end of the hike, we reached a beautiful hill with a large wooden fondue caquelon booth, providing seating for up to 8 people. However, since it's first-come-first-served, we had to wait for about an hour while the party before us finished their meal. While waiting, we enjoyed the stunning view of the green grass and majestic mountains in the background, using an umbrella to create some shade in the warm weather. There are several benches nearby to sit and wait. `,
        `Finally, it was our turn to savor the delicious fondue. We chose the truffle fondue and gave the cheese pieces to our Airbnb host since we were traveling the next day. Within 10 minutes, we set up the fondue pot and started indulging in this exquisite treat. The fondue came with a bottle of spices that added an extra punch of flavor, making it my absolute favorite fondue of the entire trip. The soft and pillowy bread paired perfectly with the smooth truffle fondue. We easily cleaned out the pot between the two of us.`,
        `After finishing our fondue feast, we covered the wooden caquelon with the provided tarp to protect it from the elements and headed back to the Airbnb for a restful sleep. The following morning, we woke up around 5 am and decided to catch the sunrise on our way to the train station. This spontaneous decision turned out to be one of the most memorable moments of our trip. The sky adorned with hues of pink and orange, the cool and crisp air, and the soothing sounds of chirping birds in the background—all surrounded by the beauty of the Swiss alps—I wished we could stay a few more days to bask in this breathtaking scenery`,
        `We had breakfast at <b>Early Beck</b> which opens early every day making it very convenient. We ordered the chocolate croissant and some hot chocolate. The hot chocolate was made from a packet so I wouldn't recommend it but the chocolate croissant was tasty! Gstaad truly captivated our hearts with its natural charm, and I hope to return one day to explore more of its wonders and create more unforgettable memories.`
        ]}
        steps={[`Have breakfast at Early Beck`,
        `Walk and shop around the town in Gstaad`,
        `Visit Charly's for exceptional hot chocolate and lunch`,
        `Pick up your fondue backpack from Molkerei Gstaad`,
        `Take the scenic hike in Wispile and enjoy your truffle fondue`
        ]}
      />

    </ThemeProvider>
  )
}

export default SwitzerlandGstaad
