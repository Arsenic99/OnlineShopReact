import '../assets/styles/authpage.scss';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/login.scss'
import password from '../assets/images/password.svg'

const LoginPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const showpassword = () => {
        setShowPassword(!showPassword);
    }
    return (
        <div className="authpage">
            <div className="Login">
                <div className="container">
                    <div className="login__wrapper">
                        <h4>Авторизация</h4>
                        <form>
                            <input type="email" placeholder='Ваш email' required />
                            <input type={showPassword ? 'text' : "password"} placeholder='Ваш пароль' minLength={8} required />
                            <img src={password} alt="password" onClick={showpassword} />
                            <div className='d-flex justify-content-between'>
                                <Link to='/forget'>Забыли пароль?</Link>
                                <Link to='/register'>Нет аккаунта?</Link>
                            </div>
                            <button type='submit'>войти</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;