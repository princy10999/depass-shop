import {SET_USER_DATA} from "../types";

/**
 * @typedef VerifiedUserData
 * @property {String} userId
 * @property {String} accessToken
 * @property {String} credentialProof
 * @property {String} credential
 */

/**
 *
 * @param {VerifiedUserData} userData
 * @returns {(function(*): Promise<void>)|*}
 */
export const setUserAddress_Action = (userData) => async (dispatch) => {
    dispatch({
        type: SET_USER_DATA,
        payload: userData,
    });
}
