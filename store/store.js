import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { createWrapper } from "next-redux-wrapper";
import rootReducer from "./reducers";
import {APIServiceMiddleware} from "./middleware";

const middleware = [thunk, APIServiceMiddleware];
const initalState = {};
export const store = createStore(
    rootReducer,
    initalState,
    composeWithDevTools(applyMiddleware(...middleware))
);

const makeStore = () => store;
export const wrapper = createWrapper(makeStore);