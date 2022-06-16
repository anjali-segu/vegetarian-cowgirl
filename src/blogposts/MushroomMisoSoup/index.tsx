import { createTheme, ThemeProvider } from '@mui/material/styles';
import { theme } from '../../utils/theme'
import RecipeBlogPostComplex from '../RecipeBlogPostComplex'




interface Props {
}


const MushroomMisoSoup
    = (props: Props) => {

        return (
            <ThemeProvider theme={theme}>
                <RecipeBlogPostComplex
                    image={"/blog_posts/miso_soup_blog_square.jpg"}
                    icon='/icons/cooking_icon.png'
                    title="Mushroom Miso Soup"
                    subtitle={`A warm comforting soup, made from whatever veggies you have in your fridge. This soup is simple to make and makes a perfect weekday dinner.`}
                    subtitle2={`This is my go to soup to make when I'm not feeling well! The miso base, spices, and vegetables is the perfect combination to kick out a cold. Feel free to sub out any of the veggies for whatever vegetables you have in the fridge. I personally get my miso paste from Sprout's. `}
                    category_1_ingredients="Mushroom Miso Soup"
                    ingredients_1={[
                        '2 tbsp of white miso paste',
                        '3 cups water',
                        '4 cloves of garlic',
                        '1 tsp ginger, minced',
                        '1 small box of mushrooms, sliced',
                        '1 cup frozen spinach or any leafy green',
                        '1 large carrot, diced',
                        '1/2 cup frozen peas',
                        '1/2 cup frozen corn', 
                        '1 tbsp olive oil',
                        '1 lime, juiced',
                        '2 tsp siracha',
                        '3 tsp soy sauce',
                        '2 tsp rice vinegar',
                        'pepper',
                        'salt'
                    ]}
                    steps=
                    {[
                    `In a large pot on medium heat, add oil.`, 
                    `Saute garlic, ginger, mushrooms, spinach, mushrooms, carrots, peas, and corn until cooked. The garlic should be fragrant and vegetables should completely cook down.`,
                    `While on medium to high heat, add soy sauce, siracha, rice vinegar, and pepper.`,
                    `Stir for 30 seconds and take off of heat. Add miso paste.`,
                    `Add water to the pot. Turn the heat back on to medium. Stir the miso paste until fully combined.`,
                    `Cook until the broth boils. Squeeze in the lime juice. Salt to taste.`
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

