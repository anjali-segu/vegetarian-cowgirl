// recipe json files
import ChocolateCakeCookiesJson from '../assets/recipes/chocolate-cake-cookies.json';
import CinnamonBunsJson from '../assets/recipes/cinnamon-buns.json';
import DeconstructedEloteJson from '../assets/recipes/deconstructed-elote.json';
import EggsEnCocotteJson from '../assets/recipes/eggs-en-cocotte.json';
import EtonMessJson from '../assets/recipes/eton-mess.json';
import JalapenoPoppersJson from '../assets/recipes/jalapeno-poppers.json';
import MushroomMisoSoupJson from '../assets/recipes/mushroom-miso-soup.json';
import OrangeCakeJson from '../assets/recipes/orange-cake.json';
import PSLJson from '../assets/recipes/psl.json'
import PumpkinMascarponePieJson from '../assets/recipes/pumpkin-mascarpone-pie.json';
import SugarCookiesJson from '../assets/recipes/sugar-cookies.json';
import TurkishEggsJson from '../assets/recipes/turkish-eggs.json';
import VeggieDumplingsJson from '../assets/recipes/veggie-dumplings.json';
import MomsJamun from '../assets/recipes/jamun.json'
import GrandmasPastaSauce from '../assets/recipes/spaghetti-sauce.json'
import Cheesecake from '../assets/recipes/cheesecake.json'
import GrandmasFudge from '../assets/recipes/chocolate-fudge.json'
import Brownie from '../assets/recipes/chocolate-brownies.json'
import Gingerbread from '../assets/recipes/gingerbread.json'
import EggsBenny from '../assets/recipes/eggs-benny.json'
import OrangePancake from '../assets/recipes/orange-pancakes.json'


// blog post images (squares)
import Chocolate_Cake_Cookies_Blog_Square from '../assets/images/blog_posts/chocolate_cake_cookies_blog_square.jpg';
import Cinammon_Buns_Blog_Square from '../assets/images/blog_posts/cinammon_buns_blog_square.jpg';
import Dumplings_Blog_Square from '../assets/images/blog_posts/dumplings_blog_square.jpg';
import Eggs_En_Cocotte_Blog_Square from '../assets/images/blog_posts/eggs_en_cocotte_blog_square.jpg';
import Elote_Blog_Square from '../assets/images/blog_posts/elote_blog_square.jpg';
import Eton_Mess_Blog_Square from '../assets/images/blog_posts/eton_mess_blog_square.png';
import Jalapeno_Poppers_Blog_Square from '../assets/images/blog_posts/jalapeno_poppers_blog_square.jpg';
import Miso_Soup_Blog_Square from '../assets/images/blog_posts/miso_soup_blog_square.jpg';
import Orange_Cake_Blog_Square from '../assets/images/blog_posts/orange_cake_blog_square.jpg';
import PSL_Blog_Square from '../assets/images/blog_posts/psl_blog_square.jpg';
import Pumpkin_Pie_Blog_Square from '../assets/images/blog_posts/pumpkin_pie_blog_square.jpeg';
import Sugar_Cookie_Blog_Square from '../assets/images/blog_posts/sugar_cookie_blog_square.jpg';
import Turkish_Eggs_Blog_Square from '../assets/images/blog_posts/turkish_eggs_blog_square.jpg';
import Jamun_Fry_Blog_Square from '../assets/images/blog_posts/jamun_fry_blog_square.jpg';
import Jamun_Raw_Blog_Square from '../assets/images/blog_posts/jamun_raw_blog_square.jpg';
import Jamun_Served_Blog_Square from '../assets/images/blog_posts/jamun_served_blog_square.jpg';
import Pasta_Sauce_Blog_Square from '../assets/images/blog_posts/pasta_sauce_blog_square.jpg';
import Pasta_Sauce_Pot_Blog_Square from '../assets/images/blog_posts/pasta_sauce_pot_blog_square.jpg';
import Pasta_Sauce_Plate_Blog_Square from '../assets/images/blog_posts/pasta_sauce_plate_blog_square.jpg';
import Grandma_Fudge_Blog_Square from '../assets/images/blog_posts/chocolate_fudge_blog_square.jpg';
import Grandma_Fudge_Top_Blog_Square from '../assets/images/blog_posts/chocolate_fudge_top_down_blog_square.jpg';
import Cheesecake_Blog_Square from '../assets/images/blog_posts/cheesecake_blog_square.jpg';
import Cheesecake_Crust_Blog_Square from '../assets/images/blog_posts/cheesecake2_blog_square.jpg';
import Cheesecake_Crust2_Blog_Square from '../assets/images/blog_posts/cheesecake3_blog_square.jpg'
import Brownie_Blog_Square from '../assets/images/blog_posts/brownie_blog_square.jpg';
import Brownie_Cut_Blog_Square from '../assets/images/blog_posts/brownie_cut_blog_square.jpg';
import Brownie_Uncut_Blog_Square from '../assets/images/blog_posts/brownie_uncut_blog_square.jpg';
import Gingerbread_Blog_Square from '../assets/images/blog_posts/gingerbread_blog_square.jpg';
import Gingerbread_Cutout_Blog_Square from '../assets/images/blog_posts/gingerbread_cutout_blog_square.jpg';
import Gingerbread_Plain_Blog_Square from '../assets/images/blog_posts/gingerbread_plain_blog_square.jpg';
import Eggs_Benny_Blog_Square from '../assets/images/blog_posts/eggs_benny_blog_square.jpg';
import Eggs_Benny_Overhead_Blog_Square from '../assets/images/blog_posts/eggs_benny_overhead_blog_square.jpg';
import Orange_Pancake_Drizzle_Blog_Square from '../assets/images/blog_posts/orange_pancake_drizzle_blog_square.jpg';
import Orange_Pancake_Blog_Square from '../assets/images/blog_posts/orange_pancake_blog_square.jpg';





