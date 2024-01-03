import { combineReducers } from "redux";
import {userReducer} from "./user.reducer";
import {cartReducer} from "./cart.reducer";


export default combineReducers({
    cart:cartReducer,
    user: userReducer,
});


// const rootReducer = (state, action) => {
//     if (action.type === RESET_STORE) {
//         state = undefined;
//     }
//     return appReducers(state, action)
// }


