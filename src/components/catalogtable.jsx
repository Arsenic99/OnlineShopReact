import CatalogCard from "./catalogcard";
import Pagination from '@mui/material/Pagination';
import '../assets/styles/catalogtable.scss'
import { Link } from "react-router-dom";

const Catalogtable = (props) => {
    return (
        <div className="catalogtable">
            <div className="d-grid grid-temp-col3 catalogtable__cards">
                {props.items.map(item => (
                    <Link to={'/' + item.id} key={item.id}>
                        <CatalogCard item={item} />
                    </Link>
                ))}
            </div>
            <Pagination count={10} variant="outlined" />
        </div>

    );
}

export default Catalogtable;