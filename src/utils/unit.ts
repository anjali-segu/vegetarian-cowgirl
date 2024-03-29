interface Unit {
    readonly singular: string
    readonly fractional?: string
    readonly plural?: string
}

export const units: { [tag: string]: Unit } = {
    avocado: {
        fractional: 'an avocado',
        singular: 'avocado',
        plural: 'avocados'
    },
    'bay leaf': {
        fractional: 'a bay leaf',
        singular: 'bay leaf',
        plural: 'bay leaves'
    },
    block : {
        fractional: 'a block',
        singular: 'block',
        plural: 'blocks'
    },
    box: {
        fractional: 'a box',
        singular: 'box',
        plural: 'boxes'
    },
    bread: {
        fractional: 'a slice of bread',
        singular: 'slice of bread',
        plural: 'slices of bread'
    },
    can: {
        fractional: 'a can',
        singular: 'can',
        plural: 'cans'
    },
    carrot: {
        fractional: 'a carrot',
        singular: 'carrot',
        plural: 'carrots'
    },
    cookie:{
        fractional: 'a cookie',
        singular: 'cookie',
        plural: 'cookies'
    },  
    cup: {
        fractional: 'cup',
        singular: 'cup',
        plural: 'cups'
    },
    'cherry tomato': {
        fractional: 'a cherry tomato',
        singular: 'cherry tomato',
        plural: 'cherry tomatoes'
    },
    clove: {
        fractional: 'a clove',
        singular: 'clove',
        plural: 'cloves'
    },
    crust: {
        fractional: 'a crust',
        singular: 'crust',
        plural: 'crusts'
    },
    egg: {
        fractional: 'an egg',
        singular: 'egg',
        plural: 'eggs'
    },
    'egg yolk': {
        fractional: 'an egg yolk',
        singular: 'egg yolk',
        plural: 'egg yolks'
    },
    'espresso shot': {
        fractional: 'an espresso shot',
        singular: 'espresso shot',
        plural: 'espresso shots'
    },
    gram: {
        singular: 'g'
    },
    'graham cracker': {
        fractional: 'a graham cracker',
        singular: 'graham cracker',
        plural: 'graham crackers',
    },
    'green onion': {
        fractional: 'a green onion',
        singular: 'green onion',
        plural: 'green onions'
    },
    head: {
        fractional: 'a head',
        singular: 'head',
        plural: 'heads'
    },
    'jalapeno pepper': {
        fractional: 'a jalapeño pepper',
        singular: 'jalapeño pepper',
        plural: 'jalapeño peppers'
    },
    'large carrot': {
        fractional: 'a large carrot',
        singular: 'large carrot',
        plural: 'large carrots'
    },
    'large egg': {
        fractional: 'a large egg',
        singular: 'large egg',
        plural: 'large eggs'
    },
    'large egg white': {
        fractional: 'a large egg white',
        singular: 'large egg white',
        plural: 'large egg whites'
    },
    leaf: {
        fractional: 'a leaf',
        singular: 'leaf',
        plural: 'leaves'
    },
    lime: {
        fractional: 'a lime',
        singular: 'lime',
        plural: 'limes'
    },
    onion: {
        fractional: 'an onion',
        singular: 'onion',
        plural: 'onions'
    },
    oz: {
        singular: 'oz'
    },
    package: {
        fractional: 'a package',
        singular: 'package',
        plural: 'packages'
    },
    peach: {
        fractional: 'a peach',
        singular: 'peach',
        plural: 'peaches'
    },
    piece: {
        fractional: 'a piece',
        singular: 'piece',
        plural: 'pieces,'
    },
    pinch: {
        singular: 'pinch',
    },
    pint : {
        fractional: 'a pint',
        singular: 'pint',
        plural: 'pints'
    },  
    pod: {
        fractional: 'a pod',
        singular: 'pod',
        plural: 'pods'
    },
    ramekin: {
        fractional: 'a ramekin',
        singular: 'ramekin',
        plural: 'ramekins'
    },
    sheet: {
        fractional: 'a sheet',
        singular: 'sheet',
        plural: 'sheets'
    },
    'single 9 inch pie crust': {
        fractional: 'a single 9 inch pie crust',
        singular: 'single 9 inch pie crust',
        plural: 'single 9 inch pie crusts'
    },
    slice: {
        fractional: 'a slice',
        singular: 'slice',
        plural: 'slices'
    },
    'small box': {
        fractional: 'a small box',
        singular: 'small box',
        plural: 'small boxes'
    },
    'small white or yellow onion': {
        fractional: 'a small white or yellow onion',
        singular: 'small white or yellow onion',
        plural: 'small white or yellow onions'
    },
    stick: {
        fractional: 'a stick',
        singular: 'stick',
        plural: 'sticks'
    },
    tin : {
        singular: 'tin',
        plural: 'tins'
    },
    tbsp: {
        singular: 'tbsp'
    },
    tsp: {
        singular: 'tsp'
    }
}

export const unitToString = (quantity: number, _unit: Unit) => {
    if (quantity < 0) { return '' }
    if (quantity === 0 || quantity > 1) { return _unit.plural ?? _unit.singular }
    if (quantity < 1) { return _unit.fractional ?? _unit.singular }
    return _unit.singular
}

export default Unit
