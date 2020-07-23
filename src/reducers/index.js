import { combineReducers } from 'redux';
import { routerReducer} from "react-router-redux";
import {login} from "./loginReducer";
import {usersList} from "./usersList";

export default combineReducers(
    {
        routing: routerReducer,
        login,
        usersList,
    }
)