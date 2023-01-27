import '../assets/styles/order.scss'
import Creditcard from './creditcard';
import { useState } from 'react';

const Order = (props) => {
    const [orderDetails, setOrderDetails] = useState({
        name: props.profile.name,
        surname: props.profile.surname,
        phone: props.profile.phone,
        email: props.profile.email,
        addressTown: props.profile.addressTown,
        addressHome: props.profile.addressHome,
        delivery: '',
        cost: 15000,
    });
    const changeDetail = (e) => {
        if (e.target.name === 'name') {
            setOrderDetails(orderDetails => ({
                ...orderDetails,
                name: e.target.value,
            }))
        }
        else
            if (e.target.name === 'surname') {
                setOrderDetails(orderDetails => ({
                    ...orderDetails,
                    surname: e.target.value,
                }))
            }
            else
                if (e.target.name === 'email') {
                    setOrderDetails(orderDetails => ({
                        ...orderDetails,
                        email: e.target.value,
                    }))
                }
                else
                    if (e.target.name === 'phone') {
                        setOrderDetails(orderDetails => ({
                            ...orderDetails,
                            phone: e.target.value,
                        }))
                    }
                    else
                        if (e.target.name === 'addressTown') {
                            setOrderDetails(orderDetails => ({
                                ...orderDetails,
                                addressTown: e.target.value,
                            }))
                        }
                        else
                            if (e.target.name === 'addressHome') {
                                setOrderDetails(orderDetails => ({
                                    ...orderDetails,
                                    addressHome: e.target.value,
                                }))
                            }
                            else
                                if (e.target.name === 'delivery') {
                                    setOrderDetails(orderDetails => ({
                                        ...orderDetails,
                                        delivery: e.target.value,
                                    }))
                                }

    };
    return (
        <div className='order'>
            <div className='container'>
                <form action="">
                    <div className='order__wrapper d-flex gap20'>
                        <div className='order__wrapper-left'>
                            <h5 className='order__title'>Оформление заказа</h5>
                            <div className='order__person'>
                                <p className='order__subtitle'>Персональный данные</p>
                                <div className="d-grid grid-temp-col2 gap5 order__person-details">
                                    <input type="text" placeholder='Ваше имя' value={orderDetails.name} name='name' onChange={changeDetail} required />
                                    <input type="text" placeholder='Ваша фамилия' value={orderDetails.surname} name='surname' onChange={changeDetail} required />
                                    <input type="text" placeholder='Ваш e-mail' value={orderDetails.email} name='email' onChange={changeDetail} required />
                                    <input type="text" placeholder='Ваш телефон' value={orderDetails.phone} name='phone' onChange={changeDetail} required />
                                </div>
                            </div>
                            <div className='order__delivery'>
                                <p className='order__subtitle'>Способ доставки</p>
                                <div>
                                    <label htmlFor="takeaway"><input type="radio" name="delivery" id="takeaway" value='pickup' onChange={changeDetail} required />Самовывоз</label>
                                    <label htmlFor="yandex"><input type="radio" name="delivery" id="yandex" value='courier' onChange={changeDetail} required />Yandex courier</label>
                                    <label htmlFor="kazpost"><input type="radio" name="delivery" id="kazpost" value='kazpost' onChange={changeDetail} required />Казпочта</label>
                                </div>
                            </div>
                            <div className='order__address'>
                                <p className='order__subtitle'>Адрес доставки</p>
                                <div className="d-grid grid-temp-col2 gap5 order__address-details">
                                    <input type="text" placeholder='Ваш город' value={orderDetails.addressTown} name='addressTown' onChange={changeDetail} required />
                                    <input type="text" placeholder='Ваш адрес' value={orderDetails.addressHome} name='addressHome' onChange={changeDetail} required />
                                </div>
                            </div>
                            <div className='order__payment'>
                                <p className='order__subtitle'>Оплата</p>
                                <Creditcard setOrderDetails={setOrderDetails} />
                            </div>
                        </div>
                        <div className='order__wrapper-right'>
                            <div className='order__summary'>
                                <p className='order__total'>Итого: <span className='order__total-price'>{orderDetails.cost} тенге</span></p>
                                <button type='submit' className='order__btn'>Оформить заказ</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Order;