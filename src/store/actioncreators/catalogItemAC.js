import { ADD_TO_FAVOURITE, GET_ITEM } from "../actions/catalogItem"

export const getItem = (id) => {
    return {
        type: GET_ITEM,
        itemId: id
    }
}

export const addToFavourite = (id) => {
    return {
        type: ADD_TO_FAVOURITE,
        itemId: id
    }
}