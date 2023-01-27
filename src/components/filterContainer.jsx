import { connect } from "react-redux"
import Filter from "./filter"

const mapStateToProps = (state) => {
    return {
        price: state.catalog.price,
        color: state.catalog.color,
        size: state.catalog.size,
        sort: state.catalog.sort
    }
}

export const FilterContainer = connect(mapStateToProps)(Filter);