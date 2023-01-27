import { useState } from 'react';
import '../assets/styles/cataloglist.scss'

const Cataloglist = (props) => {
    const [active, setActive] = useState(false)
    const catalog = () => {
        if(window.innerWidth <= 425){
            setActive(!active)
        }
    }
    return (
        <div className="cataloglist">
            <h6 onClick={catalog}>Каталог</h6>
            <div className='catalotlist__items'>
            {props.cataloglist.map(item =>
                <p key={item.id}>{item.catalogitem}</p>
            )}
            </div>
        </div>
    );
}

export default Cataloglist;