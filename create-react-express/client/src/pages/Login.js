import React, { Component } from "react";
// import Jumbotron from "../components/Jumbotron";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Signup from "../components/SignUp/SignUp";





class Login extends Component {
    render() {
        return (
          <Container fluid>
            <Row>
              <Col size="md-6">
                  <h1 className="login">Login</h1>
              
                <Signup />
                </Col>
        </Row>
      </Container>
        );
    }
}

export default Login;
