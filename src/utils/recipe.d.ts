import { Ingredient } from "./ingredient";

export default interface Recipe {
    path: string,
    image: string,
    icon: string,
    title: string,
    subtitle: string,
    subtitle2: string,
    categories?: string[],
    ingredients: Ingredient[][],
    steps: string[],
    preptime: string,
    cooktime: string,
    totaltime: string,
    serves: number,
    alt?: string,
    icon_alt?: string,
    indivisible?: boolean
}