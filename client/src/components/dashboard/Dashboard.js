import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';
// import Profile from "../Profile/profile";
// // import Account from "../Account/account";
// import { Link, Route } from "react-router-dom";
// import Feed from "../../pages/Feed";
// import { Col, Row, Container } from "../Grid";
// import Feed from "../Feed/feed";



class Dashboard extends Component {
  
    state = {
        currentPage: "Dashboard"
      };
    
      handlePageChange = page => {
        this.setState({ currentPage: page });
      };

    renderFeed = () => {

    };
    
 
    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
    }

    render(props ) {
        const { user } = this.props.auth;

        return (
            <div className="container valign-wrapper" style={{ height: "75vh" }}>
                <div className="row">
                    <div className="col lg12 center-align">
                        <h4>
                            <b>Hey there,</b> {user.name.split(" ")[0]}
                            <p className="flow-text grey-text text-darken-1">
                               Welcome to {" "} <span style={{ fontFamily: "monospace" }}>TravelBuddy</span>
                            </p>
                        </h4>
                        </div>
                      
                        <div id="userInformation">
                        <p className="userInfo">User: {user.name}</p>
                        <p className="userInfo">Email: {user.email}</p>
                        <p className="userInfo">Age: {user.age}</p>    
                        <p className="userInfo">City: {user.city}</p>    
                        </div>
                        {/* <Account></Account> */}
                        <button className="btn btn-small waves-effect waves-light hoverable blue accent-3" style={{
                            width: "125px",
                            borderRadius: "3px",
                            letterSpacing: "1.5px",
                            marginTop: "1rem"
                        }} onClick={this.onLogoutClick}>

                            Logout
                        </button>
                    </div>
                    <hr></hr>
                    <div>
                   </div>
      <div className = "row">
      {/* <Feed></Feed> */}
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