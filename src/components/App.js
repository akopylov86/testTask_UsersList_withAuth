import React from 'react';
import { connect } from 'react-redux'
import {LOGIN, LOGOUT} from "../constatns/actionsList";
import Menu from "./Menu";

function App({loginInfo, onLogin, onLogout}) {
  return (
    <div className="App">
      <Menu/>
      <div>
          <strong>It is your home page! </strong>

          { (loginInfo.loggedIn) ?
              (<div>
                  <p>Hello, {loginInfo.userInfo}</p>
                  <button onClick={onLogout}>logout</button>
              </div>)
              :
              <button onClick={onLogin}>login</button>
          }
      </div>
    </div>
  );
}

export default connect(
    state => ({
      loginInfo: state.login,
    }),
    dispatch => ({
        onLogin: () => {
            dispatch({type: LOGIN, payload: 'AuthGuest'})
        },
        onLogout: () => {
            dispatch({type: LOGOUT})
        },
    })
)(App);
