import React from "react";
import "./style.css";
import Geocode from 'react-geocode';
import API from "../../utils/API";

Geocode.setApiKey(process.env.REACT_APP_GOOGLE_KEY);
Geocode.setLanguage('en');

// Using the datalist element we can create autofill suggestions based on the props.zip array
class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: "",
      lng: "",
      input: ""
    }
  }

  getSearchCoord = (e) => {
    console.log(e)
    e.preventDefault();
    this.setState({ input: e.target.value })
    let searchLocation = e.target.value


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

  }

  // componentDidMount() {
  //   this.getSearchCoord();

  // };


  // getSearch = () => {
  //   API.getSearch()
  //     .then(res => {
  //       this.input.setState({ search: res.data });
  //       console.log(res);
  //     })
  // }

  handleFormSubmit = (event) => {
    event.preventDefault();
    console.log("Search: " + this.state.input);
    this.props.updateLocation(this.state.lat, this.state.lng)
    API.saveSearch({ search: this.state.input })
      .then(res => {
        this.setState({
          input: ""
        })
      });

  }



  render() {

    return (

      <form className="search">
        <div className="form-group">
          <label htmlFor="zip">Place:</label>
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
