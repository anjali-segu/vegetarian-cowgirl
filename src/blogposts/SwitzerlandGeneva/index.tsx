import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../../utils/theme'
import StandardBlogPost from '../../blogposts/StandardBlogPost'

import Geneva from '../../assets/images/blog_posts/switzerland/geneva.jpg';
import Geneva2 from '../../assets/images/blog_posts/switzerland/geneva2.jpg';

import Travel_Icon from '../../assets/images/icons/travel_icon.png';

interface Props {
}


const SwitzerlandGeneva = (props: Props) => {

  return (
    <ThemeProvider theme={theme}>
      <StandardBlogPost
        image={Geneva}
        alt="Anjali eating a potato dipped in cheese fondue."
        image2={Geneva2}
        alt2="The table with a fondue caquelon, a basket of bread, and a glass of sparkling water."
        icon={Travel_Icon}
        alticon="A plane icon"
        title="Geneva - Red Cross Museum, UN, First Fondue"
        subtitle={`My trip began in Geneva Switzerland where I tried my first fondue of Switzerland and hot chocolate.`}
        paras={[`Our journey began in Geneva, Switzerland, as we found that flights from Austin to Geneva were more affordable than to Zurich. This led us to choose Geneva as the starting and ending point for our Swiss adventure.`,
        `Upon landing in Geneva, I was captivated by the city's stunning architecture. The buildings adorned with beige paint and brick, along with bursts of colors, created a picturesque scene. Our route to the Airbnb took us past the mesmerizing Lake Geneva, with its vibrant turquoise waters gracefully winding through the city.`,
        `In an effort to keep costs in check, we opted for simple Airbnbs throughout our trip. The first one, unfortunately, wasn't very memorable and was quite noisy. After a quick drop-off of our belongings, we set out on a mission to find the best hot chocolate Switzerland had to offer. After all, Switzerland is renowned for its extraordinary chocolates and top-notch dairy products.`,
        `We decided to head to <b>Chocolaterie & Pâtisserie Micheli</b>, a renowned chocolate shop located in the heart of the town. They are known for their artisanal chocolate and freshly made hot chocolate. However, upon arrival, we discovered that they were closing for the day. Fortunately, luck was on our side as <b>Bistro La Fabrique</b> was right across the street. This cozy little cafe offered hot chocolate made from Micheli's chocolate. Communication was a bit challenging as both places were more local spots, and the staff spoke limited English. However, with the help of Google Translate, we managed to get by, and the staff was kind and accommodating.`,
        `The hot chocolate at Bistro La Fabrique was unlike anything I had experienced in the US. It had little to no added sugar and tasted like pure, rich chocolate gently blended with milk. The frothed milk gave it a latte-like texture, and they provided a small biscuit and a packet of sugar on the side for individual preference. The chocolate itself had a bold, robust flavor without being bitter. Additionally, we were served water free of charge, which was quite a contrast to my previous international travels.`,
        `The city of Geneva boasts a harmonious blend of French architecture and lush greenery, with French being the predominant language spoken. After savoring our hot chocolate, we headed to dinner, deciding it was time to indulge in some authentic Swiss fondue.`,
        `My prior fondue experience had been limited to a commercialized chain in the US, the Melting Pot, so I was eager to explore the real deal. Our research led us to Le Gruyerien, a restaurant that specializes in fondue and accompaniments, with options available for vegetarians and an English menu.`,
        `We ordered the Half and Half fondue, a delightful blend of 12 Gruyères and Vacherins from Friborg AOP with varying maturities. It came with artisan bread and small potatoes on the side, along with a sizeable side salad, perfect for two. Most fondue restaurants require a minimum order of two servings, likely for economic reasons. The fondue itself was utterly delicious, and the owner graciously showed us how to expertly dip the potatoes and bread like true Swiss connoisseurs. She also shared some Swiss fondue folklore, cautioning against drinking water with fondue, as it is believed to cause indigestion and form a cheeseball in the stomach. Instead, it is recommended to enjoy wine, tea, or sparkling water with the meal. Following her advice, we opted for sparkling water and, thankfully, avoided any cheeseball-related mishaps. The fondue had a strong cheese flavor with hints of sourness and saltiness, making it incredibly addictive but quite heavy. To fully relish the quantity of fondue, I believe a third person would have been necessary.`,
        `The ambiance of the restaurant added to the experience, adorned with alpine decorations, and featuring a large cow statue outside, the interior felt like a charming Swiss cabin. During our visit at 7 pm, the restaurant was relatively empty, creating a quiet and pleasant atmosphere. Once we finished our fondue, I couldn't resist exploring the dessert menu. I opted for the chocolate fondant, accompanied by a crisp meringue and a pot of clotted cream from La Gruyere, a prominent cheese factory in Switzerland. The chocolate fondant had a gooey, warm center enveloped by a fudgy exterior, and the clotted cream complemented the chocolate perfectly. It was, without a doubt, my favorite dessert of the entire trip.`,
        `As our journey came to an end, we spent one last day in Geneva before departing early the next morning. We decided to visit the Red Cross Red Crescent Museum on our final day, but it left us somewhat underwhelmed. The cost was not covered by our Swiss pass, and despite providing headphones with automatic information playback at certain exhibits, the museum was relatively small and not particularly engaging. For these reasons, I'm not sure I would recommend it as a must-visit spot.`,
        `Our plan to visit the United Nations building was thwarted by fully booked tickets during our visit. If this is of interest to you, it is advised to book tickets well in advance, as we found that availability six months ahead was already limited.`,
        `For lunch, we dined at <b>Luigia</b>, an Italian restaurant serving Napoli-style pizza right along the shores of Lake Geneva. I ordered the Burratina, and my boyfriend opted for the Marinara pizza. Both dishes were incredibly delicious, and although it may not have been the most authentic Napoli-style pizza we encountered on the trip, they still did a commendable job. For dessert, we indulged in the creme brulee and cheesecake, with the creme brulee being the standout winner. Its luscious texture and perfectly crisped caramel top made it a delectable treat.`,
        `In conclusion, while Geneva had its charms with its unique blend of French architecture and scenic beauty, it may not be the standout destination for a short trip. I would suggest considering flying into Geneva and taking the train to explore other captivating locations within Switzerland, as there may not be an abundance of activities within the city itself. For instance, places like Birdie Food and Coffee, a charming coffee shop offering delightful vegetarian eats, and the Geneva Botanical Garden and Greenhouse, could be intriguing additions to your Swiss itinerary.`
        ]}
        steps={[`Get breakfast at Birdie Food and Coffee`,
        `Visit the United Nations Building`,
        `Grab some hot chocolate at Chocolaterie & Pâtisserie Micheli`,
        `Have pizza at Luigia`,
        `Visit Jet D'Eau and walk around Old Town Geneva`,
        `Walk through Geneva Botanical Garden and Greenhouse`,
        `Have fondue for dinner at Le Gruyerien`
        ]}
      />

    </ThemeProvider>
  )
}

export default SwitzerlandGeneva
