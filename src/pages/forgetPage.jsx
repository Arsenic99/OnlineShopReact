import '../assets/styles/authpage.scss';

const ForgetPage = () => {
    return (
        <div className="authpage">
            <div className="container">
                <div className="login__wrapper">
                    <form action='/forgetconfirm'>
                        <h4>Забыли пароль?</h4>
                        <p>Введите свою почту и мы отправим вам код для сброса пароля и восстановления аккаунта:</p>
                        <input type="email" placeholder='Ваш email' />
                        <button type='submit'>отправить</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ForgetPage;