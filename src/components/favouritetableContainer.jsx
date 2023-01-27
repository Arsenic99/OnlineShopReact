import { connect } from "react-redux"
import Favouritetable from "./favouritetable"

const mapStateToProps = (state) => {
    return {
        items: state.favourite.favourite
    }
}

export const FavouriteTableContainer = connect(mapStateToProps)(Favouritetable)