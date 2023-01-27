import { connect } from "react-redux"
import Order from "./order"

const mapStateToProps = (state) => {
    return {
        profile: state.cart.profileInfo
    }
}


export const OrderContainer = connect(mapStateToProps)(Order);