import React from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {LOGOUT} from "../constatns/actionsList";

const Menu = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-info">
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item ">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/users">Users</Link>
                    </li>
                </ul>
            </div>
        </nav>
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