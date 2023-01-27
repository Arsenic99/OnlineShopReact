import '../assets/styles/authpage.scss';
import { useState } from 'react';
import password from '../assets/images/password.svg'

const RegisterPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const showpassword = () => {
        setShowPassword(!showPassword);
    }
    return (
        <div className="authpage">
            <div className="Login">
                <div className="container">
                    <div className="login__wrapper">
                        <h4>Регистрация</h4>
                        <form action='/confirmation'>
                            <input type="email" placeholder='Ваш email' required />
                            <input type={showPassword ? 'text' : "password"} placeholder='Ваш пароль' minLength={8} required />
                            <img src={password} alt="password" onClick={showpassword} />
                            <button type='submit'>продолжить</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RegisterPage;