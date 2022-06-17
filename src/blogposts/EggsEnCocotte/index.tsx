import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../../utils/theme'
import RecipeBlogPostComplex from '../../blogposts/RecipeBlogPostComplex'

import Eggs_En_Cocotte_Blog_Square from '../../assets/images/blog_posts/eggs_en_cocotte_blog_square.jpg';

import Cooking_Icon from '../../assets/images/icons/cooking_icon.png';

interface Props {
}


const EggsEnCocotte = (props: Props) => {

    return (
        <ThemeProvider theme={theme}>
            <RecipeBlogPostComplex
                image={Eggs_En_Cocotte_Blog_Square}
                icon={Cooking_Icon}
                title="Eggs en Cocotte w/ Carmelized Onions and Roasted Tomatoes"
                subtitle={`My favorite breakfast go to on the weekends that is both nutritious
                           and satisfying! Simple to make and works great for making in advance.`}
                subtitle2={`Eggs en Cocotte is a soft centered egg cooked in ramekins that 
                            can have any toppings you enjoy. My personal favorite is roasted tomatoes
                            and carmelized onions with some goat cheese. They are easy to prepare in
                            advance making it a great breakfast on the weekends or perfect for when
                            I have friends and family over.`}
                category_1_ingredients="Eggs en Cocotte"
                ingredients_1={[
                    '4 eggs',
                    '3 tsp of olive oil',
                    '4 tbsp of goat cheese',
                    '2 small white or yellow onions, sliced length-wise',
                    '16 cherry tomatoes, sliced lengthwise into halves',
                    `4 teaspoons of milk`,
                    'salt',
                    'pepper',
                    '4 ramekins',
                ]}
                steps={[`Pre-heat the oven to 400°F. Line the baking dish with the dish towel(optional). 
                         The dishtowel will keep the ramekins from sliding when you carry the 
                         baking dish.`,
                        `Place sliced cherry tomatoes on a baking sheet and coat 
                        with 1 tsp of olive oil. Bake for 20 - 25 minutes or until they have started to wrinkle and begin to brown.`,
                        `Set the oven to 375°F.`,
                        `In a cast iron pan, add the onions and 1 tsp of olive oil. Cook on medium heat. Stir occasionally, until
                        the onion are golden brown and have completely softened.`,
                        `Rub the insides of the ramekins with butter or olive oil. Distribute the roasted tomatoes
                         and carmelized onions evenly between all 4 ramekins.`,
                        `Create a small well in the bottom of each ramekin. This will be where the yolk will nest.`,
                        `Crack one egg into each ramekin.`, 
                        `Sprinkle each egg with a pinch of salt and pepper. If you'd like a richer baked egg and some
                        extra insurance against the yolk drying out in the oven, add a spoonful of milk to each ramekin
                        on top of the yolk.`,
                        `Crumble 1 tbsp of goat cheese onto the top of the cracked egg.`,
                        `Arrange all the ramekins on the towel in the baking dish. Pour hot water into the baking dish to 
                        come halfway up the sides of the ramekins. Very hot tap water is fine, or you can heat water on the stove 
                        until it's just starting to steam.`,
                        `Transfer the baking dish with the ramekins of eggs to the middle rack of the oven. Bake 
                        until the whites are set: 12-15 minutes for runny yolks, 15-18 minutes for soft-cooked yolks,
                        or 20 minutes for hard-cooked yolks. Remove the ramekins with oven mitts.`,
                        `Eat immediately with toast for dipping.`
                ]}
                preptime="20 minutes"
                cooktime="40 minutes"
                totaltime="1 hr"
                serves={4}
                alt={"Eggs en cocotte on a table."}
            />

        </ThemeProvider>
    )
}

export default EggsEnCocotte
