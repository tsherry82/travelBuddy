import React, { Component } from "react";
// import Jumbotron from "../components/Jumbotron";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
// import { Link } from 'react-router-dom';







class Home extends Component {
    render() {
        return (
          <Container fluid>
            <h4 className="fernweh">fernweh (n.)</h4>
            <h6 className="fernweh">feeling homesick for a place you've never been</h6>
            <hr></hr>
            <Row>
              <Col size="md-6">
                  <h3 className="home">Welcome!</h3>
                  </Col>
               </Row>
              
              <Row>
                <Col size="md-4"></Col>
                <Col size="md-4">
                  <div className="intro">
      <p id="introPara">
          Have you been craving a trip but can't seem to get on the same page with your fellow travelers? Are you the kind of person that buys a flight first and then tries to find others to go with you? Do you often travel solo or are interested in taking a solo trip and wanting to meet up with fellow solo travelers? Then you've come to the right place! TravelBuddy is specifically geared to those lone wanderlust individuals. Maybe your friends couldn't get the time off work to go with you but you still want to go on the trip. Maybe you've just been in need of doing something on your own, but you still want to do a group activity or meet someone doing the same as you. TravelBuddy will help connect you with like-minded individuals to help enhance your adventure!
      </p>
      <h5 className="welcome">Create an Account! Pick a Destination! Pack your bags!</h5>
      <h5 className="welcome">The world is waiting for you!</h5>

      </div>
      </Col>
      </Row>
   
               
       
      
      </Container>
        );
    }
}

export default Home;
