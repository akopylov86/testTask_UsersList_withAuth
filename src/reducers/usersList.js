import {
    FETCH_USERS_LIST,
    FETCH_USERS_LIST_FAIL,
    FETCH_USERS_LIST_SUCCESS,
    FILTER_USER_LIST,
    SORT_USER_LIST
} from "../constatns/actionsList";
import {ASC} from "../constatns/sortTypes";

const initialState = {
    isLoading:false,
    data:[],
    sort:{
        field: "name.title",
        direction: ASC,
    },
    filter:"",
}

export function usersList(state = initialState, action){
    switch (action.type){
        case FETCH_USERS_LIST:
            return {...state, isLoading: true, data: []}
        case FETCH_USERS_LIST_SUCCESS:
            return {...state, isLoading: false, data: action.payload}
        case FETCH_USERS_LIST_FAIL:
            return {...state, isLoading: false, data: [{error: action.payload}], }
        case SORT_USER_LIST:
            return {...state, sort:action.payload}
        case FILTER_USER_LIST:
            return {...state, filter:action.payload}
        default: return state;
    }

}