import React,{ Component } from 'react'
import API from "../utils/API"
import {InputText,TextAreaText,FormBtnn} from "../components/FormInputs";


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
     
        <form style={formStyle}>
        <InputText
                value={this.state.category}
                onChange={this.handleInputChange}
                name="category"
                placeholder="Category"
              />
              <TextAreaText
                value={this.state.description}
                onChange={this.handleInputChange}
                name="description"
                placeholder="Description"
              />
              <FormBtnn
                
                onClick={this.handleFormSubmit}
              >
                Submit Book
              </FormBtnn>
    </form>
    )
    }

  
}

export default Form;
