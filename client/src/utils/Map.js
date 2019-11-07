import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Geocode from 'react-geocode';

Geocode.setApiKey(process.env.REACT_APP_GOOGLE_KEY);
Geocode.setLanguage('en');

Geocode.fromAddress('Austin, TX').then(
  resp => {
    const { lat, lng } = resp.results[0].geometry.location;
    console.log( lat, lng );
  },
  error => {
    console.error(error);
  }
)

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  constructor() {
    super();
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
      let marker = new maps.Marker({
        position: markerObj.pos,
        map,
        title: markerObj.title
      })
    })
    let marker = new maps.Marker({
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
          defaultZoom={this.props.zoom}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) => this.renderMarkers(map, maps)}
        >
          <AnyReactComponent
            lat={28.370066}
            lng={-81.516693}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;