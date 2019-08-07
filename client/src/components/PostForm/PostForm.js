import React, { Component } from "react";
//import "./style.css";
import API from "../../utils/API";


//import { SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION } from "constants";
const cardPostion = {
  "float": "left",
}

class PostForm extends Component {
  
  state={
      item:"",
      quantity:"",
      category:"",
      stock_id:"",
      stock_arr:[],
      uploading: false,
      url: ""
  }
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  deletePost=id=>{
    if(id !==undefined )
    {
      //console.log("inside delete"+id);
      API.deleteData(id)
      .then(res =>{
        this.setState({ stock_arr:"",item:"", quantity:"", category:"",});
        //console.log(res.data+"successfully deleted");
        alert("successfully deleted post");
        //console.log(this.state.stock_arr.itemName);
      }
        
      )
      .catch(err => console.log(err));
  }
    
    };


  
  getDataById=id=>{
    API.getDataById(id)
      .then(res =>{
        this.setState({ stock_arr:res.data,item:"", quantity:"", category:"",});
        console.log("graaaaaaaaaaab",res.data);
        //console.log(this.state.stock_arr.itemName);
      }
        
      )
      .catch(err => console.log(err));
  };
    

  

  handleFormSubmit=event=>{
      event.preventDefault();
      if(this.state.item && this.state.quantity)
      {
        const newPost = {itemName :this.state.item,
                       quantity:this.state.quantity,
                       category:this.state.category,
                       url: this.state.url,
           } 
           
           console.log("newPost", newPost);
           
           
           API.savePost( newPost)
           .then(res => {

            console.log(res.data);
             this.setState({stock_id:res.data._id}) 
             this.getDataById(res.data._id)  ; 
            


           }
           
           
           
           )
            .catch(err => console.log(err));
         
         
      }

  };
    render(){

      return (
        //kim's update 
        <div>
        <div className="card w-50" style={cardPostion}>
          <div className="card-body">
            <h3 className="card-title">Donate Form</h3>
            <br />
            <form>
              {/* Input Item Name */}
              <div className="form-group">
                <label htmlFor="exampleFormControlInput1">Enter Item Description</label>
                <input type="text" className="form-control" placeholder="ex. Table" name="item" value={this.state.item}
                  onChange={this.handleInputChange} />
              </div>

              {/* Location: Address */}
              <div className="form-group">
                <label htmlFor="exampleFormControlInput1">Address</label>
                <input type="text" className="form-control" placeholder="123 Main St, Seattle, WA, 98123 " name="zipcode" />
              </div>

              {/* Select Quantity */}
              <div className="form-group">
                <label htmlFor="exampleFormControlSelect1">Select Quantity</label>
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
              <div className="form-group">
                <label htmlFor="inputGroupSelect01">Category</label>
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
              <div className="form-group">
          <label >Images: </label>
          <input type="file" id="images" placeholder="Images" multiple onChange={this.uploadFile} />
        </div>

              </form>
              {/* Submit Button */}
              <button type="submit" className="btn btn-primary" value="Submit" disabled={!(this.state.item &&
                this.state.quantity)} onClick={this.handleFormSubmit}>Submit</button>
          </div>

        </div>
        <div>  
          
          <div className="card" > 
               
            <div className="card-body">
    
   
          <title>Your Post</title>
            <h5>Donating Item:{this.state.stock_arr.itemName}</h5>
            <h6>Item Qunatity:{this.state.stock_arr.quantity}</h6>
            <h6>Department:{this.state.stock_arr.category}</h6>
            <h6>grab image IMAGE</h6>


            <button type="button" className="btn btn-primary" onClick={() => this.deletePost(this.state.stock_arr._id)}  >delete</button>
           </div>
             
              </div>
          
          
           </div>
      </div>
      );

       /* //helan's update
        <div>
            <div className="card w-50" style={cardPostion}>
          <div className="card-body">
            <h3 className="card-title">Donate Form</h3>
            <br />

        <form>
            <div className="form-group">
                <label htmlFor="Item Name">Enter Item Description</label>
                <input type="text" className="form-control" id="item_donate"  placeholder="ex. Table" name="item" value={this.state.item} onChange={this.handleInputChange}/>
            </div>
            <div className="form-group">
                <label htmlFor="Quantity">select Item Quantity</label>
                <select name="quantity" value={this.state.quantity}  onChange={this.handleInputChange} >
                <option value="choose">choose</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </select>
            </div>
            <div>
            <label htmlFor="Department">choose Department</label>
            <select name="category" value={this.state.category}  onChange={this.handleInputChange} >
                <option value="choose">choose</option>
                <option value="kitchen">kitchen</option>
                <option value="Furniture">Furniture</option>
                <option value="outdoor">outdoor</option>
                <option value="decor">decor</option>
            </select>
            </div>
            <button type="button" disabled={!(this.state.item && this.state.quantity)}
                onClick={this.handleFormSubmit}>submit</button>
              
              
        </form>
        <div>  
          
          <div className="card" > 
               
            <div className="card-body">
    
   
          <title>Your Post</title>
            <h5>Donating Item:{this.state.stock_arr.itemName}</h5>
            <h6>Item Qunatity:{this.state.stock_arr.quantity}</h6>
            <h6>Department:{this.state.stock_arr.category}</h6>
            <h6>grab image IMAGE</h6>


            <button type="button" className="btn btn-primary" onClick={() => this.deletePost(this.state.stock_arr._id)}  >delete</button>
           </div>
             
              </div>
          
          
           </div>
       </div>
      </div>
      </div>
    );  
  */    
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

