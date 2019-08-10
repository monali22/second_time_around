import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import dotenv from 'dotenv';
dotenv.config();
const googleKey = process.env.GOOGLE_KEY;
const style = {
    width: '90%',
    height: '70%',
    position: 'relative'
}


class SimpleMap extends Component {
    state = {
        stocks: []
    }

    componentDidMount() {
        navigator.geolocation.getCurrentPosition((position) => {
            console.log("Trying");
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
                {this.state.position ?
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
                        <img src='/mr_worldwide.gif' alt="spinner"/>
                    )}
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyC43qVzPHXSL3TaW4zNV8Kwu6a3PdmLcp8"
})(SimpleMap)


