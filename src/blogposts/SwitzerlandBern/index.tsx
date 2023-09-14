import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../../utils/theme'
import StandardBlogPost from '../../blogposts/StandardBlogPost'

import Bern from '../../assets/images/blog_posts/switzerland/bern.jpg';
import Bern2 from '../../assets/images/blog_posts/switzerland/bern2.jpg';

import Travel_Icon from '../../assets/images/icons/travel_icon.png';

interface Props {
}


const SwitzerlandBern = (props: Props) => {

  return (
    <ThemeProvider theme={theme}>
      <StandardBlogPost
        image={Bern}
        alt="Anjali in a blue and white checkered skirt and top, spinning in Old Town Bern."
        image2={Bern2}
        alt2="A honey cardamom honey latte in a paper cup in Rosterei."
        icon={Travel_Icon}
        alticon="A plane icon"
        title="Bern, Switzerland - Spa Day, Albert Eintein's Home"
        subtitle={`Bern being the capital of Switzerland made us excited to visit. We visited a lot of the classic Bern spots and found some surprising gems off the beaten path.`}
        paras={[`Bern is the capital of Switzerland, nestled amidst the Swiss Plateau, and notably surrounded by the majestic Aare River. The Aare has a remarkable turquoise hue reminiscent of emerald waters. Our journey through Bern began with a delightful visit to <b>Rosterei</b>, where we indulged in a delectable array of coffee. I enjoyed a mocha while treating myself to the exceptional cardamom honey latte, a true highlight and one of the finest lattes I experienced on the trip. Without hesitation, I encourage you to include Rosterei in your itinerary.`,
          `Our path then led us to the <b>Albert Einstein House</b>, a flat located at Kramgasse 49 where the esteemed physicist Albert Einstein resided from 1903 to 1905, a period marked by the publication of the Annus Mirabilis papers. It's worth noting that the Swiss Pass did not cover the full cost, offering a reduced rate instead, with each ticket priced at 5 Swiss Francs. The top floor of Einstein's abode features displays chronicling his life, freely accessible to the public. Just one floor below lies his actual living quarters, accessible with a ticket. We were slightly disappointed upon entering; Einstein's living space turned out to be a compact studio, a recreation of his living room furnished with some original pieces. Given its modest size and limited appeal, I would recommend considering an alternative attraction.`,
          `Following our Einstein House exploration, we visited the renowned <b>Rosengarten</b>, or Rose Garden, a cherished haven in Bern celebrated for its stunning vistas overlooking Old Town Bern and the Aare River. Our trek to the garden was quite a steep ascent, so we took numerous breaks along the way. At the top, a vibrant array of roses greeted us in various shades, though the heat had taken its toll on some blooms. Despite its charm, the garden appeared much smaller than anticipated, with around 4-5 rows of diverse rose varieties, falling slightly short of the grandeur depicted on the website. We captured some photos before making our way to <b>Restaurant Rosengarten</b>. Pre-reservation was a wise choice, considering the popularity of this restaurant.`,
          `We indulged in a Caprese salad and Basil Gnocchi at Restaurant Rosengarten. The establishment's reputation is built upon its picturesque views, reflected in the relatively higher prices. Our outdoor table offered a pleasant experience, even though we didn't have an optimal cityscape view. While the food was satisfactory, it fell short of leaving a lasting culinary impression. It is also quite expensive so keep that in mind when you plan a visit.`,
          `From there, we proceeded to <b>Baren Park</b>, where since 2009, Bern's bears have a 6,000-square-meter park. This site holds significant cultural importance, as the bear is a symbol woven into the fabric of both the city and its surrounding canton, a presence echoed in their coat of arms. Our encounter with the three bears was bittersweet, as the enclosure felt rather confined, leaving us with mixed feelings about the animals' living conditions.`,
          `With the sun's radiant glow, the craving of gelato called us. Adjacent to the park was <b>Gelateria Eiswerkstatt</b>. My selection included hazelnut and mango gelato, while my boyfriend opted for stracciatella and raspberry. The gelato proved to be a delightful treat, offering much-needed refreshment on the hot day.`,
          `In light of some underwhelming visits to popular landmarks, we decided to explore the <b>Bern Historical Museum</b>, a decision that proved immensely rewarding. The museum's extensive and well-designed exhibits captured our interest, enriched by interactive components that enhanced our learning experience. Despite our two-hour window before closing time, the Albert Einstein exhibition emerged as a standout, providing a comprehensive dive into his life and groundbreaking discoveries. I wholeheartedly endorse this segment of the museum, which could easily occupy 3 hours of your time.`,
          `Our trip so far was filled with hustle and bustle, the prospect of unwinding at the <b>Hammam & SPA Oktogon</b> was a welcome relief. The Bern Hammam, built atop Switzerland's first 19th-century gas boiler, boasts an octagonal architectural form, promising a distinct bathing experience spanning four floors. Note that on Tuesdays, the spa is exclusively reserved for women.  Our fortune favored us with an unusually quiet day, granting us near-exclusive access. The treatment encompassed exfoliation, steaming, and soaking in a sequence that provided rejuvenation. Our additional booking for a milk and honey bath, accompanied by a refreshing mango lassi, proved a delightful indulgence I heartily recommend.`,
          `Emerging from our spa interlude feeling revitalized, our attention turned to dinner, where a reservation at <b>Luce</b>, an authentic Italian establishment in the heart of Bern, awaited. Luce undoubtedly claimed its place as one of our preferred Italian eateries during the trip. My selection, the truffle pasta, and my partner's choice, the spaghetti marinara, led to an unplanned yet enjoyable swap as our palates were captivated by each other's dishes. Both offerings showcased fresh, al dente pasta complemented by delectable sauces that left a lasting impression. A coffee crema and cream puffs sealed the evening.`,
          `While our visit provided insight into Switzerland's capital, we discovered that the standard tourist attractions were not always the highlights. Bern exudes an enchanting historical ambiance that calls for exploration beyond the beaten path. Seek out local gems to truly capture the essence of this charming city.`

        ]}
        steps={[`Have coffee and breakfast at Rosterei`,
          `Visit the Bern Historical Museum`,
          `Walk through Bern Old Town and grab a quick lunch`,
          `Take a dip in the Aare river`,
          `Grab dinner at Luce`
        ]}
      />

    </ThemeProvider>
  )
}

export default SwitzerlandBern
