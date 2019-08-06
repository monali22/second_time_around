import React, { Component } from "react";
//import "./style.css";
import API from "../../utils/API";


//import { SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION } from "constants";

class PostForm extends Component {
  
  state={
      item:"",
      quantity:"",
      category:"",
      stock_id:"",
      stock_arr:[]
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
          API.savePost({itemName :this.state.item,
                       quantity:this.state.quantity,
                       category:this.state.category
           } ).then(res=>{console.log(res.data);
             this.setState({stock_id:res.data._id})
           // console.log("iddddddddd",this.state.stock_id);
            this.getDataById(this.state.stock_id);
            
            })
           .catch(err => console.log(err));
         
         
      }

  };
    render(){

      return (
        <div>
            <div className="card w-50">
          <div className="card-body">
            <h3 className="card-title">Donate Form</h3>
            <br />

        <form>
            <div className="form-group">
                <label htmlFor="Item Name">Enter Item</label>
                <input type="text" className="product" id="item_donate" name="item" value={this.state.item} onChange={this.handleInputChange}/>
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
      
}
}

export default PostForm;