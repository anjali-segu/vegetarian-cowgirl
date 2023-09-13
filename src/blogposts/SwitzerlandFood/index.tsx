import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../../utils/theme'
import StandardBlogPost from '../../blogposts/StandardBlogPost'

import Switzerland_Food from '../../assets/images/blog_posts/switzerland/food.jpg';
import Switzerland_Food2 from '../../assets/images/blog_posts/switzerland/food2.jpg';

import Travel_Icon from '../../assets/images/icons/travel_icon.png';

interface Props {
}


const SwitzerlandFood = (props: Props) => {

  return (
    <ThemeProvider theme={theme}>
      <StandardBlogPost
        image={Switzerland_Food}
        alt="Anjali with a pizza in front of her. She is excited to dig in."
        image2={Switzerland_Food2}
        alt2="A truffle ravioli coated in white sauce on a patterned plated."
        icon={Travel_Icon}
        alticon="A plane icon"
        title="Switzerland Food"
        subtitle={`I am a huge foodie, so I wanted to explore a variety of food that Switzerland has to offer. I found some major hits and wanted to share them with you.`}
        paras={[`As a devoted food enthusiast, exploring culinary delights is just as essential to me while traveling as visiting the local attractions. When planning my trip to Switzerland, I meticulously researched food destinations by perusing local food blogs. I've found that veering past the first page of Google and steering clear of corporate food review websites often leads me to discover authentic local favorites. While there are instances when Google and mainstream review sites serve their purpose, my primary objective when traveling is to savor the flavors of the region, immersing myself in the city's culinary culture.`,
          `<b><u>Fondue | Gstaad</u></b>`,
          `With this mindset, I must confess that I occasionally indulged in touristy pleasures at these cherished local eateries. During our summer visit to Switzerland, a season less ideal for indulging in hearty fondue, I decided not to let the fear of appearing touristy deter me from trying this national dish. My fondest fondue memory from the trip was at Gstaad, where my boyfriend and I embarked on a unique fondue experience amidst the Swiss countryside. We opted for the truffle fondue at <b>Molkerei Gstaad</b>, and it was an absolute delight. Accompanied by crusty bread and a tantalizing spice blend, this fondue was a harmonious blend of creaminess, saltiness, and perfectly balanced truffle flavor. The bread, simultaneously fluffy and crusty, provided a superb vehicle for the fondue. However, the real star of the show was the seasoning mixture, which combined garlic powder, curry powder, thyme, basil, and more, elevating the fondue. We savored every last drop. A special mention goes to <b>Le Gruyerien</b> in Geneva, where we indulged in the half and half fondue, a delectable blend of Gruyère AOP and Vacherin Fribourgeois AOP. What stood out was the accompaniment of potatoes alongside the bread. These potatoes, fluffy and slightly sweet, complemented the salty richness of the fondue exquisitely.`,
          `<b><u>Hot Chocolate | Gstaad & Zurich</u></b>`,
          `When I say I love hot chocolate, I mean it's an obsession of mine. Regardless of the season, time of day, or temperature, I crave quality hot chocolate. It's crucial to note that hot chocolate is distinct from hot cocoa. The former comprises velvety, high-quality milk, sugar, and premium semi/bittersweet chocolate, while the latter is typically a ready-made packet mix. Given Switzerland's renowned chocolate and access to top-notch dairy products, I was overjoyed to experience some of the best hot chocolate of my life. Regrettably (or perhaps fortunately), I couldn't single out just one favorite, so I have to share two. Firstly, <b>Charly's</b> in Gstaad left me spellbound with its perfectly sweetened, rich, and bold hot chocolate, generously crowned with a sumptuous dollop of whipped cream. The confident barista claimed they served the best hot chocolate in Switzerland, and I wholeheartedly concur! My equally cherished favorite was the hot chocolate crafted by Marlene at <b>Max Chocolatier</b>. This version leaned towards the bitter side, boasting a thicker, richer chocolate essence. Adorned with a chocolate design, it was an absolute luscious treat. The use of high-quality chocolate from the store intensified its chocolatey goodness. It's worth mentioning that not all cafes offering "hot chocolate" serve the real deal. While Swiss hot cocoa surpasses its American counterparts, it still doesn't compare to genuine hot chocolate. Always ensure you're ordering a freshly made hot chocolate when perusing menus.`,
          `<b><u>Pizza | Interlaken</u></b>`,
          `Now, you might be wondering why pizza is featured on this list of Swiss culinary delights. Switzerland is home to a substantial Italian population, and Italian is one of the national languages here. Furthermore, Italy shares a border with Switzerland. My boyfriend's Italian heritage and passion for pizza led us to discover some delectable pies during our vacation. Our top pick was <b>Il Buongustaio</b> in Interlaken, renowned for its mouthwatering Neapolitan-style pizza. I opted for the Pizza Italia, crowned with tomato sauce, Bufala DOC cheese, cherry tomatoes, and fresh basil—a truly unforgettable pizza experience. My boyfriend savored the Pizza Marinara, which also left him thoroughly satisfied. The pizza's airy, crispy crust exuded a delightful yeasty flavor, the sauce was impeccably seasoned with a bright, zesty profile, and the cheese was fresh and juicy. This pizza left such an impression that I found myself craving it throughout our trip.`,
          `<b><u>Pasta | Bern</u></b>`,
          `Now, speaking of authentic Italian cuisine, let's delve into another beloved carb favorite—pasta. Our go-to Italian spot, offering the finest homemade fresh pasta, was <b>Luce</b> in Bern. I ordered the truffle cream ravioli, while my boyfriend went for the spaghetti. We ended up swapping dishes, as both were incredibly delicious and well worth a try. The pasta was cooked to al dente perfection, and the sauces were bursting with flavor. The restaurant's tranquil ambiance during our visits added to the overall pleasant dining experience. Their desserts also deserve a special mention, with the coffee crema being a must-try for coffee aficionados.`,
          `<b><u>Coffee | Bern</u></b>`,
          `In tandem with my affinity for chocolate is my deep-rooted love for coffee. Being an avid coffee connoisseur, I eagerly explored numerous coffee shops during our journey. My quest always centers on discovering unique lattes, and Switzerland did not disappoint. My top coffee pick was found at <b>Rösterei</b> in Bern, where I savored a cardamom honey latte that completely surprised me with its delightful cardamom infusion. Prior to this, I had only encountered cardamom in tea and had never contemplated pairing it with coffee. Inspired by this experience, I even created my own cardamom honey syrup at home, which I use in lattes brewed from my trusty Breville Espresso machine. Check out my <a href="http://thevegetariancowgirl.com/recipes/coffee-syrup" target="_blank">blog post</a> to make it yourself. The high-quality beans at Rösterei contributed to the exceptionally smooth and fruity coffee. One word of caution: be cautious when ordering coffee at bakeries, as I often found their brews to be subpar compared to stand-alone coffee shops.`,
          `<b><u>Bakeries</u></b>`,
          `I must admit, this section was the most challenging to select favorites because nearly every bakery we visited had something exceptional to offer. Instead of choosing a single favorite, I'll list the bakeries we patronized along with our standout selections:`,
          `<ul>
        <li>TresAlp'ain (Geneva): Veggie Quiche, Raspberry Tarte</li>
        <li>Mohler (Interlaken): Pineapple Chocolate Mousse Cake, Chocolate Croissant</li>
        <li>Adrianos Bar & Cafe (Bern): Pain Au Chocolat</li>
        <li>Confiserie Eichenberger (Bern): Chocolate Cake</li>
        </ul>`,
          `<b><u>Dessert | Geneva</u></b>`,
          `As my readers already know, I possess an insatiable sweet tooth. The dessert that lingers in my mind and stands out as my absolute favorite from the trip hails from <b>Le Gruyerien</b> in Geneva. It was a chocolate fondant accompanied by clotted cream. This dessert featured a lusciously gooey, fudgy chocolate interior that paired exquisitely with the cream. I indulged in it not once but twice, and the memory still tempts my taste buds. Despite the filling nature of Le Gruyerien's fondue, I implore you to save a little space for this dessert. Trust me, it's an indulgence that's unequivocally worth it!`,
          `<b><u>Places I Wanted to Visit but Didn't Get a Chance To</u></b>`,
          `Although we managed to explore a significant portion of the culinary gems on my list, a few food spots eluded us due to time constraints. While I can't personally vouch for their worthiness, my research indicated their strong potential.`,
          `Starting with Geneva, I had my eye on <b>Birdie Food & Coffee</b>, known for its enticing breakfast options. Specifically, I longed to sample the Birdie Brekkie and Oeufs Parfaits. Another temptation was <b>Chocolaterie & Pâtisserie Micheli</b>, where their hot chocolate beckoned me.`,
          `In Gstaad, the bakery goods at <b>Charly's</b> beckoned, but our appetites were well-sated with our chosen selections. Meanwhile, <b>Molkerei Gstaad</b> beckoned with tantalizing offerings, including delectable cheeses and pasta.`,
          `Our next stop was Interlaken, where we regretfully missed the opportunity to experience <b>Baren Unterseen</b>, an intriguing fondue spot. I had my sights set on their cheese fondue with porcini mushrooms. Additionally, the quiche at <b>Bäckerei-Konditorei Steininger</b>, a local bakery, piqued my curiosity.`,
          `In Bern, we managed to tick most items off my list, except for <b>Altes Tramdepot Brauerei</b>. This establishment specializes in authentic German cuisine, representing the city's German heritage. I had an appetite for trying their pretzel and garlic soup.`,
          `Finally, in Zurich, <b>Swiss Chuchi</b> boasted intriguing fondue and raclette options, and <b>Café & Conditorei 1842</b>, a bakery, showcased attractive desserts and chocolates. I also had a hankering to visit <b>Pizzeria Margherì</b>, known for its classic Napoli-style pizza.`,
          `<b><u>Skips</u></b>`,
          `While we discovered numerous spectacular food spots during our Swiss adventure, a few fell short of our expectations, and I'd advise skipping them if you plan to visit Switzerland. Jungfraujoch and Grindelwald, for instance, proved to be over commercialized, overpriced, and lacking in the taste department. They also lacked satisfactory vegetarian options. If your journey takes you to either of these destinations, I recommend making a pit stop at a bakery beforehand to grab a sandwich; it will save you from culinary disappointment later. Additionally, be sure to pack ample water to stay hydrated at high altitudes without splurging on expensive bottled water.`,
          `Lastly, in Bern, I wouldn't particularly recommend Restaurant Rosengarten. The seating arrangement we encountered didn't offer particularly great views of the city. The limited vegetarian options and forgettable food experience left much to be desired. While convenient, I would encourage you to explore any of the other dining options I've recommended above instead, ensuring a more satisfying culinary experience.`
        ]}
        steps={[`Fondue - Molkerei Gstaad`,
          `Hot Chocolate - Charly's in Gstaad, Max Chocolatier in Zurich`,
          `Pizza - Il Buongustaio in Interlaken`,
          `Pasta - Luce in Bern`,
          `Coffee - Rösterei in Bern`,
          `Dessert - Le Gruyerien in Geneva`
        ]}
      />

    </ThemeProvider>
  )
}

export default SwitzerlandFood
