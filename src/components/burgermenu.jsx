import '../assets/styles/burgermenu.scss'
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

const Burgermenu = () => {
    const location = useLocation();
    const [active, setActive] = useState(false)
    const setBurgerActive = () => {
        setActive(!active);
    }
    return (
        <div className='burgermenu'>
            <div className={active ? 'burgermenu__btn burgermenu__btn-active' : 'burgermenu__btn'} onClick={setBurgerActive}>
                <span style={{backgroundColor: location.pathname === '/' ? 'white' : '#E0BEA2'}}></span>
                <span style={{backgroundColor: location.pathname === '/' ? 'white' : '#E0BEA2'}}></span>
                <span style={{backgroundColor: location.pathname === '/' ? 'white' : '#E0BEA2'}}></span>
            </div>
            <div className={active ? "burgermenu__body w-100" : "burgermenu__body w-0"}>
                <Link>Поиск</Link>
                <Link to='/profile'>Аккаунт</Link>
                <Link>new</Link>
                <Link to='/catalog'>Каталог</Link>
                <Link to='/favourite'>Избранное</Link>
                <Link>О нас</Link>
            </div>
        </div>
    );
}

export default Burgermenu;