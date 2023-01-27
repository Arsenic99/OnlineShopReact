import '../assets/styles/personalinfo.scss'

const PersonalInfo = () => {
    return (
        <div className="personalinfo">
            <div className="container">
                <form>
                    <h5>Персональные данные</h5>
                    <div className="d-grid grid-temp-col4 personalinfo__data">
                        <input type="text" placeholder="Ваше имя" />
                        <input type="text" placeholder="Ваша фамилия" />
                        <input type="text" placeholder="Ваш email" />
                        <input type="text" placeholder="Ваш телефон" />
                    </div>
                    <h5>Адрес доставки</h5>
                    <div className="d-grid grid-temp-col2 personalinfo__address">
                        <input type="text" placeholder="Ваш город" />
                        <input type="text" placeholder="Ваш адрес" />
                    </div>
                    <button className='personalinfo__btn'>Обновить информацию</button>
                </form>
            </div>
        </div>
    );
}

export default PersonalInfo;