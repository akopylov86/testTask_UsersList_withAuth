import {LOGIN, LOGOUT} from "../constatns/actionsList";

const initialState = {
    loggedIn: false,
    userInfo: null,
}

export function login(state = initialState, action){
    switch (action.type){
        case LOGIN:
            return {loggedIn: true, userInfo: action.payload}

        case LOGOUT:
            return {loggedIn: false, userInfo: null}

        default: return state;
    }

}