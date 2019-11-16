// Feeling not needed, might delete later
// import API from "../../utils/API";

import React, { Component } from "react";

import { setCurrentUser, logoutUser } from '../../actions/authActions';
import store from '../../store';
import setAuthToken from '../../utils/setAuthToken';
import jwt_decode from 'jwt-decode';

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

export default function Profile (props) {
    return (
        <div className="user-body">
            <div className="row">
                <div className="col-sm-8 col-sm-offset-2">
                    <hr></hr>
                   
                    <div className="userData">{props.user}</div>
                  
                
                </div>
            </div>    
    </div>
        
    );
}



