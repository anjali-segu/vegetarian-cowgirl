import Recipe from "./recipe";

const TITLE_MULTIPLIER = 

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
    return {}
}