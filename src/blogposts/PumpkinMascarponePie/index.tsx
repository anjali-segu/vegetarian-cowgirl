import { ThemeProvider } from '@mui/material/styles';
import {theme} from '../../utils/theme'
import RecipeBlogPostComplex from '../../blogposts/RecipeBlogPostComplex'

import Pumpkin_Pie_Blog_Square from '../../assets/images/blog_posts/pumpkin_pie_blog_square.jpeg';

import Baking_Icon from '../../assets/images/icons/baking_icon.png';

interface Props {
}


const PumpkinMascarponePie = (props:Props) => {

  return (
    <ThemeProvider theme={theme}>
    <RecipeBlogPostComplex
      image={Pumpkin_Pie_Blog_Square}
      icon={Baking_Icon}
      title="Pumpkin Mascarpone Pie"
      subtitle={`Pumpkin mascarpone pie is a stunning and cozy holiday dessert
         that is easy to make, totally delicious, and pure joy to consume. It's creamy,
         rich, and indulgent.`}
      subtitle2={`Spend just minutes mixing the mascarpone cheese and pumpkin
         puree filling together with fall spices, then pour into a prepared pie
        crust, and bake. The mascarpone makes this pie extra creamy and dreamy while the
        spices offset it. This pie is not too sweet which makes it incredibly addicting.`}
      category_1_ingredients="Pie"
      ingredients_1= {[
                     '1 (13.5 oz) can pumpkin puree',
                     '1 cup mascarpone cheese',
                     '1/4 cup brown sugar',
                     '1 teaspoon pumpkin pie spice',
                     '1 teaspoon vanilla extract',
                     '1 tablespoon fresh lemon juice',
                     '2 large eggs',
                     '1/4 teaspoon salt',
                     '1 single 9 inch pie crust, homemade or store-bought'
                    ]}
      steps= {[`Preheat the oven to 350 degrees F.`,
             `In a large mixing bowl, add pumpkin puree, mascarpone cheese, brown sugar,
             pumpkin pie spice, vanilla extract, lemon juice, eggs, and salt. Mix well
             with an electric hand mixer or whisk until smooth and evenly combined, about
             1-2 minutes.`,
             `Fit the uncooked pie crust on a 9-inch pie dish and slowly add in the pumpkin filling. Smooth
              out the top using the an icing spatula or the back of a spoon. `,
             `Bake the pie for 1 hour until set. Let cool completely and serve with whipped cream.`]}
      preptime= "10 min"
      cooktime= "1 hr"
      totaltime= "1 hr 30 min"
      serves= {12}
      />

    </ThemeProvider>
  )
}

export default PumpkinMascarponePie
