import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../../utils/theme'
import RecipeBlogPostComplex from '../../blogposts/RecipeBlogPostComplex'

import Elote_Blog_Square from '../../assets/images/blog_posts/elote_blog_square.jpg';

import Cooking_Icon from '../../assets/images/icons/cooking_icon.png';

interface Props {
}


const DeconstructedElote = (props: Props) => {

    return (
        <ThemeProvider theme={theme}>
            <RecipeBlogPostComplex
                image={Elote_Blog_Square}
                icon={Cooking_Icon}
                title="Deconstructed Elote"
                subtitle={`This simple recipes celebrates corn anytime of the year. It is 
                           in chipotle mayo, lime juice, cilantro, and cojita cheese. `}
                subtitle2={`The first time I had elote was in Texas! Deconstructed elote makes
                            corn easy! I take a few shortcuts that makes this recipe quick and 
                            perfect as an appetizer. `}
                category_1_ingredients="Elote"
                ingredients_1={[
                    '2 cups frozen corn',
                    '1 tbsp butter',
                    '1/4 cup mayo',
                    '2 tbsp chipotle pepper, jarred or canned',
                    '1 tsp fresh lime juice',
                    '1/2 tsp chili powder',
                    '1/2 tsp chipotle powder',
                    '1/2 a lime to squeeze on top',
                    '2 tsp chopped cilantro',
                    '2 tbsp cojita cheese, crumbled'
                ]}
                steps={[`Heat up a pan to medium heat and melt butter. Add the frozen 
                        corn and cook until brown spots begin to appear and the corn
                        is fully cooked through.`,
                        `In a bowl, mix the mayo, chipotle pepper (jarred), lime juice, 
                        chili powder, and chipotle powder. Taste and adjust with additional seasoning
                        based on your spice tolerance.`,
                        `Divide the corn into 4 separate bowls. Drizzle with the chiptole sauce.
                        Evenly distribute the cojita cheese and cilantro on top. Squeeze
                        fresh lime juice to taste.`
                       
                ]}
                preptime="10 minutes"
                cooktime="5 minutes"
                totaltime="15 minutes"
                serves={4}
                alt={"Deconstructed elote in a bowl."}
                icon_alt={"cooking"}
            />

        </ThemeProvider>
    )
}

export default DeconstructedElote
