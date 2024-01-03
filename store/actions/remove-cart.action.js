import { REMOVE_FROM_CART } from "../types";

export const removeFromCartAction = (itemId) => {
    return {
        type: REMOVE_FROM_CART,
        payload: itemId
    }
};