import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import API from '../../utils/API';
// import spinner from '../SimpleMap/mr_worldwide.gif';
import spinner2 from '../SimpleMap/spinner.gif';
import Geocode from "react-geocode";


const style = {
    width: '90%',
    height: '70%',

}



class SimpleMap extends Component {

    // Grabs donate-user's location
    state = {
        stocks: []
    }

    donateUserLocation() {
        // Transforms a location into geographic coordinates (i.e. latitude and longitude) 
        Geocode.setApiKey("AIzaSyC43qVzPHXSL3TaW4zNV8Kwu6a3PdmLcp8")
        Geocode.enableDebug();
        // Get latidude & longitude from address.
        Geocode.fromAddress("3716 South Brandon Street, Seattle, WA 98118, USA").then(
            response => {
                const { lat, lng } = response.results[0].geometry.location;
                console.log(lat, lng);
                console.log('geocode test');
            },
            error => {
                console.error(error);
            }
        );
    }

    componentDidMount() {

        API.getAddressData()
            .then(res => {
                console.log('hello map testing');
                console.log(res.data);
            })
            .catch(err => console.log(err));

        // Google Geolocation Position
        navigator.geolocation.getCurrentPosition((position) => {
            console.log("Geolocation Testing");
            console.log(position)

            this.setState({
                position
            })
            // var pos = {
            //     lat: position.coords.latitude,
            //     lng: position.coords.longitude
            // };
        })
    }

    userLocation() {

    }

    render() {
        return (
            <div>
                {
                    this.state.position ?
                        (<Map
                            google={this.props.google}
                            style={style}
                            initialCenter={{
                                lat: this.state.position.coords.latitude,
                                lng: this.state.position.coords.longitude
                            }}
                            zoom={15}
                            onClick={this.onMapClicked}
                        >
                            <Marker onClick={this.onMarkerClick}
                                name={'Current location'} />
                            <InfoWindow onClose={this.onInfoWindowClose}>
                                {/* <div>
                                <h1>{this.state.selectedPlace.name}</h1>
                                </div> */}
                            </InfoWindow>
                        </Map >) : (
                            // <p>Map not ready</p>
                            <img src={spinner2} alt="spinner" />
                        )
                }
            </div >
        );
    }
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyC43qVzPHXSL3TaW4zNV8Kwu6a3PdmLcp8"
})(SimpleMap)


