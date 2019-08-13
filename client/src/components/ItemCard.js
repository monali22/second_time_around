import React, { Component } from 'react';
import API from "../utils/API";
import "./itemcardstyle.css";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import Geocode from "react-geocode";
import spinner from "../components/SimpleMap/mr_worldwide.gif"


const style = {
  width: '93%',
  height: '100%',
}

class ItemCard extends Component {

  state = {
    number: "",
    //claimed_date:"",
    text: "Claim it",
    // mapAddress: "Location",
    // idtest: "",
    position: ""

  }

  // User provides an address and Geocode will provide the lat and lng coordinates
  getUserCoordinates = address => {
    console.log('getUserCoordinate test', address)
    Geocode.setApiKey("AIzaSyC43qVzPHXSL3TaW4zNV8Kwu6a3PdmLcp8")
    Geocode.enableDebug();
    // Get latidude & longitude from address
    Geocode.fromAddress(address).then(
      response => {
        const { lat, lng } = response.results[0].geometry.location;
        this.setState({
          latd: lat,
          lngd: lng
        });
        console.log('donate user ', lat, lng);
        // console.log('donate user');
      },
      error => {
        console.log('getUserCoordinate test err', address)
        console.error(error);
      }
    );
  }

  componentDidMount() {
    // Google Geolocation Position
    navigator.geolocation.getCurrentPosition((position) => {
      // console.log("Geolocation Testing");
      // console.log(position)
      this.setState({
        position
      })
    });
  }


  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleClick = (id) => {

    console.log("inside click" + id);
    var claimed_date = new Date();
    console.log("ooo" + claimed_date);
    //this.setState({idtest:id})
    //var claimedDate=claimed_date;
    API.updatePost(id)
      .then(res => {
        console.log(res.data);
      })
      .catch(err => console.log(err));

    this.setState({
      text: "claimed"
    });

  };

  updatePost = () => {
    console.log(this.state.claimed_date);
    console.log(this.state.idtest);
    // console.log("gafsgas");
    const msg = {
      number: this.state.number,
      message: "Thanks for visiting SecondTimeAround!order confirmed.collect your item within 2 days"
    }

    API.getEmail(msg)
      .then(res => {
        // this.props.updatestock(this.state.stocks);
        console.log(res.data);
      })
      .catch(err => console.log(err));

  };



  render() {
    //console.log(this.props.item.itemName);

    return (
      <div className="col-md-4" >
        <div className="card cardstyle">
          <img className="card-img-top" src={this.props.item.url} width="100px" height="200px"></img>
          <div className="card-body">
            <h5 className="sectiontitle card-title">{this.props.item.itemName}</h5>
            <hr></hr>
            <p className="cardcontent card-text">Pick it up at {this.props.item.Address}</p>
            <p className="cardcontent card-text">This item was posted on {this.props.item.date}.</p>
            {/* <p>Items available for 5 days after posting</p> */}
          </div>
          <div className="col-md-4">
            <div className="">
              <span>
                {/*<!-- Button trigger modal for Claim it -->*/}
                <button type="button" className="navbutton btn btn-warning my-2 btn-sm" data-toggle="modal" data-target={"#exampleModalCenter1" + this.props.item._id} onClick={() => this.handleClick(this.props.item._id)} >{this.state.text}</button>
                {/*<!-- Button trigger modal for Maps --> */}
                <button type="button" class="navbutton btn btn-warning my-2 btn-sm" data-toggle="modal" data-target={"#exampleModalCenter" + this.props.item._id} onClick={() => this.getUserCoordinates(this.props.item.Address)}>Location</button>
              </span>
            </div>
          </div>
          {/*<!-- Modal for Claim it -->*/}
          <div className="modal fade" id={"exampleModalCenter1" + this.props.item._id} tabIndex="-1" role="dialog"
            aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalCenterTitle">Pick up information</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <form>
                    <div className="form-group">
                      <label htmlFor="InpuNumber">Number</label>
                      <input type="text" className="form-control" id="Inputnumber" aria-describedby="Name"
                        placeholder="Enter Number" name="number" onChange={this.handleInputChange} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="FormControlTextarea">Message | Please specify the day and time of pick up</label>
                      <textarea className="form-control" id="FormControlTextarea" rows=""
                        placeholder="Enter optional message to user"></textarea>
                    </div>
                  </form>
                  <div className="modal-footer">
                    <button type="button" value="Submit" className="navbutton btn btn-warning my-2 btn-sm" data-dismiss="modal" onClick={this.updatePost} >Submit</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Google Maps Feature */}
          {/*<!-- Button trigger modal --> */}
          {/* <span><button type="button" class="navbutton btn btn-warning my-2 btn-sm" data-toggle="modal" data-target={"#exampleModalCenter" + this.props.item._id} onClick={() => this.getUserCoordinates(this.props.item.Address)}>Location</button></span> */}

          {/*<!-- Modal -->*/}
          <div className="modal fade" id={"exampleModalCenter" + this.props.item._id} tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
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
                            position={{ lat: this.state.latd, lng: this.state.lngd }}
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
                  <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ItemCard;


// export default GoogleApiWrapper({
//   apiKey: "AIzaSyC43qVzPHXSL3TaW4zNV8Kwu6a3PdmLcp8"
// })(ItemCard);
