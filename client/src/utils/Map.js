import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import SearchForm from '../../src/components/SearchForm';

// i need to grab the getSearchCoord function to gran the lat and lng to update the map with the users search coord, I also need to figure out where to get the google places info so that our map actually has content, i would also like to adda function so when i click on a location it would add it to my interest to my prolfile, therefor other users can find my desire locations and then comment on specific locations.




const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  constructor(props) {
    super(props);

    // this.getSearchCoord = this.getSearchCoord.bind(this);

    // this.getSearchCoord() {
    //  this.setState({
       
    //  });
    // }
    this.state = {
      markers: [{
        pos: {
          lat: 27.370066,
          lng: -81.516693,
        },
        title: "title"
      },
      {
        pos: {
          lat: 30.267153,
          lng: -97.7430608,
        },
        title: "title2"
      }]



    }
  }
  static defaultProps = {
    center: {
      lat: 28.37067,
      lng: -81.516693
    },
    zoom: 11
  };



  renderMarkers(map, maps) {
    this.state.markers.forEach(markerObj => {
     new maps.Marker({
        position: markerObj.pos,
        map,
        title: markerObj.title
      })
    })
     new maps.Marker({
      position: { lat: 28.370066, lng: -81.516693 },
      map,
      title: "Location"
    })
  }

  render() {
    return (
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_KEY }}
          defaultCenter={this.props.center}
          center={this.props.center}
          defaultZoom={this.props.zoom}
          onChildMouseEnter={this.onChildMouseEnter}
          onChildMouseLeave={this.onChildMouseLeave}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) => this.renderMarkers(map, maps)}
        >
          <AnyReactComponent
            lat={this.props.lat}
            lng={this.props.lng}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;