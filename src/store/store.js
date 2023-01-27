import { combineReducers, createStore } from "redux";
import { CartPageReducer } from "./reducers/cartPageReducer";
import { CatalogItemPageReducer } from "./reducers/catalogItemPageReducer";
import { catalogPageReducer } from "./reducers/catalogPageReducer";
import { FavouritePageReducer } from "./reducers/favouritePageReducer";
import { mainPageReducer } from "./reducers/mainPageReducer";
import { ProfilePageReducer } from "./reducers/profilePageReducer";

const reducers = combineReducers({
    main: mainPageReducer, 
    catalog: catalogPageReducer, 
    catalogItem: CatalogItemPageReducer, 
    cart: CartPageReducer, 
    profile: ProfilePageReducer,
    favourite: FavouritePageReducer,
});

export const store = createStore(reducers);