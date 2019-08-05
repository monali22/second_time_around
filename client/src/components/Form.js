import React,{ Component } from 'react'
import API from "../utils/API"

const formStyle = {
  "border": "solid",
  "borderWidth": "5px",
  "width": "80%",
  "marginLeft": "10%",
  "marginTop": "5%"
}

const buttonStyle = {
  "marginLeft": "40%",
  "marginRight": "auto",
  "width": "20%"
}

class Form extends Component{

  state = {
    category: "",
    decription: ""
  };

  handleInputChange = event => {
    console.log(event);
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.category && this.state.decription) {
      API.saveStock({
        category: this.state.category,
        description: this.state.description
      })
        .then(res => console.log(res) )
        .catch(err => console.log(err));
    }
  };


  render(){
    return (
      <div>
        <form style={formStyle}>
          <div className="form-group">
            <label>Choose a category:</label>
            <br />
            <input type="text" className="form-control"  value={this.state.category}
                onChange={this.handleInputChange} name="category"/>  
                </div>
                         
            {/* </div> <button type="button" className="btn btn-outline-secondary" value={this.state.category}
            //     onChange={this.handleInputChange}
            //     name="category">Housing</button>
            // <button type="button" className="btn btn-outline-success" value={this.state.category}
            //     onChange={this.handleInputChange}
            //     name="category">Electronics</button>
            // <button type="button" className="btn btn-outline-danger" value={this.state.category}
            //     onChange={this.handleInputChange}
            //     name="category">Sports</button>
            // <button type="button" className="btn btn-outline-warning" value={this.state.category}
            //     onChange={this.handleInputChange}
            //     name="category">Home</button>
            // <button type="button" className="btn btn-outline-info" value={this.state.category}
            //     onChange={this.handleInputChange}
            //     name="category">Fashion</button>
            // <button type="button" className="btn btn-outline-secondary" value={this.state.category}
            //     onChange={this.handleInputChange}
            //     name="category">Books</button>
            // <button type="button" className="btn btn-outline-dark" value={this.state.category}
            //     onChange={this.handleInputChange}
            //     name="category">Other</button>
          </div> */}
          <div className="form-group">
            <label >Description:</label>
            <textarea type="text" className="form-control" id="description" placeholder="Description"  value={this.state.decription}
                onChange={this.handleInputChange}
                name="description"></textarea>
          </div>
          <div className="form-group">
            <label >Images: </label>
            <input type="file" id="images" placeholder="Images" multiple />
          </div>
  
          <button type="submit" className="btn btn-primary" style={buttonStyle}>Post</button>
  
        </form>
      </div>
    )
    }

  
}

export default Form;
