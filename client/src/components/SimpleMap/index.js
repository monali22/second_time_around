import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
// import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';


const AnyReactComponent = ({ text }) => <div>{text}</div>;
const handleApiLoaded = (map, maps) => {
    // use map and maps objects
};

class SimpleMap extends Component {

    static defaultProps = {
        center: {
            lat: 47.6062,
            lng: -122.3321,
        },
        zoom: 13
    };

    render() {
        return (
            // Important! Always set the container height explicitly
            <div style={{ height: '90%', width: '50%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyC43qVzPHXSL3TaW4zNV8Kwu6a3PdmLcp8" }}
                defaultCenter={this.props.center}
                defaultZoom={this.props.zoom}

                yesIWantToUseGoogleMapApiInternals
                onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
            >
                <AnyReactComponent
                    lat={47.6062}
                    lng={-122.3321}
                    text="My Marker"
                />
            </GoogleMapReact>
           </div >
        );
    }
}

export default SimpleMap;

