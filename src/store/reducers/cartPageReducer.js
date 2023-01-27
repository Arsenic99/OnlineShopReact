import { CHANGE_ITEM_SIZE, DEC_QUANTITY, DELETE_FROM_CARD, INC_QUANTITY, SET_TO_CARD } from "../actions/cardItem"

const initialState = {
    cart: [
        {id:6, name: 'Кремовое пальто', art: '123456', color: 'Красный', size: 'S', quantity: 1, price: 21900},
        {id:2, name: 'Розовое пальто', art: '123456', color: 'Красный', size: 'S', quantity: 1, price: 21900},
        {id:3, name: 'Синее пальто', art: '123456', color: 'Красный', size: 'S', quantity: 1, price: 21900},
        {id:4, name: 'Красное пальто', art: '123456', color: 'Красный', size: 'S', quantity: 1, price: 21900},
        {id:5, name: 'Черное пальто', art: '123456', color: 'Красный', size: 'S', quantity: 1, price: 21900}
    ],
    profileInfo: {
        id: 1,
        name: 'Arsen',
        surname: 'Baibulov',
        email: 'arsen09kz@gmail.com',
        phone: '87771159104',
        addressTown: 'Almaty',
        addressHome: '6-9-42',
    }
}

export const CartPageReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_TO_CARD:{
            let newItem = {
                id: action.itemId,
                size: action.itemSize
            }
            return {
                ...state,
                cart: [...state.cart, newItem]
            }
        }
        case INC_QUANTITY:{
            return{
                ...state,
                cart: state.cart.map((item)=>{
                    if(item.id === action.itemId){
                        return {
                            ...item, quantity: item.quantity + 1
                        }
                    }
                    return item
                })
            }
        }
        case DEC_QUANTITY:{
            return{
                ...state,
                cart: state.cart.map((item)=>{
                    if(item.id === action.itemId){
                        return {
                            ...item, quantity: item.quantity - 1
                        }
                    }
                    return item
                })
            }
        }
        case DELETE_FROM_CARD:{
            return {
                ...state,
                cart: state.cart.filter((item)=>item.id!==action.itemId)
            }
        }
        case CHANGE_ITEM_SIZE:{
            return{
                ...state,
                cart: state.cart.map((item)=>{
                    if(item.id === action.itemId){
                        return {
                            ...item, size: action.itemSize
                        }
                    }
                    return item
                })
            }
        }
        default: {return state}
    }
}