import Cards from 'react-cc-cards';
import { useEffect, useState } from 'react';
import '../../node_modules/react-cc-cards/lib/styles.scss'
import '../assets/styles/creditcard.scss'

const Creditcard = (props) => {
    const [number, setNumber] = useState('');
    const [name, setName] = useState('');
    const [expiry, setExpiry] = useState('');
    const [cvc, setCvc] = useState('');
    const [focus, setFocus] = useState('');
    useEffect(()=>{
        props.setOrderDetails(orderDetails => ({
            ...orderDetails,
            cartname: name,
            cartnumber: number,
            cartexpiry: expiry,
            cartcvc: cvc,
        }))
    },[name, number, expiry, cvc])
    return (
        <div className='creditcard'>
            <Cards number={number} name={name} expiry={expiry} cvc={cvc} focused={focus}/>
            <div>
                <input type="tel" name="number" placeholder='Введите номер карты' value={number} onChange={e=>setNumber(e.target.value)} onFocus={e=>setFocus(e.target.name)} maxLength='16' pattern='[0-9]{16}' required/>
                <input type="text" name="name" placeholder='Введите имя владельца' value={name} onChange={e=>setName(e.target.value)} onFocus={e=>setFocus(e.target.name)} pattern='[A-Z]' required/>
                <input type="text" name="expiry" placeholder='MM/YY' value={expiry} onChange={e=>setExpiry(e.target.value)} onFocus={e=>setFocus(e.target.name)} maxLength='4' pattern='[0-9]{4}' required/>
                <input type="tel" name="cvc" placeholder='CVC' value={cvc} onChange={e=>setCvc(e.target.value)} onFocus={e=>setFocus(e.target.name)} maxLength='3' pattern='[0-9]{3}' required/>
            </div>
        </div>
    );
}

export default Creditcard;