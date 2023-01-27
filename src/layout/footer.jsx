import { Link } from "react-router-dom";
import '../assets/styles/footer.scss'
import '../assets/styles/iconsfont.css'

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="footer d-grid grid-temp-col4">
                    <div>
                        <h5>КОМПАНИЯ</h5>
                        <Link>О нас</Link>
                        <Link>Контакты</Link>
                    </div>
                    <div>
                        <h5>ПОЛЕЗНОЕ</h5>
                        <Link>Оплата и доставка</Link>
                        <Link>Условия возврата</Link>
                        <Link>Бонусная система</Link>
                    </div>
                    <div>
                        <h5>ПОКУПАТЕЛЮ</h5>
                        <Link>Избранное</Link>
                        <Link>Публичная оферта</Link>
                        <Link>Политика конфиденциальности</Link>
                    </div>
                    <div>
                        <h5>КОНТАКТЫ</h5>
                        <div className="d-flex footer__social">
                            <Link className="icon-instagram">
                            </Link>
                            <Link className="icon-telegram">
                            </Link>
                        </div>
                        <a href="tel:87771159104">+38(073) 096 36 44</a>
                        <a href="mailto:arsen@mail.ru">info@yanki.com</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;