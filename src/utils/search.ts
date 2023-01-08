import Ingredient, { ingredientToString } from "./ingredient";
import Recipe from "./recipe";
import { dynamicStep } from "./RecipeCardHelpers";

const WEIGHT: {
    readonly TITLE: 100
    readonly SUBTITLE: 10
    readonly SUBTITLE2: 10
    readonly CATEGORY: 50
    readonly INGREDIENT: 30
    readonly STEP: 10
} = {
    TITLE: 100,
    SUBTITLE: 10,
    SUBTITLE2: 10,
    CATEGORY: 50,
    INGREDIENT: 30,
    STEP: 10
}

type Ngrams = string[]

const searchRecipe = (queryNgrams: Ngrams, recipe: Recipe): number => {
    let score = 0;

    score += matchNgrams(queryNgrams, generateNgrams(queryNgrams[0].length, recipe.title)) * WEIGHT.TITLE;
    score += matchNgrams(queryNgrams, generateNgrams(queryNgrams[0].length, recipe.subtitle)) * WEIGHT.SUBTITLE;
    score += matchNgrams(queryNgrams, generateNgrams(queryNgrams[0].length, recipe.subtitle2)) * WEIGHT.SUBTITLE2;
    if (recipe.categories !== undefined) {
        for (let category of flatlistCategories(recipe)) {
            score += matchNgrams(queryNgrams, generateNgrams(queryNgrams[0].length, category)) * WEIGHT.CATEGORY;
        }
    }
    const flattenedIngredients = flatlistIngredients(recipe);
    for (let [ingredientKey, ingredient] of Object.entries(flattenedIngredients)) {
        score += matchNgrams(queryNgrams, generateNgrams(queryNgrams[0].length, ingredientToString(ingredientKey, ingredient))) * WEIGHT.INGREDIENT;
    }
    for (let step of recipe.steps) {
        score += matchNgrams(queryNgrams, generateNgrams(queryNgrams[0].length, dynamicStep(step, 1, flattenedIngredients, recipe.serves))) * WEIGHT.STEP;
    }

    return score;
}

/**
 * 
 * @param query the user's search query
 * @param recipes all recipes that can be returned
 * @returns the recipes placed into an object
 */
export const searchRecipes = (query: string, recipes: Recipe[]): {
    [recipeName: string]: {
        recipe: Recipe,
        searchScore: number
    }
} => {
    const scores: {
        [recipeName: string]: {
            recipe: Recipe,
            searchScore: number
        }
    } = {}


        const queryTrigrams = generateNgrams(Math.round(query.length * 0.80), query);

        for (let recipe of recipes) {
            scores[recipe.path] = {
                recipe: recipe,
                searchScore: searchRecipe(queryTrigrams, recipe)
            }
        }

    return scores
}

function generateNgrams(N: number, str: string): Ngrams {
    const ngrams: Ngrams = [];

    for (let i = 0; i <= str.length - N; ++i) {
        ngrams.push(str.slice(i, i + N));
    }

    return ngrams
}

function matchNgrams(src: Ngrams, dst: Ngrams): number {
    let matches = 0;

    for (let ngram of src.map(x => x.toLocaleLowerCase())) {
        matches += + dst.map(x => x.toLocaleLowerCase()).includes(ngram)
    }

    return matches// / dst.length
}

function flatlistIngredients(recipe: Recipe): { [key: string]: Ingredient } {

    if (recipe.categories !== undefined) {
        const flattenedIngredients: { [key: string]: Ingredient } = {};
        for (let [categoryName, { ingredients }] of Object.entries(recipe.categories)) {
            for (let [key, ingredient] of Object.entries(ingredients)) {
                flattenedIngredients[`${categoryName}-${key}`] = ingredient;
            }
        }
        return flattenedIngredients;
    } else if (recipe.ingredients !== undefined) {
        return recipe.ingredients;
    }

    return {}
}

function flatlistCategories(recipe: Recipe): string[] {
    if (recipe.categories !== undefined) { return Object.keys(recipe.categories); }
    return []
}
