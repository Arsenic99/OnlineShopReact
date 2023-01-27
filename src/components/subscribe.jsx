import '../assets/styles/subscribe.scss'

const Subscribe = () => {
    return (
        <div className="subscribe">
            <div className="container">
                <div className="subscribe__wrapper">
                    <h3>Узнайте  первым о новинках</h3>
                    <form>
                        <input type="email" placeholder="Ваш e-mail*" />
                        <button>ПОДПИСАТЬСЯ</button>
                        <p>Нажимая на кнопку «Подписаться», я соглашаюсь на обработку моих персональных данных и ознакомлен(а) с условиями конфиденциальности.</p>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Subscribe;