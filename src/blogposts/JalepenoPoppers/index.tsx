import { createTheme, ThemeProvider } from '@mui/material/styles';
import { theme } from '../../utils/theme'
import RecipeBlogPostComplex from '../RecipeBlogPostComplex'




interface Props {
}


const JalepenoPoppers
    = (props: Props) => {

        return (
            <ThemeProvider theme={theme}>
                <RecipeBlogPostComplex
                    image={"/blog_posts/jalepeno_poppers_blog_square.jpg"}
                    icon='/icons/cooking_icon.png'
                    title="Puff Pastry Jalepeno Poppers"
                    subtitle={`This is a delicious treat that is spicy, creamy, and buttery! Perfect for any party.
                          Simple to make, and heats up well. `}
                    subtitle2={`Puff pastry Jalapeno Popper have the classic flavors of shredded cheese, 
                                spicy jalapenos, and cream cheese all wrapped up in a tender and flaky puff pastry! 
                                They are a portable appetizer that is perfect for game days, or any party! `}
                    category_1_ingredients="Elote"
                    ingredients_1={[
                        '6-7 jalapeño peppers',
                        '1 package (8 ounces) cream cheese, room temperature',
                        '1 cup (8 ounces) shredded jack cheese',
                        '2 green onions, chopped',
                        '1/2 teaspoon salt',
                        '1/4 teaspoon black pepper',
                        '1/2 teaspoon garlic powder',
                        '1 package puff pastry dough (typically use pepperidge farm)',
                        '1 egg, beaten',
                    ]}
                    steps={[`Preheat the oven to 400F.`,
                            `In a bowl, mix together cream cheese, shredded cheese, 
                            chopped green onion and salt with a spatula until evenly blended.`,
                            `Put on kitchen safe gloves. Cut the jalapeños into halves and remove seeds and ribs from each using a spoon.`,
                            `Roll out the puff pastry sheet dough.`,
                            `Using a pizza cutter, cut 3/4 inch wide vertical strips of dough.`,
                            `Fill each jalapeño half with cheese mixture and wrap each stuffed jalapeño with dough strips, and place on baking sheet with parchment paper.`,
                            `Brush the dough with the beaten egg to ensure golden brown exterior.`,
                            `Bake until the dough is golden brown, about 20-25 minutes. `


                    ]}
                    preptime="15 minutes"
                    cooktime="25 minutes"
                    totaltime="40 minutes"
                    serves={7}
                    alt={"Jalepeno poppers on black marble."}
                    icon_alt={"cooking"}
                />

            </ThemeProvider>
        )
    }

export default JalepenoPoppers

