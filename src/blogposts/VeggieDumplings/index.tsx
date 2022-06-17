import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../../utils/theme'
import RecipeBlogPostComplex from '../RecipeBlogPostComplex'

import Dumplings_Blog_Square from '../../assets/images/blog_posts/dumplings_blog_square.jpg';

import Cooking_Icon from '../../assets/images/icons/cooking_icon.png';

interface Props {
}


const MushroomMisoSoup
    = (props: Props) => {

        return (
            <ThemeProvider theme={theme}>
                <RecipeBlogPostComplex
                    image={Dumplings_Blog_Square}
                    icon={Cooking_Icon}
                    title="Veggie Packed Dumplings"
                    subtitle={`Crispy pan-fried Vegan Gyoza are Japanese vegetable dumplings. They are filled with healthy veggies and steamed until tender. `}
                    subtitle2={` `}
                    category_1_ingredients="Wrapper"
                    ingredients_1={[
                    '2 1/2 cups all purpose flour',
                    '1/2 tsp salt', 
                    '2/3 cup hot water',
                    'all-purpose flour for dusting',
                    ]}
                    category_2_ingredients="Vegetable Filling"
                    ingredients_2={[
                    '1-2 tbsp sesame oil',
                    '2 cloves garlic minced',
                    '1 tbsp ginger minced',
                    '1 onion diced',
                    '1 carrot shredded',
                    '7 oz mushrooms',
                    '1/2 stick leek',
                    '7 oz cabbage',
                    '2 tbsp soy sauce',
                    '1 tbsp rice vinegar',
                    'salt and pepper to taste',
                    '1 tsp siracha'
                    ]}
                    category_3_ingredients="Dipping Sauce"
                    ingredients_3={[
                    '3 tbsp soy sauce',
                    '1 tbsp rice vinegar',
                    '1 tbsp agave syrup',
                    '1/4 tsp sesame oil',
                    '1/2 tsp siracha',
                    ]}
                    steps=
                    {[
                    `Mix the flour and salt in a bowl. Add the water while stirring to combing. Transfer to a flat surface and knead for 3-5 minutes until smooth and soft dough. Form into a ball, wrap in cling film and refridgerate for 30 min.`,
                    `Divide the dough into two pices. Dust the working surface with flour and roll out the dough into about 2mm thick.`,
                    `Cut out circles using a glass or cookie cutter. Remove the trim, knead it into a ball, and roll it out again to cut out more circles.`,
                    `Dust the wrappers with some flour before stacking them up, otherwise they will stick together.`,
                    `Use them right away or store in an airtight container in the fridge or freeze.`,
                    `Finely chop the veggies and heat the oil in a large pan.`,
                    `Add all the veggies and cook until the veggies have softened. Add the ginger, garlic, and seasoning and cook for 1 min to combine flavors.`,
                    `Set aside to cool.`,
                    `Add 1 heaped teaspoon of filling to the center of the dumpling wrapper. Brush the edges with water and fold the dumpling creating hand fan pattern or as desired. Make sure to seal the seams.`,
                    `Repeat until the wrappers are used up.`,
                    `Heat the oil in pan over medium heat. Add the gyoza and fry for 2-3 min or until the bottoms are slightly browned. Pour in 1/4 cup of water and cover with a lid. Steam for 7-8 minutes or until the water has evaporated.`,
                    `For the dipping sauce, mix all the ingredients.`
                    ]}
                    preptime="10 minutes"
                    cooktime="10 minutes"
                    totaltime="20 minutes"
                    serves={2}
                    alt={"Mushroom miso soup in bowl."}
                    icon_alt={"cooking"}
                />

            </ThemeProvider>
        )
    }

export default MushroomMisoSoup

