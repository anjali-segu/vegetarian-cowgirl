import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import {theme} from '../../utils/theme'
import RecipeBlogPostComplex from '../../blogposts/RecipeBlogPostComplex'

import Cinammon_Buns_Blog_Square from '../../assets/images/blog_posts/cinammon_buns_blog_square.jpg';

import Baking_Icon from '../../assets/images/icons/baking_icon.png';

interface Props {
}


const CinnamonRolls = (props:Props) => {

  return (
    <ThemeProvider theme={theme}>
    <RecipeBlogPostComplex
      image={Cinammon_Buns_Blog_Square}
      icon={Baking_Icon}
      title="Cinnamon Rolls"
      subtitle={`This indulgent dessert is the perfect warm treat! These are the gooeiest cinnamon
        buns covered in a warm cream cheese glaze. `}
      subtitle2={`This is a classic dessert in my house! The cinnamon flavor
        comes through beautifully without being too strong. The sweet yeasty brioche
        flavor balances the cinnamon flavor combined with the creamy sweet frosting.
        These cinnamon buns are not too sweet and warms up beautifully. The recipe
        itself is not too hard but will require a stand mixer and some basic dough knowledge. `}
      category_1_ingredients="Dough"
      ingredients_1= {[
                     '1 cup warm milk (115 Degrees F)',
                     '2 1/2 tsp instant dry yeast',
                     '2 eggs',
                     '1/3 cup salted butter, melted and cooled',
                     '1/2 cup granulated sugar',
                     '1 tsp salt',
                     '4 1/2 cups all-purpose flour',
                     'Filling:',
                     '1/2 cup salted butter',
                     '1 cup packed brown sugar',
                     '2 tbsp cinnamon',
                     '1/2 cup heavy cream',
                    ]}
      category_2_ingredients="Filling"
      ingredients_2= {[
                     '1/2 cup salted butter',
                     '1 cup packed brown sugar',
                     '2 tbsp cinnamon',
                     '1/2 cup heavy cream',
                    ]}
      category_3_ingredients="Frosting"
      ingredients_3= {[
                    '1/3 cup salted butter',
                    '2 cups powdered sugar',
                    '1/2 tbsp vanilla extract'
                    ]}

      steps= {[`Pour the warm milk in the bowl of a stand mixer and sprinkle the yeast overtop.`,
               `Add the eggs, butter and sugar. Mix until combined.`,
                `Add in salt and 4 cups (save the other ½ cup and add only if you need it) of flour and mix using the
                beater blade just until the ingredients are barely combined. Allow the mixture to rest for 5 minutes
                so the flour has time to soak up the liquids.`,
                `Scrape the dough off the beater blade and remove it. Attach the dough hook.`,
                `Beat the dough on medium speed, adding in up to ½ cup more flour if needed to form a dough. Knead for
                 5-7 minutes or until the dough is elastic and smooth. **The dough should be tacky and will still be
                 sticking to the sides of the bowl. That's ok! Don't be tempted to add more flour at this point. We
                 generally add about 4 ½ cups, but start with 4 cups.`,
                `Spray a large bowl with cooking spray.`,
                `Use a rubber spatula to remove the dough from the mixer bowl and place it in the greased large bowl.`,
                `Cover the bowl with a towel or wax paper.`,
                `Set the bowl in a warm place and allow the dough to rise until double. I like to turn on the oven
                 to the lowest setting for 1-2 minutes. Then turn off the oven and place the dough to rise in there.
                 It normally takes about 30 minutes for the dough to rise. Do not allow the dough to rise too much or
                 your cinnamon rolls will be airy.`,
                 `While the dough is rising, prepare the cinnamon filling. In a medium bowl, combine the soft butter,
                  brown sugar and cinnamon, mixing until well combined. Set aside.`,
                `Sprinkle a pastry mat generously with flour. Turn out the dough onto the pastry mat and sprinkle the
                 top of the dough with additional flour. `,
                `Flour a rolling pin and roll the dough to about a 24×15" rectangle. (the size of the rectangle can vary
                 it does not have to be exact!`,
                 `Use a rubber spatula to smooth the cinnamon filling over the whole dough rectangle.`,
                 `Starting on the long end, roll the dough up tightly jelly roll style.`,
                 `Cut into 12 slices and place in a greased 9×13 baking pan.`,
                 `Cover the pan and allow the rolls to rise for 20 minutes or until nearly double.`,
                  `Preheat the oven to 375 degrees.`,
                 `Warm the heavy cream until the chill is off. Don’t make it hot…you just don’t want it cold. It should
                  be warm to the touch.`,
                  `Once the rolls have risen, pour the heavy cream over the top of the rolls, allowing it to soak down in
                   and around the rolls.`,
                  `Bake at 375 degrees for 20-22 minutes, until the rolls are lightly golden brown and the center rolls
                   are cooked through. Note…the time will vary based on how big the rolls are, what type of pan, how close
                   the rolls are packed, etc. They could take up to 25-27 minutes. Check the rolls at 20 minutes. If they
                   are getting too browned, cover loosely with foil for the remaining baking time.`,
                  `While the rolls are cooling, prepare the cream cheese frosting.`,
                   `In a large bowl, combine the softened cream cheese and butter using a hand mixer. Blend well.`,
                   `Add in your favorite extract and the powdered sugar. Beat until combined.`,
                   `Spread the frosting over the cooled rolls.`,
                    `Store in an airtight container.`]}
      preptime= "40 min"
      cooktime= "1 hr 35 min"
      totaltime= "2 hr 15 min"
      serves= {12}
      />

    </ThemeProvider>
  )
}

export default CinnamonRolls
