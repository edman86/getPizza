import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import filtersReducer from "./reducers/filtersReducer";
import productsReducer from "./reducers/productsReducer";
import cartReducer from "./reducers/cartReducer";
import sidebarReducer from "./reducers/sidebarReducer";
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    filters: filtersReducer,
    products: productsReducer,
    cart: cartReducer,
    sidebar: sidebarReducer
});

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);

export default store;