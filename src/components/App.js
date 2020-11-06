import React from 'react';
import { connect } from 'react-redux'
import {LOGIN} from "../constatns/actionsList";
import Menu from "./Menu";

function App({loginInfo, onLogin}) {
  return (
    <div className="App">
      <Menu/>
      <div className='container-md'>
          <strong>It is your home page! </strong>

          { (loginInfo.loggedIn) ?
              (<div >
                  <p>Hello, {loginInfo.userInfo}, welcome back!</p>
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
            localStorage.setItem("loggedUser", 'AuthGuest' )
            dispatch({type: LOGIN, payload: 'AuthGuest'})
        },
    })
)(App);
