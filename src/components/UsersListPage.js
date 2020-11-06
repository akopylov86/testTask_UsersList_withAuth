import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {LOGOUT} from "../constatns/actionsList";
import Menu from "./Menu";
import {Link} from "react-router-dom";
import UsersList from "./UsersList";
import {getUsersList} from "../actions/usersList";
import {Circle} from "react-preloaders";
import FilterSort from "./FilterSort";


const UsersListPage = ({loginInfo, onLogout, isLoading, onGetUsersList}) => {
    useEffect(()=>{
        onGetUsersList()

    }, [onGetUsersList])
    return (
        <div  >
            <Menu/>
            {loginInfo.loggedIn
                ? <div className="container-md mt-3">
                    {isLoading
                        ? <Circle/>
                        :<>
                             <FilterSort/>
                             <UsersList />
                             <Link to='/' onClick={onLogout}>Logout</Link>
                         </>
                    }

                  </div>
                : <div className="container-md" >No permission. You need to login on <Link to='/'>Main page</Link></div>
            }

        </div>
    )
}

export default connect(
    state => ({
        loginInfo: state.login,
        isLoading: state.usersList.isLoading,

    }),
    dispatch => ({
        onLogout: () => {
            sessionStorage.removeItem("loggedUser")
            dispatch({type: LOGOUT})
        },
        onGetUsersList: () => {
            dispatch(getUsersList())
        }
    })
)(UsersListPage);
