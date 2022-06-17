import { createTheme, ThemeProvider } from '@mui/material/styles';
import { theme } from '../../utils/theme'
import RecipeBlogPostComplex from '../../blogposts/RecipeBlogPostComplex'

import Sugar_Cookie_Blog_Square from '../../assets/images/blog_posts/sugar_cookie_blog_square.jpg';

import Baking_Icon from '../../assets/images/icons/baking_icon.png';

interface Props {
}


const SugarCookies = (props: Props) => {

  return (
    <ThemeProvider theme={theme}>
      <RecipeBlogPostComplex
        image={Sugar_Cookie_Blog_Square}
        icon={Baking_Icon}
        title="Soft Sugar Cookie Cutouts"
        subtitle={`These crisp edged, soft thick centered cookies makes this recipe
                 a must try! Great for any occasion and works well with cutouts.`}
        subtitle2={`These are my favorite sugar cookies with icing! They are almondy, buttery, sweet,
        and have beautifully soft centers. I normally am not a huge fan of sugar cookies
        but these have converted me! They are extremely fun to decorate and
        keep well! Works great for gifts or just for a delcious dessert.`}
        category_1_ingredients="Cookies"
        ingredients_1={[
          '2 and 1/4 cups all-purpose flour (spoon & leveled), plus more as needed for rolling and work surface',
          '1/2 teaspoon baking powder',
          '1/4 teaspoon salt',
          '3/4 cup unsalted butter, softened to room temperature',
          '3/4 cup granulated sugar',
          '1 large egg',
          '2 teaspoons pure vanilla extract',
          '1/4 or 1/2 teaspoon almond extract (optional, but makes the flavor outstanding)',
        ]}
        category_2_ingredients="Icing"
        ingredients_2={[
          '3 cups confectioners’ sugar',
          '1/2 teaspoon pure vanilla extract',
          '2 teaspoons light corn syrup',
          '4.5–5 Tablespoonsroom temperature water',
          'pinch of salt'
        ]}
        steps={[`Whisk the flour, baking powder, and salt together in a medium bowl. Set aside.`,
          `In a large bowl using a hand mixer or a stand mixer fitted with a paddle attachment,
              beat the butter and sugar together on high speed until completely smooth and creamy,
              about 2 minutes. `,
          `Add the egg, vanilla, and almond extract (if using) and beat on high
             speed until combined, about 1 minute. Scrape down the sides and up the bottom of the
             bowl and beat again as needed to combine.`,
          `Add the dry ingredients to the wet ingredients and mix on low until combined. Dough will be relatively soft.
              If the dough seems too soft and sticky for rolling, add 1 more Tablespoon of flour.`,
          `Divide the dough into 2 equal parts. Place each portion onto a piece of lightly floured parchment
              paper or a lightly floured silicone baking mat. With a lightly floured rolling pin, roll the dough
              out to about 1/4-inch thickness. Use more flour if the dough seems too sticky. The rolled-out dough can be any shape,
              as long as it is evenly 1/4-inch thick.`,
          `Lightly dust one of the rolled-out doughs with flour. Place a piece of parchment on top.
               (This prevents sticking.) Place the 2nd rolled-out dough on top. Cover with plastic wrap
               or aluminum foil, then refrigerate for at least 1-2 hours and up to 2 days.`,
          `Once chilled, preheat oven to 350 F. Line 2-3 large baking sheets with parchment paper or silicone baking mats.
             Carefully remove the top dough piece from the refrigerator. If it’s sticking to the bottom, run your hand under it to help remove it. Using a cookie cutter,
             cut the dough into shapes. Re-roll the remaining dough and continue cutting until all is used.
             Repeat with 2nd piece of dough. (Note: It doesn’t seem like a lot of dough, but you get a lot of cookies
            from the dough scraps you re-roll.)`,
          `Arrange cookies on baking sheets 3 inches apart. Bake for 11-12 minutes or until lightly browned
          around the edges. If your oven has hot spots, rotate the baking sheet halfway through bake time. Allow
          cookies to cool on the baking sheet for 5 minutes then transfer to a wire rack to cool completely before
          decorating.`,
          `For the frosting, Using a fork, stir the confectioners’ sugar, vanilla, corn syrup, and 4.5 Tablespoons (67ml)
          of water together in a medium bowl. It will be very thick and almost impossible to stir. Switch to a whisk and whisk
           in 1/2 Tablespoon (8ml) of water. If you lift the whisk and let the icing drizzle back into the bowl, the ribbon of icing
            will hold shape for a few seconds before melting back into the icing. That is when you know it’s the right consistency
             and is ready to use. If it’s too thick (sometimes it is), whisk in another 1/2 Tablespoon (8ml) of water or a little
            more until you reach the consistency.`,
            `If desired, stir in gel food coloring. You can pour some icing into different bowls if using multiple colors. When
            tinting icing, only use 1-2 drops at first, stir it in, then add more as needed to reach your desired color. Remember,
            color darkens as icing dries.`,
          `Decorate the cooled cookies with royal icing or easy glaze icing. Feel free to tint either icing with gel
           food coloring. See post above for recommended decorating tools. No need to cover the decorated cookies as
            you wait for the icing to set. If it’s helpful, decorate the cookies directly on a baking sheet so
             you can stick the entire baking sheet in the refrigerator to help speed up the icing setting.`,
          `Enjoy cookies right away or wait until the icing sets to serve them. Once the icing has set, these cookies
              are great for gifting or for sending. Plain or decorated cookies stay soft for about 5 days when covered
              tightly at room temperature. For longer storage, cover and refrigerate for up to 10 days.`
        ]}
        preptime="2 hrs"
        cooktime="12 minutes"
        totaltime="4 hrs"
        serves={24}
      />

    </ThemeProvider>
  )
}

export default SugarCookies
