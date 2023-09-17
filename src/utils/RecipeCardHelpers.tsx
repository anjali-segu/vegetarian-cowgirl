import React from "react"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import Ingredient, { ingredientToString } from "./ingredient"
import { theme } from "./theme"

export const generateCategories = (multiplier: number, ingredients?: { [key: string]: Ingredient }, categories?: { [key: string]: { ingredients: { [key: string]: Ingredient } } }) => {
    if (categories !== undefined) {
        const retval: JSX.Element[] = []
        for (const [categoryName, categoryObject] of Object.entries(categories)) {
            retval.push((
                <React.Fragment key={categoryName}>
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
                            {categoryName}
                        </Typography>

                        <ul>
                            {Object.entries(categoryObject.ingredients).filter(([, ingredient]) => !ingredient.hidden).map(([ingredientKey, ingredient]) => (
                                <li key={ingredientKey} dangerouslySetInnerHTML={{ __html: ingredientToString(ingredientKey, ingredient, multiplier) }} style={{
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
    } else if (ingredients !== undefined) {
        return (
            <>
                <Grid item xs={1}>
                </Grid>

                <Grid item xs={10}>
                    <ul>
                        {Object.entries(ingredients).filter(([, ingredient]) => !ingredient.hidden).map(([ingredientKey, ingredient]) => (
                            <li key={ingredientKey} dangerouslySetInnerHTML={{ __html: ingredientToString(ingredientKey, ingredient, multiplier) }} style={{
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
            </>
        )
    }
}

const dynamicStep = (step: string, multiplier: number, flattenedIngredients: { [key: string]: Ingredient }, serves: number) => {
    const regex = /\^(.+?)\$/g;
    step = step.replaceAll(`!serves`, `${serves * multiplier}`)
    Object.entries(flattenedIngredients).forEach(([ingredientKey, ingredient]) => {
        step = step.replaceAll(`!${ingredientKey}`, () => ingredientToString(ingredientKey, ingredient, multiplier))
        const matches = [...step.matchAll(regex)];
        for (const match of matches) {
            step = step.replaceAll(match[0], `<span class="equipment" data-highlighted="false">${match[1]}</span>`)
        }
    })
    return step
}

export const generateSteps = (steps: string[], multiplier: number, categories: { [key: string]: { ingredients: { [key: string]: Ingredient } } } | undefined, ingredients: { [key: string]: Ingredient } | undefined, serves: number) => {
    if (categories !== undefined) {
        return generateStepsFromCategories(steps, multiplier, categories, serves);
    } else if (ingredients !== undefined) {
        return generateStepsFromIngredients(steps, multiplier, ingredients, serves);
    } else {
        return (<></>)
    }
}

const generateStepsFromCategories = (steps: string[], multiplier: number, categories: { [key: string]: { ingredients: { [key: string]: Ingredient } } }, serves: number) => {
    const flattenedIngredients: { [key: string]: Ingredient } = {};
    for (const [, { ingredients }] of Object.entries(categories)) {
        for (const [key, ingredient] of Object.entries(ingredients)) {
            flattenedIngredients[key] = ingredient;
        }
    }
    return generateStepsFromIngredients(steps, multiplier, flattenedIngredients, serves);
}

const generateStepsFromIngredients = (steps: string[], multiplier: number, ingredients: { [key: string]: Ingredient }, serves: number) => {
    const flattenedIngredients = Object.entries(ingredients).sort(([a,], [b,]) => b.localeCompare(a)).reduce((acc, [key, val]) => { acc[key] = val; return acc; }, {} as { [key: string]: Ingredient });
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
