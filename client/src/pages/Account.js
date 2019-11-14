import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
// import PropTypes from 'prop-types';
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";

// import Dashboard from "../components/dashboard";

import axios from 'axios';


class Profile extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     users: []
  //   };
  // }

  // componentDidMount() {
  //   axios.get('/api/account/profile')
  //   .then(res => {
  //     this.setState({ users: res.data });
  //     console.log(this.state.users)
  //   })
  // }
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
