import CartItem from "./cartitem";

const Cart = (props) => {
    return (
        <div className="cart">
            <div className="container">
                {
                    props.items.map(item=><CartItem key={item.id} item={item} setIncrement={props.setIncrement} setDecrement={props.setDecrement} deleteItem={props.deleteItem} changeSize={props.changeSize}/>)
                }
            </div>
        </div>
    );
}

export default Cart;