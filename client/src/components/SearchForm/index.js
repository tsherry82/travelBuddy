import React from "react";
import "./style.css";
import Geocode from 'react-geocode';

Geocode.setApiKey(process.env.REACT_APP_GOOGLE_KEY);
Geocode.setLanguage('en');

// Using the datalist element we can create autofill suggestions based on the props.zip array
class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lat:"",
      lng:"",
      input : ""
    }
  }

   



  getSearchCoord = (event) => {
    console.log(event)
    event.preventDefault();
    this.setState({input: event.target.value})
    let searchLocation = event.target.value
    

    Geocode.fromAddress(searchLocation).then(
      resp => {
        const { lat, lng } = resp.results[0].geometry.location;
        console.log(lat, lng);
        this.setState({
          lat, lng
        })
      },
      error => {
        console.error(error);
      }
      
    )
   
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.input);
    this.props.updateLocation(this.state.lat,this.state.lng)

  }

  render() {
    
    return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="zip" id="place"><h5>Destination:</h5></label>
        <input
          value={this.props.search}
          onChange={this.getSearchCoord}
          name="zip"
          list="zips"
          type="text"
          className="form-control"
          placeholder="Type in a city to begin"
          id="zip"
        />
       
        <button type="submit" onClick={this.handleFormSubmit} className="btn btn-success">
          Search
        </button>
      </div>
    </form>
  );
  }
  
  
}

export default SearchForm;
