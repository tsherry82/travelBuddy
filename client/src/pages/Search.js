import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import SearchForm from "../components/SearchForm/index";
import SimpleMap from "../utils/Map";


class Search extends Component {
  state = {
    lat: 28.37067,
    lng: -81.516693
  }

  updateLocation = (lat, lng) => {
    console.log('updated local');
    this.setState({
      lat, lng
    })
  }


  render() {
    console.log("loaded") 
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron className="home">
              <h1>Search</h1>
              <h3>Where Would You Like To Go?</h3>
            </Jumbotron>
            <SearchForm updateLocation={this.updateLocation} />
            <SimpleMap lat={this.state.lat}lng={this.state.lng} center={this.state}/>

          </Col>
        </Row>
      </Container>
    );
  }
}

export default Search;
