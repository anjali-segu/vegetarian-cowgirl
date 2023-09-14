import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../../utils/theme'
import StandardBlogPost from '../../blogposts/StandardBlogPost'

import Zurich from '../../assets/images/blog_posts/switzerland/zurich.jpg';
import Zurich2 from '../../assets/images/blog_posts/switzerland/zurich2.jpg';

import Travel_Icon from '../../assets/images/icons/travel_icon.png';

interface Props {
}


const SwitzerlandZurich = (props: Props) => {

  return (
    <ThemeProvider theme={theme}>
      <StandardBlogPost
        image={Zurich}
        alt=""
        image2={Zurich2}
        alt2=""
        icon={Travel_Icon}
        alticon="A plane icon"
        title="Zurich, Switzerland - Souvenirs & Chocolate Dreams"
        subtitle={`Our trip to Zurich was filled with shopping for gifts with friends and family. We were surprised with a delicious chocolate tasting along the way. `}
        paras={[`Our final day in Switzerland was spent in Zurich, the country's largest city. Zurich boasts a wealth of museums and art galleries, including the Swiss National Museum and Kunsthaus. Additionally, it serves as a major hub for the financial and banking sector.`,
          `Unfortunately, at this point in our trip, I had caught a cold, which imposed some limitations on our plans. Our primary goal for the day was to purchase gifts for our family and friends back in Texas.`,
          `Our day began at <b>Max Chocolatier</b>, a delightful chocolate shop located in the heart of Switzerland. Max Chocolatier specializes in crafting unique and handmade chocolate delicacies using 100% natural ingredients and the finest cocoa beans. Marlene (@fiorema5), who worked at the store, warmly welcomed us and guided us through their offerings.`,
          `We kicked off our visit with a chocolate tasting session. Marlene generously provided us with samples of their various chocolate bars, each accompanied by a fascinating story. Our tasting journey began with the Maracaibo Créole (49%), a milk chocolate from Sur del Lago Venezuela, boasting smooth caramel and nutty notes with a creamy finish. We continued to sample several more, with personal favorites being Virunga, Arhuaco, and Créole. Remarkably, at Max Chocolatier, I could distinctly taste the different notes and flavors in each chocolate bar, unlike previous tastings I had experienced. These chocolates offered a truly unique and diverse flavor experience.`,
          `As an avid hot chocolate enthusiast, I inquired if they served hot chocolate in the store. Marlene informed me that it wasn't a standard offering but graciously made an exception for me. She prepared a delicious hot chocolate from scratch using the high-quality chocolate from the store. It was an indulgent treat, and I wholeheartedly recommend a visit to Max Chocolatier. Marlene's kindness and expertise helped us select delectable chocolates to bring home, and the quality of the chocolate was simply outstanding, melting in your mouth with every bite.`,
          `Subsequently, we continued our gift shopping at <b>Globus</b>, a Swiss luxury department store akin to the US's Crate & Barrel. Here, we found a charming caquelon with a picturesque alpine design on the exterior, making it an ideal gift for my boyfriend's family to enjoy fondue at home. Fondue had been a delightful part of our Switzerland trip, and we wanted to recreate the experience in Texas. Pro tip: Register an account with Globus to receive an extra 10% discount on your purchases.`,
          `Next on our list was a visit to <b>Victorinox</b> to procure a Swiss Army Knife for my boyfriend's brother. The store offered an impressive array of Swiss Army knives, making it easy to find the perfect fit for anyone. We also picked up a handy keychain nail clipper for my dad. If you can't find the ideal knife, you even have the option to create a custom one with specific components and colors. We opted for the Climber version, tailored to my boyfriend's brother's passion for rock climbing.`,
          `Our next destination was the <b>Lindt Chocolate factory</b> tour, a 15-minute train ride from Zurich's city center. Trains to the factory ran frequently, and after arriving at the nearest train stop, a 10-minute walk brought us to the factory. The factory was the primary attraction in the area, with not much else around.`,
          `We had pre-booked our tickets and received a designated time slot for our visit. Upon entering the factory's lobby, we were greeted by an impressive chocolate fountain art display. To the right, a station offered personal speakers for listening to the various exhibits in multiple languages. Climbing the stairs, we entered a cacao forest, where the first exhibit explained the journey from cocoa bean to chocolate bar, highlighting Lindt's sources for its cocoa beans. The following exhibit delved into Lindt's history and Swiss origins. The final exhibit detailed the chocolate-making process in the factory, discussing the distinctions between white, milk, and dark chocolates and how various candies were produced. Unfortunately, the exhibits primarily relied on diagrams and photos, with no real-life view of the factory's operations.`,
          `The highlight of the factory tour was the abundance of tasting opportunities. There was a liquid chocolate dispenser distinguishing between white, milk, and dark chocolate, with spoons provided for sampling. Guests could enjoy unlimited samples. Another display shot out samples of different dark chocolate bars. Finally, before exiting the exhibition, visitors were allowed to select one truffle from each of the 10-15 different truffle buckets. In total, the amount of chocolate you could sample was equivalent to a Lindt chocolate truffle bag available for purchase in stores. The tour was reasonably priced at 15 francs per person, providing excellent value for chocolate lovers.`,
          `Personally, I didn't find the factory tour overly exciting. Its remote location made it somewhat challenging to reach, and the factory was bustling with visitors, creating a noisy and busy atmosphere. While the exhibits were somewhat interesting, they relied heavily on photos and diagrams, lacking a glimpse of the actual chocolate-making process in action. I had anticipated a tour of the operational factory, rather than an exhibition outlining the process. I believe the tour would be most enjoyable for families with young children, those unfamiliar with chocolate production, or die-hard Lindt fans. After our delightful experience at Max Chocolatier, I found myself a bit "chocolated-out" at the Lindt factory.`,
          `Returning to the heart of Zurich, we decided to order takeout and enjoy it at our Airbnb since I was feeling under the weather. I had a craving for Indian food, so we ordered from <b>Thali Indian Restaurant</b>. I opted for Paneer Makhani and Raita, both of which were delicious. I was pleasantly surprised that the food tasted authentic, as my previous experiences with Indian cuisine in Europe had left me longing for the flavors of the US.`,
          `Due to my illness, we couldn't explore all the places we had initially planned to visit in Zurich. I'll mention a few that I had hoped to experience but couldn't: the <b>Grossmünster</b>, an iconic twin-towered Romanesque cathedral; a dip in <b>Lake Zurich</b>, perfect given the ideal weather; a visit to <b>Frauenbad Stadthausquai</b>, an outdoor swimming pool in the river near our Airbnb; and a trip to the <b>Swiss National Museum</b>, offering intriguing insights into Switzerland's history. On the culinary front, I had wanted to try fondue and raclette at <b>Swiss Chuchi</b>, particularly the Hausgemachte Raclette-Rösti and Fondue mit schwarzem Trüffel, which looked especially enticing. <b>Pizzeria Margherí</b>, with its tempting Napoli-style pizza, was also on my list. While I couldn't personally experience these attractions, my research suggested they could be enjoyable options for anyone visiting Zurich.`,
          `In conclusion, Zurich provided an excellent opportunity to shop for souvenirs for our loved ones. Max Chocolatier stood out as a highlight of our visit, offering exceptional chocolates and a memorable tasting experience. I would recommend dedicating a day or two to explore the highlights of Zurich fully.`
        ]}
        steps={[`Visit Max Chocolatier to fulfill your chocolate needs`,
          `Swing by Grossmünster to see a beautiful cathedral`,
          `Take a dip in Lake Zurich and Frauenbad Stadthausquai`,
          `Eat fondue and raclette at Swiss Chuchi `,
          `Visit Globus to get souvenirs for friends and family`,
          `Enjoy dinner at Pizzeria Margherí`
        ]}
      />

    </ThemeProvider>
  )
}

export default SwitzerlandZurich
