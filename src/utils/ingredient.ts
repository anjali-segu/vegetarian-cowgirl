import { units, unitToString } from "./unit"

interface Ingredient {
    key: string
    quantity?: number
    unitTag?: string
    ingredient?: string
    hidden?: boolean
}

const unicodeFractions = {
    '¼': 1 / 4,
    '½': 1 / 2,
    '¾': 3 / 4,
    '⅐': 1 / 7,
    '⅑': 1 / 9,
    '⅒': 1 / 10,
    '⅓': 1 / 3,
    '⅔': 2 / 3,
    '⅕': 1 / 5,
    '⅖': 2 / 5,
    '⅗': 3 / 5,
    '⅘': 4 / 5,
    '⅙': 1 / 6,
    '⅚': 5 / 6,
    '⅛': 1 / 8,
    '⅜': 3 / 8,
    '⅝': 5 / 8,
    '⅞': 7 / 8,
    '1': 1
}

const numberPrettifier = (number: number) => {
    const characteristic = Math.floor(number)
    const mantissa = number - characteristic
    if (number === characteristic) { return `${number}` }
    let distance = Infinity
    let closest = ""
    for (const [key, value] of Object.entries(unicodeFractions)) {
        const difference = Math.abs(mantissa - value)
        if (difference < distance) {
            distance = difference
            closest = key
        }
    }
    if (closest === '1') { return `${characteristic + 1}` }
    if (characteristic !== 0) { return `${characteristic} ${closest}` }
    return `${closest}`
}

export const ingredientToString = (ingredient: Ingredient, multiplier: number = 1) => {
    if (ingredient.quantity && ingredient.unitTag) {
        const trueQuantity = ingredient.quantity * multiplier
        if (ingredient.ingredient) { return `${numberPrettifier(trueQuantity)} ${unitToString(trueQuantity, units[ingredient.unitTag])} ${ingredient.ingredient}` }
        return `${numberPrettifier(trueQuantity)} ${unitToString(trueQuantity, units[ingredient.unitTag])}`
    } else if (ingredient.ingredient) {
        return `${ingredient.ingredient}`
    } else {
        return `${ingredient.key}`
    }
}

export default Ingredient
