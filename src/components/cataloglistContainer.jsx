import { connect } from "react-redux"
import Cataloglist from "./cataloglist"

const mapStateToProps = (state) => {
    return {
        cataloglist: state.catalog.cataloglist,
    }
}

export const CataloglistContainer = connect(mapStateToProps)(Cataloglist);