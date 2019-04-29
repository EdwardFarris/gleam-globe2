import React from 'react';
import ReactDOM from 'react-dom';
// import API from "../../utils/API"

const mapStyles = {
  map: {
    position: 'absolute',
    width: '100%',
    height: '100%'
  }
};

export class CurrentLocation extends React.Component {
  state = {
    event: {}
  };

    constructor(props) {
        super(props);
    
        const { lat, lng } = this.props.initialCenter;
        this.state = {
          currentLocation: {
            lat: lat,
            lng: lng
          }
        };
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.google !== this.props.google) {
          this.loadMap();
        }
        if (prevState.currentLocation !== this.state.currentLocation) {
          this.recenterMap();
        }
        if ((this.props.map !== prevProps.map) ||
        (this.props.position !== prevProps.position)) {
          // The relevant props have changed
      }
      }
      recenterMap() {
        const map = this.map;
        const current = this.state.currentLocation;
    
        const google = this.props.google;
        const maps = google.maps;
    
        if (map) {
          let center = new maps.LatLng(current.lat, current.lng);
          map.panTo(center);
        }
      }
      componentDidMount() {
        if (this.props.centerAroundCurrentLocation) {
          if (navigator && navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(pos => {
              const coords = pos.coords;
              this.setState({
                currentLocation: {
                  lat: coords.latitude,
                  lng: coords.longitude
                }
              });
            });
          }
        }
        this.loadMap();
        // API.getEvent(this.props.match.params.id)
        // .then(res => this.setState({ event: res.data }))
        // .catch(err => console.log(err));
      }

      // geocodeAddress() = geocoder => {
      //   geocoder.geocode({{this.state.event.street_address}: address}, (results, status) => {
      //     if (status === 'OK') {
      //       var marker = new google.maps.Marker({
      //         map: map,
      //         position: results[].geometry.location
      //       });
      //     } else {
      //       alert('Geocode was not successful for the following reason: ' + status);
      //     }
      //   });
      // }

      loadMap() {
        if (this.props && this.props.google) {
          // checks if google is available
          const { google } = this.props;
          const maps = google.maps;
    
          const mapRef = this.refs.map;
    
          // reference to the actual DOM element
          const node = ReactDOM.findDOMNode(mapRef);
    
          let { zoom } = this.props;
          const { lat, lng } = this.state.currentLocation;
          const center = new maps.LatLng(lat, lng);
          const mapConfig = Object.assign(
            {},
            {
              center: center,
              zoom: zoom
            }
          );
    
          // maps.Map() is constructor that instantiates the map
          this.map = new maps.Map(node, mapConfig);
        }
      }
      renderChildren() {
        const { children } = this.props;
    
        if (!children) return;
    
        return React.Children.map(children, c => {
          if (!c) return;
          return React.cloneElement(c, {
            map: this.map,
            google: this.props.google,
            mapCenter: this.state.currentLocation
          });
        });
      }
      render() {
        const style = Object.assign({}, mapStyles.map);
       return (
         <div>
           <div style={style} ref="map">
             Loading map...
             {this.renderChildren()}
           </div>
           {/* {this.renderChildren()} */}
         </div>
       );
     }
     renderMarker() {
      let {
        map, google, position, mapCenter
      } = this.props;
  
      let pos = position || mapCenter;
      position = new google.maps.LatLng(pos.lat, pos.lng);

      const pref = {
        map: map,
        position: position
      };
      this.marker = new google.maps.Marker(pref);
    }

}
export default CurrentLocation;

CurrentLocation.defaultProps = {
  zoom: 14,
  initialCenter: {
    lat: 33.360355,
    lng: -111.801682
  },
  centerAroundCurrentLocation: false,
  visible: true
}

// CurrentLocation.propTypes = {
//   position: React.PropTypes.object,
//   map: React.PropTypes.object

// };