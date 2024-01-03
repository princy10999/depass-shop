import {ADD_TO_CART,REMOVE_FROM_CART} from "../types";

const initialState = {
    item: [],
};


export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const item = action.payload;
            return {
                ...state,
                item: [
                    ...state.item, item
                ],
            };
        case REMOVE_FROM_CART:
            const itemId  = action.payload;
            return {
                ...state,
                item: state.item.filter(item => item.id !== itemId)
            }
        default:
            return state;
    }
}
