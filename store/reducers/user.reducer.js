import {SET_USER_DATA} from "../types";

const initialState = {
    userId: '',
    accessToken: '',
    credentialProof: '',
    credential: {}
};

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            const {userId, accessToken, credentialProof, credential} = action.payload
            return {
                ...state,
                userId,
                accessToken,
                credentialProof,
                credential
            }
        default:
            return state;
    }
}