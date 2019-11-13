import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authActions';
import { Provider } from 'react-redux';
import store from './store';
import Home from "./pages/Home";
import Search from "./pages/Search";
import Profile from "./pages/Profile";
import Account from "./pages/Account";
import Feed from "./pages/Feed";

// import logo from "./logo.svg";


import './App.css';

import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import PrivateRoute from './components/private-route/PrivateRoute';
import Dashboard from './components/dashboard/Dashboard';

if(localStorage.jwtToken){
    const token = localStorage.jwtToken;
    setAuthToken(token);

    const decoded = jwt_decode(token);
    store.dispatch(setCurrentUser(decoded));

    const currentTime = Date.now() / 1000;
    if(decoded.exp < currentTime){
        store.dispatch(logoutUser());
        window.location.href = "./login";
    }
}

class App extends Component {
    render() {
        return(
            <Provider store={store}>
                <Router>
                <div className="App">
                    <div className="App-header">
                        {/* <img src={logo} className="App-logo" alt="logo" /> */}
                        {/* <h2>Welcome to Travel Buddy</h2> */}
                        <Navbar />
                        <hr></hr>
                        </div>
                        <Route exact path="/home" component={Home} />
                        <Route exact path="/Landing" component={Landing} />
                        <Route exact path="/register" component={Register} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/search" component={Search} />
                        <Route exact path="/profile" component={Profile} />
                        <Route exact path="/account" component={Account} />
                        <Route exact path="/feed" component={Feed} />
                        <Switch>
                            <PrivateRoute exact path="/dashboard" component={Dashboard} />
                        </Switch>
                    </div>
                </Router>
            </Provider>
        );
    }

}

export default App;
