import React ,{Component} from "react";
//import "./style.css";
import API from "../../utils/API";

class PostForm extends Component {

  state={
      item:"",
      quantity:"",
      category:""
  }
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit=event=>{
      event.preventDefault();
      if(this.state.item && this.state.quantity)
      {
          API.savePost({itemName :this.state.item,
                       quantity:this.state.quantity,
                       category:this.state.category
           } ).then(res=>console.log(res))
           .catch(err => console.log(err));
      }

  };
    render(){

      return (
        <form>
            <div className="form-group">
                <label htmlFor="Item Name">Enter Item</label>
                <input type="text" className="product" id="item_donate" name="item" value={this.state.item} onChange={this.handleInputChange}/>
            </div>
            <div className="form-group">
                <label htmlFor="Quantity">Enter Item Quantity</label>
                <input type="text" className="quantity" id="item_qty" name="quantity" value={this.state.quantity} onChange={this.handleInputChange} />
            </div>
            <div>
            <label htmlFor="Department">choose Department</label>
            <select name="category" value={this.state.category}  onChange={this.handleInputChange} >
                <option value="kitchen">kitchen</option>
                <option value="Furniture">Furniture</option>
                <option value="outdoor">outdoor</option>
                <option value="decor">decor</option>
            </select>
            </div>
            <button type="button" disabled={!(this.state.item && this.state.quantity)}
                onClick={this.handleFormSubmit}>submit</button>
        </form>
    );
}
}

export default PostForm;