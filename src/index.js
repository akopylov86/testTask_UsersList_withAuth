import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import { composeWithDevTools } from "redux-devtools-extension";
    import thunk from "redux-thunk";
import reducer from "./reducers"
import {Route, Switch} from 'react-router'
// import { syncHistoryWithStore } from 'react-router-redux';

import App from "./components/App";
import UsersList from "./components/UsersListPage";
import {BrowserRouter} from "react-router-dom";
import User from "./components/User";


const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
// const history = syncHistoryWithStore(browserHistory , store);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route path="/" component={App} exact/>
                <Route path="/users" component={UsersList}/>
                <Route path="/user/:id" component={User}/>
            </Switch>
        </BrowserRouter>
    </Provider>

  </React.StrictMode>,
  document.getElementById('root')
);

