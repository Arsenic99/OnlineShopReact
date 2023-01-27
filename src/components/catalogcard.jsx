import '../assets/styles/catalogcard.scss'

const CatalogCard = (props) => {
    return (
        <div className="catalogcard">
            <img src={props.item.img} alt="" />
            <p className='catalogcard__name'>{props.item.name}</p>
            <p className='catalogcard__price'>{props.item.price}</p>
            <p className='catalogcard__size'>{props.item.size}</p>
        </div>
    );
}

export default CatalogCard;