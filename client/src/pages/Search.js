import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import SearchForm from "../components/SearchForm/index";
import SimpleMap from "../utils/Map"






class Search extends Component {
    render() {
        return (
          <Container fluid>
            <Row>
              <Col size="md-6">
                <Jumbotron className="home">
                  <h1>Search</h1>
                  <h3>Under Construction...</h3>
                </Jumbotron>
                <SearchForm />
                <SimpleMap />

                </Col>
        </Row>
      </Container>
        );
    }
}

export default Search;
