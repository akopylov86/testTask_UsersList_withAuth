import React from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {LOGOUT} from "../constatns/actionsList";

const Menu = () => {
    return (
        <div className='menu'>
            <Link to="/">Main page</Link>
            <Link to="/users">Users</Link>
        </div>


    )
}

export default connect(
    state => ({
        loginInfo: state.login,
    }),
    dispatch => ({
        onLogout: () => {
            dispatch({type: LOGOUT})
        },
    })
)(Menu);