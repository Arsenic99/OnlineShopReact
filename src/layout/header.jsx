import { Link, NavLink, useLocation } from 'react-router-dom';
import '../assets/styles/header.scss'
import Burgermenu from '../components/burgermenu';
import '../assets/styles/iconsfont.css'

const Header = (props) => {
    const location = useLocation();
    return (
        <header style={{position: location.pathname === '/' ? 'absolute' : 'relative'}}>
            <div className="container">
                <nav className='d-flex justify-content-between align-items-center'>
                    <Burgermenu />
                    <div className='nav-left d-flex justify-content-between align-items-center'>
                        <NavLink to='/new' style={{color: location.pathname === '/' ? 'white' : 'black'}}>new</NavLink>
                        <NavLink to='/catalog' style={{color: location.pathname === '/' ? 'white' : 'black'}}>Каталог</NavLink>
                        <NavLink to='/about' style={{color: location.pathname === '/' ? 'white' : 'black'}}>О нас</NavLink>
                    </div>
                    <div className='nav-center d-flex justify-content-center align-items-center'>
                        <Link to='/' className='icon-YANKI' style={{color: location.pathname === '/' ? 'white' : '#E0BEA2'}}>
                        </Link>
                    </div>
                    <div className='nav-right d-flex justify-content-end align-items-center'>
                        <Link to='/profile' className='icon-profile' style={{color: location.pathname === '/' ? 'white' : '#E0BEA2'}}>
                        </Link>
                        <Link to='/favourite' className='icon-favourite' style={{color: location.pathname === '/' ? 'white' : '#E0BEA2'}}>
                        </Link>
                        <Link to='/cart' className='icon-cart' style={{color: location.pathname === '/' ? 'white' : '#E0BEA2'}}>
                        </Link>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Header;