import { connect } from "react-redux"
import Catalogtable from "./catalogtable"

const mapStateToProps = (state) => {
    return {
        items: state.catalog.item
    }
}
export const CatalogtableContainer = connect(mapStateToProps)(Catalogtable);