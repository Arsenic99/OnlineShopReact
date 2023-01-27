const initialState = {
    profileInfo: {
        id: 1,
        name: 'Arsen',
        surname: 'Baibulov',
        email: 'arsen09kz@gmail.com',
        phone: '87771159104',
        addressTown: 'Almaty',
        addressHome: '6-9-42'
    },
    order: [
        {id:6, name: 'Кремовое пальто', art: '123456', color: 'Красный', size: 'S', quantity: 1, price: 21900, status: 'Выполнен'},
        {id:2, name: 'Розовое пальто', art: '123456', color: 'Красный', size: 'S', quantity: 1, price: 21900, status: 'Выполнен'},
        {id:3, name: 'Синее пальто', art: '123456', color: 'Красный', size: 'S', quantity: 1, price: 21900, status: 'Выполнен'},
        {id:4, name: 'Красное пальто', art: '123456', color: 'Красный', size: 'S', quantity: 1, price: 21900, status: 'Выполнен'},
        {id:5, name: 'Черное пальто', art: '123456', color: 'Красный', size: 'S', quantity: 1, price: 21900, status: 'Выполнен'}
    ],
    isAuth: false
}

export const ProfilePageReducer = (state = initialState, action) => {
    return state
}