// icons
import Baking_Icon from '../assets/images/icons/baking_icon.png';
import Cooking_Icon from '../assets/images/icons/cooking_icon.png';
import Drink_Icon from '../assets/images/icons/drinks_icon.png';

export const recipes = [
  {
    path: '/recipes/chocolate-orange-pancakes',
    images: [
      {
        src: Orange_Pancake_Drizzle_Blog_Square,
        alt: "Orange pancake with chocolate drizzle on plate",
      },
      {
        src: Orange_Pancake_Blog_Square,
        alt: "Orange pancake with chocolate drizzle on plate"
      }
    ],
    icon: Cooking_Icon,
    ...OrangePancake
  },
  {
    path: '/recipes/avocado-eggs-benedict',
    images: [
      {
        src: Eggs_Benny_Overhead_Blog_Square,
        alt: "Eggs benedict on a plate",
      },
      {
        src: Eggs_Benny_Blog_Square,
        alt: "Eggs benedict on a plate"
      }
    ],
    icon: Cooking_Icon,
    ...EggsBenny
  },
  {
    path: '/recipes/soft-gingerbread',
    images: [
      {
        src: Gingerbread_Plain_Blog_Square,
        alt: "Gingerbread baked on tray",
      },
      {
        src: Gingerbread_Blog_Square,
        alt: "Decorated gingerbread men"
      },
      {
        src: Gingerbread_Cutout_Blog_Square,
        alt: "Gingerbread men being cut out from dough",
      },
    ],
    icon: Baking_Icon,
    ...Gingerbread
  },
  {
    path: '/recipes/fudgey-brownies',
    images: [
      {
        src: Brownie_Cut_Blog_Square,
        alt: "Brownies cut into pieces in tray",
      },
      {
        src: Brownie_Blog_Square,
        alt: "Fudgey brownie on black marble"
      },
      {
        src: Brownie_Uncut_Blog_Square,
        alt: "Brownies uncut in tray",
      },
    ],
    icon: Baking_Icon,
    ...Brownie
  },
  {
    path: '/recipes/eton-mess-dessert',
    images: [
      {
        src: Eton_Mess_Blog_Square,
      },
    ],
    icon: Baking_Icon,
    ...EtonMessJson
  },
  {
    path: '/recipes/cinnamon-rolls-dessert',
    images: [
      {
        src: Cinammon_Buns_Blog_Square,
      },
    ],
    icon: Baking_Icon,
    ...CinnamonBunsJson
  },
  {
    path: '/recipes/chocolate-cake-cookies',
    images: [
      {
        src: Chocolate_Cake_Cookies_Blog_Square,
      },
    ],
    icon: Baking_Icon,
    ...ChocolateCakeCookiesJson
  },
  {
    path: '/recipes/pumpkin-mascarpone-pie',
    images: [
      {
        src: Pumpkin_Pie_Blog_Square,
      },
    ],
    icon: Baking_Icon,
    ...PumpkinMascarponePieJson
  },
  {
    path: '/recipes/sugar-cookies',
    images: [
      {
        src: Sugar_Cookie_Blog_Square,
      },
    ],
    icon: Baking_Icon,
    ...SugarCookiesJson
  },
  {
    path: '/recipes/italian-orange-cake',
    images: [
      {
        src: Orange_Cake_Blog_Square,
      },
    ],
    icon: Baking_Icon,
    ...OrangeCakeJson
  },
  {
    path: '/recipes/eggs-en-cocotte',
    images: [
      {
        src: Eggs_En_Cocotte_Blog_Square,
        alt: "Eggs en cocotte on a table.",
      },
    ],
    icon: Cooking_Icon,
    ...EggsEnCocotteJson
  },
  {
    path: '/recipes/deconstructed-elote',
    images: [
      {
        src: Elote_Blog_Square,
        alt: "Deconstructed elote in a bowl.",
      },
    ],
    icon: Cooking_Icon,
    icon_alt: "cooking",
    ...DeconstructedEloteJson
  },
  {
    path: '/recipes/puff-pastry-jalepeno-poppers',
    images: [
      {
        src: Jalapeno_Poppers_Blog_Square,
        alt: "Jalapeno poppers on black marble.",
      },
    ],
    icon: Cooking_Icon,
    icon_alt: "cooking",
    ...JalapenoPoppersJson
  },
  {
    path: '/recipes/turkish-eggs',
    images: [
      {
        src: Turkish_Eggs_Blog_Square,
        alt: "Turkish Eggs on a black table.",
      },
    ],
    icon: Cooking_Icon,
    icon_alt: "cooking",
    ...TurkishEggsJson
  },
  {
    path: '/recipes/mushroom-miso-soup',
    images: [
      {
        src: Miso_Soup_Blog_Square,
        alt: "Mushroom miso soup in bowl.",
      },
    ],
    icon: Cooking_Icon,
    icon_alt: "cooking",
    ...MushroomMisoSoupJson
  },
  {
    path: '/recipes/veggie-packed-dumplings',
    images: [
      {
        src: Dumplings_Blog_Square,
        alt: "Dumplings on a white plate.",
      },
    ],
    icon: Cooking_Icon,
    icon_alt: "cooking",
    ...VeggieDumplingsJson
  },
  {
    path: '/recipes/pumpkin-spiced-latte',
    images: [
      {
        src: PSL_Blog_Square,
        alt: "Pumpkin spiced latte in a glass mug.",
      },
    ],
    icon: Drink_Icon,
    icon_alt: "Drink",
    ...PSLJson
  },
  {
    path: '/recipes/moms-jamun',
    images: [
      {
        src: Jamun_Raw_Blog_Square,
        alt: "Jamun before frying.",
      },
      {
        src: Jamun_Served_Blog_Square,
        alt: "Mom's jamuns in a glass bowl.",
      },
      {
        src: Jamun_Fry_Blog_Square,
        alt: "Jamun during frying.",
      },
    ],
    icon: Cooking_Icon,
    icon_alt: "Cooking",
    ...MomsJamun
  },
  {
    path: '/recipes/grandmas-pasta-sauce',
    images: [
      {
        src: Pasta_Sauce_Pot_Blog_Square,
        alt: "Grandma Barbieri's pasta cooking.",
      },
      {
        src: Pasta_Sauce_Blog_Square,
        alt: "Grandma Barbieri's pasta sauce.",
      },
      {
        src: Pasta_Sauce_Plate_Blog_Square,
        alt: "Grandma Barbieri's pasta on plate.",
      },
    ],
    icon: Cooking_Icon,
    icon_alt: "Cooking",
    ...GrandmasPastaSauce
  },
  {
   path: '/recipes/cheesecake',
    images: [
      {
        src: Cheesecake_Blog_Square,
        alt: "Slice of cheesecake on a plate.",
      },
      {
        src: Cheesecake_Crust_Blog_Square,
        alt: "Crust in food processer.",
      },
      {
        src: Cheesecake_Crust2_Blog_Square,
        alt: "Pecan Graham cracker crust pressed into baking tin.",
      },
     ], 
    icon: Baking_Icon,
    icon_alt: "Baking",
    ...Cheesecake
   },
  
  {
    path: '/recipes/grandmas-fudge',
    images: [
      {
        src: Grandma_Fudge_Blog_Square,
        alt: "Grandma's Fudge on an oblong plate."
      },
      {
        src: Grandma_Fudge_Top_Blog_Square,
        alt: "Top down view of Grandma's Fudge."
      },
    ],
    icon: Baking_Icon,
    icon_alt: "Baking",
    ...GrandmasFudge
  },
]
