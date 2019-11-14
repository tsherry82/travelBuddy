import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';
// import Profile from "../Profile/profile";
import Account from "../Account/account";

class Dashboard extends Component {
    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
    }

    render() {
        const { user } = this.props.auth;

        return (
            <div className="container valign-wrapper" style={{ height: "75vh" }}>
                <div className="row">
                    <div className="col s12 center-align">
                        <h4>
                            <b>Hey there,</b> {user.name.split(" ")[0]}
                            <p className="flow-text grey-text text-darken-1">
                               Welcome to {" "} <span style={{ fontFamily: "monospace" }}>TravelBuddy</span>
                            </p>
                        </h4>
                        </div>
                        <div>
                        {/* <Profile></Profile> */}
                        <b className="userInfo">User: {user.name}</b>
                        </div>
                        <div>
                        <b className="userInfo">Email: {user.email}</b>
                        <div>
                        <b className="userInfo">Age: {user.age}</b>    
                        </div>
                        <div>
                        <b className="userInfo">City: {user.city}</b>    
                        </div>
                        <Account></Account>
                        <button className="btn btn-small waves-effect waves-light hoverable blue accent-3" style={{
                            width: "125px",
                            borderRadius: "3px",
                            letterSpacing: "1.5px",
                            marginTop: "1rem"
                        }} onClick={this.onLogoutClick}>

                            Logout
                        </button>
                    </div>
                </div>
            </div>
            
        );
    }
}

Dashboard.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({ auth: state.auth });

export default connect(mapStateToProps, { logoutUser })(Dashboard);