import '../assets/styles/authpage.scss';

const ConfirmationPage = () => {
    return (
        <div className="authpage">
            <div className="container">
                <div className="login__wrapper">
                    <form>
                        <h4>Регистрация - шаг 2</h4>
                        <p>Мы отправили вам на почту код для подтверждения регистации. Введите его, пожалуйста</p>
                        <input type="text" placeholder='Код с email' />
                        <button type='submit'>зарегистрироваться</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ConfirmationPage;