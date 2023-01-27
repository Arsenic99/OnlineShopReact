import { connect } from "react-redux"
import { changeItemSize, decQuantity, deleteFromCard, incQuantity } from "../store/actioncreators/cardAC"
import Cart from "./cart"

const mapStateToProps = (state) => {
    return {
        items: state.cart.cart,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        setIncrement: (id) => {
            dispatch(incQuantity(id))
        },
        setDecrement: (id) => {
            dispatch(decQuantity(id))
        },
        deleteItem: (id) => {
            dispatch(deleteFromCard(id))
        },
        changeSize: (id, size) => {
            dispatch(changeItemSize(id, size))
        }
    }
}

export const CartContainer = connect(mapStateToProps,mapDispatchToProps)(Cart);