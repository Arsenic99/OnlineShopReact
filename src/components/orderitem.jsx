import Palto from '../assets/images/Palto.png'
import '../assets/styles/cartitem.scss'

const OrderItem = (props) => {
    return (
        <div className="d-grid cartitem">
            <div className='cartitem__img'>
                <img src={Palto} alt="" />
            </div>
            <div className='cartitem__art'>арт.: {props.item.art}</div>
            <div className='cartitem__name'>{props.item.name}</div>
            <div className='cartitem__color'>{props.item.color}</div>
            <div className='cartitem__size'>Размер: {props.item.size}</div>
            <div className='cartitem__quantity'>Количество: {props.item.quantity}</div>
            <div className='cartitem__price'>
            {props.item.price} тенге
            </div>
        </div>
    );
}

export default OrderItem;