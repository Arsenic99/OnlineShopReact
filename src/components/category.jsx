import CategoryItem from "./category-item";
import '../assets/styles/category.scss'

const Category = (props) => {
    return (
        <div className="category">
            <div className="container">
                <h3>Категории</h3>
                <div className="d-grid">
                    {props.category.map(item=><CategoryItem key={item.id} category={item}/>)}
                </div>
            </div>
        </div>
    );
}

export default Category;