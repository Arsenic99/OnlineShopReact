import Kurtka from '../../assets/images/Kurtka.png';
import Palto from '../../assets/images/Palto.png';
import Shuba from '../../assets/images/Shuba.png';

const initialState = {
    cataloglist: [
        { id: 1, catalogitem: 'Шубы' },
        { id: 2, catalogitem: 'Пальто' },
        { id: 3, catalogitem: 'Костюм' },
        { id: 4, catalogitem: 'Юбки' },
    ],
    size:[
        {id:1, sizeitem: 'XS'},
        {id:2, sizeitem: 'S'},
        {id:3, sizeitem: 'M'},
        {id:4, sizeitem: 'L'},
        {id:5, sizeitem: 'XL'},
    ],
    color: [
        {id:1, coloritem: 'белый'},
        {id:2, coloritem: 'черный'},
        {id:3, coloritem: 'зеленый'},
    ],
    price:[
        {id:1, priceitem: 'до 10000тг'},
        {id:2, priceitem: 'от 10000 до 20000тг'},
        {id:3, priceitem: 'от 20000 до 50000тг'},
        {id:4, priceitem: 'от 50000 до 100000тг'},
        {id:5, priceitem: 'от 100000'},
    ],
    sort:[
        {id:1, sortitem: 'вверх'},
        {id:2, sortitem: 'вниз'},
    ],
    item:[
        {id:1, img: Kurtka, name: 'Куртка', price: 1500, size: 'S', color: 'white'},
        {id:2, img: Palto, name: 'Пальто', price: 1500, size: 'S', color: 'white'},
        {id:3, img: Shuba, name: 'Шуба', price: 1500, size: 'S', color: 'white'},
    ]
}

export const catalogPageReducer = (state = initialState, action) => {
    return state;
}