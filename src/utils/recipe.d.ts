import { Ingredient } from "./ingredient";

export default interface Recipe {
    path: string,
    images: {
        src: string,
        alt?: string
    }[]
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
    icon_alt?: string,
    indivisible?: boolean
}