import '../assets/styles/category-item.scss'

const CategoryItem = (props) => {
    return (
        <div className='category__item'>
            <img src={props.category.img} alt="Man" />
            <div>{props.category.gender}</div>
        </div>
    );
}

export default CategoryItem;