import man from '../../assets/images/man.png'
import woman from '../../assets/images/woman.png'
import child from '../../assets/images/child.png'
import accessories from '../../assets/images/accessories.png'

const initialState = {
    category: [
        { id: 1, gender: 'Мужской', img: man },
        { id: 2, gender: 'Женский', img: woman },
        { id: 3, gender: 'Детское', img: child },
        { id: 4, gender: 'Аксессуары', img: accessories },
    ],
}

export const mainPageReducer = (state = initialState, action) => {
    return state;
}