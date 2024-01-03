import {ADD_TO_CART} from "../types";

export const addToCart_Action = (item) => async (dispatch) => {
    dispatch({
        type: ADD_TO_CART,
        payload: item,
    });
};