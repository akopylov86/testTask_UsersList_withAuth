import {fetchUsersList} from "../api/usersList";
import {FETCH_USERS_LIST, FETCH_USERS_LIST_FAIL, FETCH_USERS_LIST_SUCCESS} from "../constatns/actionsList";

export const getUsersList = () => dispatch => {
    dispatch({type: FETCH_USERS_LIST})

    fetchUsersList().then( response =>
        response.json().then(data => dispatch({ type: FETCH_USERS_LIST_SUCCESS, payload: data.results }))
    ).catch( err =>
        dispatch({type: FETCH_USERS_LIST_FAIL, payload: err})
    )
}