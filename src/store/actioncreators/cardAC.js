import {CHANGE_ITEM_SIZE, DEC_QUANTITY, DELETE_FROM_CARD, INC_QUANTITY, SET_TO_CARD} from "../actions/cardItem" 

export const setToCard = (id, size) => {
    return {
        type: SET_TO_CARD,
        itemId: Number(id),
        itemSize: size
    }
}
export const incQuantity = (id) => {
    return {
        type: INC_QUANTITY,
        itemId: id
    }
}

export const decQuantity = (id) => {
    return {
        type: DEC_QUANTITY,
        itemId: id
    }
}

export const deleteFromCard = (id) => {
    return {
        type: DELETE_FROM_CARD,
        itemId: id
    }
}

export const changeItemSize = (id, size) => {
    return {
        type: CHANGE_ITEM_SIZE,
        itemId: id,
        itemSize: size
    }
}