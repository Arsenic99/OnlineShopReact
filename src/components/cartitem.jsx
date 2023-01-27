import Palto from '../assets/images/Palto.png'
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useEffect, useState } from 'react';
import '../assets/styles/cartitem.scss'

const CartItem = (props) => {
    useEffect(()=>{
        setSize(props.item.size);
        setQuantity(props.item.quantity);
    },[props.item.size, props.item.quantity])
    const [size, setSize] = useState('');
    const [quantity, setQuantity] = useState(0);
    return (
        <div className="d-grid cartitem">
            <div className='cartitem__img'>
                <img src={Palto} alt="" />
            </div>
            <div className='cartitem__art'>арт.: {props.item.art}</div>
            <div className='cartitem__name'>{props.item.name}</div>
            <div className='cartitem__color'>{props.item.color}</div>
            <div className='cartitem__size'>
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <Select value={size} onChange={(event)=>{props.changeSize(props.item.id, event.target.value)}} displayEmpty inputProps={{ 'aria-label': 'Without label' }}>
                        <MenuItem value={'S'}>S</MenuItem>
                        <MenuItem value={'M'}>M</MenuItem>
                        <MenuItem value={'L'}>L</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div className='cartitem__quantity'>
                <div className='counter d-iflex align-items-center'>
                    <button className='counter__decrement' onClick={()=>{quantity > 1 && props.setDecrement(props.item.id)}}>-</button>
                    <input className='counter__quantity' value={quantity} onChange={event => setQuantity(event.target.value)}/>
                    <button className='counter__increment' onClick={()=>{props.setIncrement(props.item.id)}}>+</button>
                </div>
            </div>
            <div className='cartitem__price'>
            {props.item.price} тенге
            </div>
            <div className='cartitem__delete icon-delete' onClick={()=>{props.deleteItem(props.item.id)}}>
            </div>
            <div className='cartitem__delete-mobile' onClick={()=>{props.deleteItem(props.item.id)}}>
                <span></span>
                <span></span>
            </div>
        </div>
    );
}

export default CartItem;