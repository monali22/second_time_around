import React, { Component } from 'react';
// import API from "../utils/API";
// import "./itemcardstyle.css";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
// import Geocode from "react-geocode";
import spinner from "../SimpleMap/mr_worldwide.gif";


const style = {
    width: '93%',
    height: '100%',
  }

class TraesModal extends Component {

    state = {
        position: this.props.position,
       
    }

    render() { 
        return (
        <div>

{/* Google Maps Feature */}
          {/*<!-- Button trigger modal for Maps --> */}
          {/* <span><button type="button" class="navbutton btn btn-warning my-2 btn-sm" data-toggle="modal" data-target={"#ModalMap" + this.props.item._id} onClick={() => this.getUserCoordinates(this.props.item.Address)}>Location</button></span> */}

          {/*<!-- Modal for Maps -->*/}
          <div className="modal fade" id={"ModalMap" + this.props.modalID} tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalCenterTitle">Location of Item</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body address-map">

                  <div>
                    {/* {this.getUserCoordinates(this.props.item.Address)} */}

                    {/* Google Maps*/}
                    {

                      this.state.position ?
                        (<Map
                          google={this.props.google}
                          style={style}
                          initialCenter={{
                            lat: this.state.position.coords.latitude,
                            lng: this.state.position.coords.longitude
                          }}
                          zoom={10}
                          onClick={this.onMapClicked}
                        >
                          <Marker onClick={this.onMarkerClick}
                            name={'Current location'}
                            title={'Current Location'} />

                          <Marker onClick={this.onMarkerClick}
                            name={'user'}
                            title={"Item's Address"}
                            position={{ lat: this.props.lat, lng: this.props.lng }}
                            icon={{
                              url: "https://mt.google.com/vt/icon/name=icons/onion/SHARED-mymaps-container-bg_4x.png,icons/onion/SHARED-mymaps-container_4x.png,icons/onion/1502-shape_star_4x.png&highlight=ff000000,0288D1,ff000000&scale=0.9",

                            }} />


                        </Map >) : (
                          // <p>waiting for map to load</p>
                          <img src={spinner} alt="Waiting for map to load spinner" style={{ height: '300px', align: 'center' }} />
                        )
                    }
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="navbutton btn btn-warning my-2 btn-sm" data-dismiss="modal">Close</button>

                </div>
              </div>
            </div>
          </div>
          </div>
        )}

        }
export default GoogleApiWrapper({
    apiKey: "AIzaSyC43qVzPHXSL3TaW4zNV8Kwu6a3PdmLcp8"
  })(TraesModal);