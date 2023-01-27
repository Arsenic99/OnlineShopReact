import '../assets/styles/authpage.scss';
import { useState } from "react";
import password from '../assets/images/password.svg'

const ForgetConfirmPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const showpassword = () =>{
        setShowPassword(!showPassword);
    }
    return (
        <div className="authpage">
            <div className="container">
                <div className="login__wrapper forgetconfirm">
                    <form>
                        <h4>Забыли пароль?</h4>
                        <p>Код из сообщения:</p>
                        <input type="text" placeholder='Код' required />
                        <input type={showPassword ? 'text' : "password"} placeholder='Ваш пароль' minLength={8} required />
                        <img src={password} alt="password" onClick={showpassword} />
                        <button type='submit'>установить пароль</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ForgetConfirmPage;