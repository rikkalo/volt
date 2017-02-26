import { combineReducers } from "redux";

import customers from "./customers";
import products from "./products";

// Combine Reducers
export default combineReducers({
	customers,
	products
});
