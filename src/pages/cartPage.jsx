import '../assets/styles/cartpage.scss'
import { CartContainer } from "../components/cartContainer";
import { OrderContainer } from "../components/orderContainer";

const CartPage = () => {
    return (
        <div className="cartpage">
            <CartContainer/>
            <OrderContainer/>
        </div>
    );
}

export default CartPage;