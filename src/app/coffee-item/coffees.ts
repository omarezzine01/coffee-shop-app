import {CoffeeItem} from './coffee.item';

export const COFFEES: CoffeeItem[] = [
    {
        name:'Latte',
        type:'Soft',
        intensity: 2,
        description: 'coffe with a lot of milk',
        imageURL:'./assets/img/latte.jpg'
    },
    {
        name:'Cappuccino',
        type:'Soft',
        intensity: 5,
        description: 'coffe with milk and foam',
        imageURL:'./assets/img/cappuccino.jpg'

    },
    {
        name:'Espresso',
        type:'Intense',
        intensity: 7,
        description: 'coffe with no milk',
        imageURL:'./assets/img/espresso.jpg'

    },
    {
        name:'Arrabica',
        type:'Midium',
        intensity: 6,
        description: 'coffee done according to the old arabic way',
        imageURL:'./assets/img/arabic.jpg'

    }
]
