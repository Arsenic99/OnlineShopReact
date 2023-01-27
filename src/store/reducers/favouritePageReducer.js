import { ADD_TO_FAVOURITE } from "../actions/catalogItem";
import Kurtka from '../../assets/images/Kurtka.png';
import Palto from '../../assets/images/Palto.png';
import Shuba from '../../assets/images/Shuba.png';

const initialState = {
    favourite:[
        {id:1, img: Kurtka, name: 'Куртка', price: 1500, size: 'S', color: 'white'},
        {id:2, img: Palto, name: 'Пальто', price: 1500, size: 'S', color: 'white'},
        {id:3, img: Shuba, name: 'Шуба', price: 1500, size: 'S', color: 'white'},
    ]
};

export const FavouritePageReducer = (state = initialState, action) => {
    switch (action.type){
        case ADD_TO_FAVOURITE:{
            const newItem = {
                id:3,
                itemId: Number(action.itemId)
            }
            return {
                ...state, 
                favourite:[...state.favourite, newItem]
            }
        }
        default: return state
    }
}