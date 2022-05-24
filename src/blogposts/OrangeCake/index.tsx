import { createTheme, ThemeProvider } from '@mui/material/styles';
import { theme } from '../../utils/theme'
import RecipeBlogPostComplex from '../../blogposts/RecipeBlogPostComplex'




interface Props {
}


const OrangeCake = (props: Props) => {

  return (
    <ThemeProvider theme={theme}>
      <RecipeBlogPostComplex
        image={"/blog_posts/orange_cake_blog_square.jpg"}
        icon='/icons/baking_icon.png'
        title="Italian Orange Layered Cake"
        subtitle={`This fluffy orange cake made with fresh orange juice and orange zest
                   gives it that perfect amount of orange flavor. The brightness of
                   the orange makes this a great summer treat. Covered in sweet cream butter, cream cheese,
                   powdered sugar, and orange zest frosting.`}
        subtitle2={`This is my go to cake recipe! It produces an even cake with a bright
                   orange flavor. The cake has olive oil making it extra moist. The cream cheese
                   frosting cuts through the sweetness of the cake. The cake itself is easy to make
                   and comes together quickly.`}
        category_1_ingredients="Orange Cake"
        ingredients_1={[
          '2 and 1/2 cups flour',
          '1 and 3/4 cup sugar',
          '1 and 1/2 teaspoon baking soda',
          '1 teaspoon baking powder',
          '3/4 teaspoon salt',
          '1 cup olive oil',
          '1 cup fresh orange juice',
          '3 eggs',
          '1 cup sour cream',
          '2 teaspoons orange zest'
        ]}
        category_2_ingredients="Orange Cream Cheese Frosting"
        ingredients_2={[
          '1 and 1/2 cup butter, softened',
          '12 oz of cream cheese, softened',
          '6 cups powdered sugar',
          '2 teaspoon orange zest',
          '3 tablespoons fresh orange juice',
          '1 teaspoon vanilla extract'
        ]}
        steps={[`Preheat oven to 350 degrees.`,
                `In a large mixing bowl, stir flour, sugar, baking soda, baking powder, and salt.`,
                `In another mixing bowl, cream oil, orange juice, eggs, sour cream, and orange zest until completely mixed.`,
                `Fold in dry ingredients, mixing only until combined.`,
                `Generously grease your non-stick cake pans with non-stick cooking spray or grease
                 them with butter and flour. Pour batter into greased (3) 8-inch or (2) 9-inch cake pans.`,
                 `Bake for 19-21 minutes, depending on the size of pan used. To test if the cakes are done,
                 insert a toothpick in the center of the cake. If it comes out clean, the cakes are done.
                 Let cool for 15 minutes before removing from pans.`,
                 `In a large mixing bowl, cream together butter and cream cheese for 4 minutes until light
                  and fluffy. Scrape down sides of the bowl halfway through mixing. Stir in powdered sugar,
                   orange zest, and orange juice.`,
                   `Once cakes are cooled, frost with orange cream cheese frosting.`,
                   `Decorate with pistacio white chocolate bark, raspberries, and rose petals.`
        ]}
        preptime="20 minutes"
        cooktime="20 minutes"
        totaltime="1 hr"
        serves={12}
      />

    </ThemeProvider>
  )
}

export default OrangeCake