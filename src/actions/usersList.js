import {fetchUsersList} from "../api/usersList";
import {FETCH_USERS_LIST, FETCH_USERS_LIST_FAIL, FETCH_USERS_LIST_SUCCESS} from "../constatns/actionsList";

export const getUsersList = () => async dispatch => {
    dispatch({type: FETCH_USERS_LIST})

    try {
        const response = await fetchUsersList();
        const data = await response.json();
        dispatch({type: FETCH_USERS_LIST_SUCCESS, payload: data.results});
    } catch (e) {
        dispatch({type: FETCH_USERS_LIST_FAIL, payload: e})
    }
}