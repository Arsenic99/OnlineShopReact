import { connect } from "react-redux";
import { setToCard } from "../store/actioncreators/cardAC";
import { addToFavourite, getItem } from "../store/actioncreators/catalogItemAC";
import Catalogitem from "./catalogitem";

const mapStateToProps = (state) => {
    return {
        item: state.catalogItem
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getItem: (id) => {
            dispatch(getItem(id))
        },
        setToCard: (id, size) => {
            dispatch(setToCard(id, size))
        },
        addToFavourite: (id)=>{
            dispatch(addToFavourite(id))
        }
    }
}

export const CatalogItemContainer = connect(mapStateToProps, mapDispatchToProps)(Catalogitem);