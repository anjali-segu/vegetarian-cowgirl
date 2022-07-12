import React from "react"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import Ingredient, { ingredientToString } from "./ingredient"
import { theme } from "./theme"

export const generateCategories = (multiplier: number, ingredients: Ingredient[][], categories?: string[]) => {
    if (categories) {
        let retval: JSX.Element[] = []
        let end = Math.min(categories.length, ingredients.length)
        for (let i = 0; i < end; ++i) {
            retval.push((
                <React.Fragment key={categories[i]}>
                    <Grid item xs={1}>
                    </Grid>

                    <Grid item xs={10}>
                        <Typography sx={{
                            fontFamily: 'Karla',
                            fontWeight: 700,
                            color: 'black',
                            marginTop: theme.spacing(4)
                        }}
                            gutterBottom
                            variant="body1"
                            component="div">
                            {categories[i]}
                        </Typography>

                        <ul>
                            {ingredients[i].filter(ingredient => !ingredient.hidden).map(ingredient => (
                                <li key={ingredient.key} dangerouslySetInnerHTML={{ __html: ingredientToString(ingredient, multiplier) }} style={{
                                    fontFamily: 'Karla',
                                    color: 'black',
                                    fontWeight: 500,
                                    fontSize: theme.spacing(4),
                                }} />
                            ))}
                        </ul>
                    </Grid>

                    <Grid item xs={1}>
                    </Grid>
                </React.Fragment>
            ))
        }
        return retval
    } else {
        return ingredients.map(ingredients => (
            <React.Fragment key={ingredients.join(',')}>
                <Grid item xs={1}>
                </Grid>

                <Grid item xs={10}>
                    <ul>
                        {ingredients.filter(ingredient => !ingredient.hidden).map(ingredient => (
                            <li key={ingredient.key} dangerouslySetInnerHTML={{ __html: ingredientToString(ingredient, multiplier) }} style={{
                                fontFamily: 'Karla',
                                color: 'black',
                                fontWeight: 500,
                                fontSize: theme.spacing(4),
                            }} />
                        ))}
                    </ul>
                </Grid>

                <Grid item xs={1}>
                </Grid>
            </React.Fragment>
        ))
    }
}

const dynamicStep = (step: string, multiplier: number, flattenedIngredients: Ingredient[], serves: number) => {
    step = step.replaceAll(`!serves`, `${serves * multiplier}`)
    flattenedIngredients.forEach((ingredient) => {
        step = step.replaceAll(`!${ingredient.key}`, () => ingredientToString(ingredient, multiplier))
    })
    return step
}

export const generateSteps = (steps: string[], multiplier: number, ingredients: Ingredient[][], serves: number) => {
    const flattenedIngredients = ingredients.flat().sort((a, b) => b.key.localeCompare(a.key))
    return (
        <>
            <Grid item xs={1}>
            </Grid>

            <Grid item xs={10}>
                <Typography sx={{
                    fontFamily: 'Jost',
                    fontWeight: 700,
                    color: 'black',
                    marginTop: theme.spacing(8)
                }}
                    gutterBottom
                    variant="body1"
                    component="div">
                    Steps
                </Typography>
            </Grid>

            <Grid item xs={1}>
            </Grid>


            <Grid item xs={1}>
            </Grid>

            <Grid item xs={10}>



                <ol>
                    {steps.map(step => (
                        <li key={step} dangerouslySetInnerHTML={{ __html: dynamicStep(step, multiplier, flattenedIngredients, serves) }} style={{
                            fontFamily: 'Karla',
                            color: 'black',
                            fontWeight: 500,
                            fontSize: theme.spacing(4),
                        }} />
                    ))}
                </ol>

            </Grid>

            <Grid item xs={1}>
            </Grid>
        </>
    )
}
