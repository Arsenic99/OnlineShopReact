import { GET_ITEM } from "../actions/catalogItem";

const initialState = {
    id: null,
    name: '',
    price: null,
}

export const CatalogItemPageReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_ITEM: {
            return {
                ...state, id: 1, name: 'Красная шуба', price: 16900
            }
        }
        default: return state;
    }
}