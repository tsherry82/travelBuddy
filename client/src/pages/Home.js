import React, { Component } from "react";
// import Jumbotron from "../components/Jumbotron";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { Link } from 'react-router-dom';







class Home extends Component {
    render() {
        return (
          <Container fluid>
            <Row>
              <Col size="md-6">
                  <h1 className="home">Welcome!</h1>
               
                <div>
      <p className="intro">
          Do you often travel solo or are interested in taking a solo trip and wanting to meet up with fellow solo travelers? Then you've come to the right place! TravelBuddy is specifically geared to those lone wanderlust individuals. Maybe your friends couldn't get the time off work to go with you but you still want to go on the trip. Maybe you've just been in need of doing something on your own, but you still want to do a group activity or meet someone doing the same as you. TravelBuddy will help connect you with likeminded individuals to help enhance your adventure!
      </p>
    </div>
                </Col>
        </Row>
      
      </Container>
        );
    }
}

export default Home;
