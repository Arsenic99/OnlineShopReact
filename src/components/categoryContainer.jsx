import { connect } from "react-redux";
import Category from "./category";

const mapStateToProps = (state) => {
    return {
        category: state.main.category
    }
    
}

export const CategoryContainer = connect(mapStateToProps)(Category)