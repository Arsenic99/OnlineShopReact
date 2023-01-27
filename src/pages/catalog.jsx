import '../assets/styles/catalogpage.scss'
import { CataloglistContainer } from '../components/cataloglistContainer';
import { CatalogtableContainer } from '../components/catalogtableContainer';
import { FilterContainer } from '../components/filterContainer';

const Catalog = (props) => {
    return (
        <div className="catalogPage">
            <div className="container">
                <div className="catalogmain">
                    <CataloglistContainer />
                    <FilterContainer />
                    <CatalogtableContainer/>
                </div>
            </div>
        </div>
    );
}

export default Catalog;