import '../assets/styles/favouritepage.scss'
import { FavouriteTableContainer } from '../components/favouritetableContainer';

const FavouritePage = () => {
    return (
        <div className="favouritepage">
            <div className="container">
            <h5>Избранное</h5>
            <FavouriteTableContainer/>
        </div>
        </div>
    );
}

export default FavouritePage;