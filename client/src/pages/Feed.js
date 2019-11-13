import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";





class Profile extends Component {
    render() {
        return (
          <Container fluid>
            <Row>
              <Col size="md-6">
                <Jumbotron className="home">
                  <h1>Feed</h1>
                  <h3>Coming soon...</h3>
                </Jumbotron>
                </Col>
        </Row>
      </Container>
        );
    }
}

export default Profile;
