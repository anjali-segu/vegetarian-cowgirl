import { createTheme, ThemeProvider } from '@mui/material/styles';
import { theme } from '../../utils/theme'
import RecipeBlogPostComplex from '../RecipeBlogPostComplex'




interface Props {
}


const TurkishEggs
    = (props: Props) => {

        return (
            <ThemeProvider theme={theme}>
                <RecipeBlogPostComplex
                    image={"/blog_posts/turkish_eggs_blog_square.jpg"}
                    icon='/icons/cooking_icon.png'
                    title="Turkish Eggs"
                    subtitle={`Perfect light meal for anytime of day! The soft cooked eggs compliment greek 
                              yogurt topped in a spicy chili brown butter sauce.`}
                    subtitle2={`This is a week night classic in my house! Turkish eggs is a simple recipe
                                that comes together in a short amount of time. This recipe also scales
                                up well, so it easy to make for the entire family!`}
                    category_1_ingredients="Turkish Eggs"
                    ingredients_1={[
                        '4 eggs',
                        '1 cup greek yogurt',
                        '1 clove of garlic',
                        '1 teaspoon dill',
                        '1 teaspoon lemon juice',
                        'flaky sea salt',
                        '2 tbsp butter',
                        '1 - 2 teaspoons chili powder'
                    ]}
                    steps=
                    {[
                    `Fill a medium sized pot, halfway with water. Bring the water to a  boil.`,
                    `In a bowl mix the greek yogurt, lemon juice, a pinch of salt, and minced garlic.`,
                    `In a small pan, heat the butter until it is browned. Take off from heat. Add the chili powder and mix. Set aside.`,
                    `Add the eggs to the boiling water. Cook for 5 minutes. Immediately take out of boiling water and put in ice cold water. Peel the eggs and set aside.`,
                    `On two plates, split the yogurt mixture. Make a swirl and for the eggs to sit in. Place the 2 eggs on top of the yogurt. Drizzle the butter chili oil on top of the eggs. Top with dill and flakey sea salt. `,
                    `Eat immediately with toast points or just on it's own.`
                    
                    ]}
                    preptime="10 minutes"
                    cooktime="5 minutes"
                    totaltime="15 minutes"
                    serves={2}
                    alt={"Turkish Eggs on a black table."}
                    icon_alt={"cooking"}
                />

            </ThemeProvider>
        )
    }

export default TurkishEggs

