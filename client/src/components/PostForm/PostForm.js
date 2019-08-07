import React, { Component } from "react";
import "./style.css";
import API from "../../utils/API";

const cardPostion = {
  "float": "left",
}



class PostForm extends Component {

  state = {
    item: "",
    quantity: "",
    category: "",
    uploading: false,
    url: ""
  }
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.item && this.state.quantity) {
      const newPost = {
        itemName: this.state.item,
        quantity: this.state.quantity,
        category: this.state.category,
        url: this.state.url,
      }
      console.log("newPost", newPost);
      API.savePost(
        newPost
      ).then(res => console.log(res))
        .catch(err => console.log(err));
    }
  };
  render() {

    return (
      <div>
        <div className="card w-50" style={cardPostion}>
          <div className="card-body">
            <h3 className="card-title sectiontitle">Enter the item you want to donate:</h3>
            <hr></hr>
            <form>
              {/* Input Item Name */}
              <div className="formfield form-group">
                <label htmlFor="exampleFormControlInput1">Product</label>
                <input type="text" className="formfield form-control" placeholder="ex. Table" name="item" value={this.state.item}
                  onChange={this.handleInputChange} />
              </div>

              {/* Location: Address */}
              <div className="formfield form-group">
                <label htmlFor="exampleFormControlInput1">Pick up address</label>
                <input type="text" className="formfield form-control" placeholder="123 Main St, Seattle, WA, 98123 " name="zipcode" />
              </div>

              {/* Select Quantity */}
              <div className="formfield form-group">
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
              </div>

              {/* Select Category */}
              <div className="formfield form-group">
                <label htmlFor="inputGroupSelect01">Select category</label>
                <select className="custom-select" id="inputGroupSelect03" name="category" value={this.state.category}
                  onChange={this.handleInputChange} aria-label="Example select with button addon">
                  <option value="Choose">Choose...</option>
                  <option value="Toys">Toys</option>
                  <option value="Housing">Housing</option>
                  <option value="Electronics">Electronics</option>
                  <option value="Sports">Sports</option>
                  <option value="Home">Home</option>
                  <option value="Fashion">Fashion</option>
                  <option value="Books">Books</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Upload Image */}
              {/* <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="inputGroupFileAddon01">Upload Image</span>
                </div>
                <div className="custom-file" onClick={this.handleFormSubmit}>
                  <input type="file" className="custom-file-input" id="inputGroupFile01"
                    aria-describedby="inputGroupFileAddon01" />
                  <label className="custom-file-label" htmlFor="inputGroupFile01">Choose file</label>
                </div>
              </div> */}
              <div className="formfield form-group">
          <label >Include an image: </label>
          <input type="file" id="images" placeholder="Images" multiple onChange={this.uploadFile} />
        </div>

              </form>
              {/* Submit Button */}
              <button type="submit" className="navbutton btn btn-warning my-2 btn-sm" value="Submit" disabled={!(this.state.item &&
                this.state.quantity)} onClick={this.handleFormSubmit}>Submit</button>
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