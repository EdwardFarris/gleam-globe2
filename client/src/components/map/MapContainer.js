import React, { Component } from 'react';
import { GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

import CurrentLocation from './Map';

const divImageStyle = {
  float: 'left'
};
const divInfoStyle = {
  float: 'right',
  padding: '10px'
};

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {}
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = () => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
      // onMapClicked = () => {
      //   if (this.state.showingInfoWindow)
      //     this.setState({
      //        activeMarker: null,
      //       showingInfoWindow: false
      //      });
      //     };
    }
  };

  render() {
    return (
      <CurrentLocation
        // className="map"
        centerAroundCurrentLocation
        google={this.props.google}
      // onClick={this.onMapClicked}
      >
        <Marker
          onClick={this.onMarkerClick} name={'Current Location.'} />
        <Marker
          onClick={this.onMarkerClick} name={'Title.'} position={{ lat: 33.349228, lng: -111.796241 }} image={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT66lw7_QqeRs0bf3UH_QFEblAwV0vpZatBgCds1mflDjdUGfGR'} address={'123 Fake St'} city={'Phoenix'} state={'AZ'} date={'05/09/2019'} time={'08:00'}/>
        {/* {this.state.event.map( Tevent => (
            <Marker 
            key={Tevent.id}
            position={{ lat: {Tevent.lat}, lng: {Tevent.lng} }}
            date={Tevent.date}
            
            />
          ))}/> */}

        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}>
          <div>
            <div style={divImageStyle}>
              <img src={this.state.selectedPlace.image} alt={this.state.selectedPlace.name}/>
            </div>
            <div style={divInfoStyle}>
              <h4>{this.state.selectedPlace.name}</h4>
              <p>{this.state.selectedPlace.date}</p>
              <p>{this.state.selectedPlace.time}</p>
              <p>{this.state.selectedPlace.address}</p>
              <p>{this.state.selectedPlace.city}</p>
              <p>{this.state.selectedPlace.state}</p>
            </div>
          </div>
        </InfoWindow>
          {/* <InfoWindow visible>
          <small>
            Click on any of the markers to display an additional info.
          </small>
        </InfoWindow> */}
      </CurrentLocation>
        );
      }
    }

export default GoogleApiWrapper({
          apiKey: (process.env.REACT_APP_API_KEY_YT)
    })(MapContainer);
    
