import React, { Component } from "react";
import "./style.css";
import API from "../../utils/API";
import LoginButton from "../LoginButton";


//import { SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION } from "constants";
// const cardPostion = {
//   "float": "left",
// }

class PostForm extends Component {

  state = {
    item: "",
    quantity: "",
    category: "",
    Address: "",
    stock_id: "",
    stock_arr: [],
    uploading: false,
    url: ""
  }
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  deletePost = id => {
    if (id !== undefined) {
      //console.log("inside delete"+id);
      API.deleteData(id)
        .then(res => {
          this.setState({ stock_arr: "", item: "", quantity: "", category: "", Address: "", url: "" });
          //console.log(res.data+"successfully deleted");
          alert("successfully deleted post");
          //console.log(this.state.stock_arr.itemName);
        }
        )
        .catch(err => console.log(err));
    }
  };

  getDataById = id => {
    console.log(localStorage.getItem("name"));
    API.getDataById(id)
      .then(res => {
        this.setState({ stock_arr: res.data, item: "", quantity: "", category: "", Address: "" });
        console.log("graaaaaaaaaaab", res.data);
        //console.log(this.state.stock_arr.itemName);
      }
      )
      .catch(err => console.log(err));
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if(localStorage.getItem("nameId")===null){
      // alert("not logged in");
     
    }
    else{
    if (this.state.item && this.state.quantity) {
      const newPost = {
        itemName: this.state.item,
        quantity: this.state.quantity,
        category: this.state.category,
        Address: this.state.Address,
        url: this.state.url,
        user_id: localStorage.getItem('nameId')
      }
      console.log("newPost", newPost);
      API.savePost(newPost)
        .then(res => {
          console.log(res.data);
          this.setState({ stock_id: res.data._id })
          this.getDataById(res.data._id);
        })
        .catch(err => console.log(err));
    }}
  };

  
  render() {

    return (
      <div>
        <div className="">
          <div className="offset-3 col-md-6">
            <h3 id="postitemform" className="card-title sectiontitle">Enter the item you want to donate</h3>
            <hr></hr>
            <form>
              {/* Input Item Name */}
              <div className="form-group">
                <label htmlFor="exampleFormControlInput1">Product</label>
                <input type="text" className="form-control" placeholder="ex. Dining table" name="item" value={this.state.item}
                  onChange={this.handleInputChange} />
                <small className="form-text text-muted">* Required</small>
              </div>
              {/* Location: Address */}
              <div className="form-group">
                <label htmlFor="exampleFormControlInput1">Pick up address</label>
                <input type="text" className="form-control" placeholder="123 Main St, Seattle, WA, 98123 " name="Address" value={this.state.Address}
                  onChange={this.handleInputChange} />
              </div>
              {/* Select Quantity */}
              <div className="form-group">
                <label htmlFor="exampleFormControlSelect1">Select quantity</label>
                <select className="form-control" id="exampleFormControlSelect1" name="quantity" value={this.state.quantity}
                  onChange={this.handleInputChange}>
                  <option value="Choose">Choose...</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
                <small className="form-text text-muted">* Required</small>
              </div>
              {/* Select Category */}
              <div className="form-group">
                <label htmlFor="inputGroupSelect01">Select category</label>
                <select className="custom-select" id="inputGroupSelect03" name="category" value={this.state.category}
                  onChange={this.handleInputChange} aria-label="Example select with button addon">
                  <option value="Choose">Choose...</option>
                  <option value="Toys">Toys</option>
                  <option value="Electronics">Electronics</option>
                  <option value="Sports">Sports</option>
                  <option value="Home">Home</option>
                  <option value="Fashion">Fashion</option>
                  <option value="Books">Books</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <label >Include an image</label>
                <input type="file" id="images" placeholder="Images" multiple onChange={this.uploadFile} />
              </div>
            </form>
            {(localStorage.getItem("nameId")!=null)?<button type="submit" data-toggle="modal" data-target="#exampleModalCenter" className="navbutton btn btn-warning my-2 btn-sm" value="Submit" disabled={!(this.state.item &&
              this.state.quantity)} onClick={this.handleFormSubmit}>Confirm</button>:<LoginButton  name={"Submit"}/>}
            
          </div>
        </div>
        <div>
          <div>
            {/*<!-- Modal -->*/}
            <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog"
              aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalCenterTitle">Review and share!</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    {/* <h3 className="sectiontitle">Your Post</h3> */}
                    
                    <h5 className="formfield" >Product Name:{this.state.stock_arr.itemName}</h5>
                    <h6 className="formfield" >Item quantity:{this.state.stock_arr.quantity}</h6>
                    <h6 className="formfield" >Department:{this.state.stock_arr.category}</h6>
                    <h6 className="formfield" >Address:{this.state.stock_arr.Address}</h6>
                    <img src={this.state.url} width="200px" height="200px"></img>
                    <br></br>
                    <div className="modal-footer">
                      <button type="button" className="navbutton btn btn-warning my-2 btn-sm" onClick={() => this.deletePost(this.state.stock_arr._id)} data-dismiss="modal">Delete</button>
                      <button type="button" className="navbutton btn btn-warning my-2 btn-sm" data-dismiss="modal" onClick={()=> window.location.href="/"}>Submit</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  uploadFile = e => {
    const files = Array.from(e.target.files)
    this.setState({ uploading: true })

    const formData = new FormData()

    files.forEach((file, i) => {
      formData.append(i, file)
    })

    //sends the img to server
    fetch(`http://localhost:3001/image-upload`, {
      method: 'POST',
      body: formData
    })
      .then(res => res.json())
      .then(images => {
        this.setState({
          uploading: false,
          url: images[0].url
        });
      });
  }
}

export default PostForm;

