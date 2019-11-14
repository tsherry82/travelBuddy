import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
// import PropTypes from 'prop-types';
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
// import Dashboard from "../components/dashboard";





class Profile extends Component {
    render() {
        // const { user } = this.props.auth;

        return (
          <Container fluid>
            <Row>
              <Col size="md-6">
                  <h3>Welcome, </h3>
                  {/* <Dashboard></Dashboard> */}
                  {/* <b>Hey there,</b> {user.name.split(" ")[0]} */}
                <Jumbotron className="home">
                  <h1>Account Page</h1>
                  <h3>Coming soon...</h3>
                </Jumbotron>
                </Col>
        </Row>
      </Container>
        );
    }
}

export default Profile;
