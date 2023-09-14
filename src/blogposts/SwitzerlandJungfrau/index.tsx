import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../../utils/theme'
import StandardBlogPost from '../../blogposts/StandardBlogPost'

import Jungfrau from '../../assets/images/blog_posts/switzerland/jungfrau.jpg';
import Jungfrau2 from '../../assets/images/blog_posts/switzerland/jungfrau2.jpg';

import Travel_Icon from '../../assets/images/icons/travel_icon.png';

interface Props {
}


const SwitzerlandJungfrau = (props: Props) => {

  return (
    <ThemeProvider theme={theme}>
      <StandardBlogPost
        image={Jungfrau}
        alt="Anjali on top of a mountain covered in snow with snow capped mountains in the background. "
        image2={Jungfrau2}
        alt2="Anjali at the Junfrau train station with a red train behind her and snow capped mountains."
        icon={Travel_Icon}
        alticon="A plane icon"
        title="Jungfraujoch, Switzerland - The Top of Europe, Highest Train Station"
        subtitle={`Jungfrau is the highest train station in all of Europe. We decided to make a trip to see the Bernese Alps up close.`}
        paras={[`Jungfraujoch, nestled at an astounding elevation of 3,463 meters, rests within the Bernese Alps and proudly holds the title of the highest train station in all of Europe. The train journey to this mountainous haven starts from Kleine Scheidegg, a station accessible via trains departing from Grindelwald and Lauterbrunnen. The expedition from Kleine Scheidegg to Jungfraujoch is 50 minutes, making stops at Eigerwand and Eismeer along the way; the return descent is 35 minutes.`,
          `Eager to draw nearer to the Swiss Alps, which we had been viewing from a distance throughout our trip, we rose early in the morning in Interlaken and made our way to Mohler for a swift breakfast. Mohler had splendid outdoor seating right beside the tranquil lake. Our order included a pineapple chocolate cake, chocolate cream-filled croissants, and a strawberry tart. The pineapple chocolate cake revealed a distinct and delectable taste, coupled with a moist, delightful texture. The chocolate cream-filled croissant and strawberry tart proved to be equally satisfying. After capturing some scenic shots by the lake, we embarked on our path toward the Interlaken train station.`,
          `As our next Airbnb destination was Bern, we needed to store our luggage at the Interlaken train station. A word of advice: coins are required for this service, but you can exchange a few Swiss Francs at the help desk. With two carry-on pieces and one larger suitcase in tow, we adeptly managed to secure all three items, along with a backpack, within two lockers.`,
          `Our journey to Jungfraujoch began with a train ride through Kleine Scheidegg, and for our return, we opted for the EigerExpress cable car. Strangely, the train ride wasn't our favored nor recommended mode of ascent. It felt somewhat crowded and cramped, exacerbated by the sensation of claustrophobia stemming from traversing the mountain tunnels. A preferable choice would be the EigerExpress for both directions, boasting swifter transit and the added advantage of expansive windows. We acquired our tickets well in advance and capitalized on a discount through our Swiss Pass.`,
          `Upon our arrival at Jungfraujoch, we realized the bustling nature of this destination. The corridors teemed with large tour groups and lots of tourists. To offer a comparison, envision Jungraujoch as essentially a massive Ikea. You must follow the path to see the different attractions. There are a few exit points if you would like to turn back and rest for a bit or grab food. `,
          `Our initial stop involved ascending to the Sphinx Observation Deck. We took an elevator ride up and made it out to the majestic Alps. I strongly recommend layering attire for this expedition, as you'll encounter stretches outdoors in varying weather conditions, interspersed with tunnel passages where temperatures can fluctuate. Stepping onto the deck, we were greeted by the awe-inspiring Swiss Alps, adorned in a thick blanket of fluffy snow.`,
          `The Sphinx Observation Deck, essentially a metallic platform encircling the central building, provides numerous vantage points for admiring distinct angles of the Alps, thereby offering ample opportunities for capturing stunning photographs. Afterward, we retreated indoors, ready to delve into the next attraction. It's worth noting that sunglasses are a necessity due to the blinding brilliance of the ice.`,
          `Our next encounter was with the Alpine Sensations exhibit, an immersive multimedia journey narrating the history of the Jungfraujoch tunnel, train, and complex. This interlude allowed us to bask in the warmth before proceeding to our next chilly escapade - the Ice Palace`,
          `A lengthy tunnel adorned with intricately carved ice sculptures and exhibitions entirely fashioned from ice, the Ice Palace presented a slick, captivating experience. The presence of metal handrails ensured safe navigation throughout this attraction, while the thematic variety and motifs of the art installations lent an air of exciting beauty.`,
          `Emerging from the Ice Palace, we ventured onto the Plateau, a snow-covered viewing area providing a panoramic spectacle. From this vantage point, the grandeur of the Aletsch glacier and the encircling mountain peaks unfolded before our eyes. Though roped off, the area's boundary proved nominal, making sturdy hiking or snow boots a prudent choice for traversing the terrain.`,
          `By this point, the altitude began to exert its influence on me. Never before had I encountered such heights. We deemed this an opportune moment to pause, refuel, and recharge. The expansive cafeteria provided several dining options, but at a premium due to the tourist-centric nature of the location. Given the limited alternatives, the prices were notably higher. Our order consisted of fries, falafels, and dumplings, each clearly marked for vegetarian suitability. While not particularly exceptional in taste, these options fulfilled their purpose. `,
          `Next, we ventured into the Snow Fun Park, contemplating the prospect of paragliding or snow tubing. However, the relatively high costs and brief nature of these experiences led us to opt-out. Instead, we made our way to the Lindt Swiss Chocolate Heaven.`,
          `The Lindt Swiss Chocolate Heaven encapsulates the historical backdrop of Swiss culture and chocolate production within a single room. The subsequent space unfolds as the Lindt Store. Regrettably, no complimentary samples were on offer, though a token of appreciation - a piece of Lindt chocolate - was given on our train ride back.`,
          `A visit to Jungfraujoch is undoubtedly rewarding, although one should brace for crowds and anticipate the altitude's impact. It's also worth acknowledging that the excursion consumes a substantial portion of the day.  Packed with attractions, the cold weather requires ample layers of clothing, and bringing a light lunch could save some money. Sturdy snow boots and sunglasses are also recommended for this journey. Witnessing the Swiss Alps up close proves a truly unforgettable experience. `

        ]}
        steps={[`Breakfast at Mohler in Interlaken`,
          `Head to Interlaken Ost with luggage`,
          `Take the EigerExpress to Jungfraujoch`,
          `Visit the various attractions`,
          `Take the EigerExpress back to Interlaken Ost`
        ]}
      />

    </ThemeProvider>
  )
}

export default SwitzerlandJungfrau
