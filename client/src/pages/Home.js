import React, { Component } from "react";
import "../App.css";
import SimpleMap from "../utils/Map"

class Home extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Travel Buddy</h2>
        </div>
        <SimpleMap />
      </div>
    );
  }
}

export default Home;
