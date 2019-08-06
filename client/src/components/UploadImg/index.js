import React, { Component } from 'react'
// import { API_URL } from './config'
import PostingForm from "../PostingForm"
import API from '../../utils/API';

class UploadImg extends Component {
  
  state = {
    uploading: false,
    imageUrl: ""
  }

  onChange = e => {
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
        imageUrl: images[0].url
      });
    });
  }

  // submitting this.state.imageURL to the API
  onSubmit = (e) => {
    console.log("Submitting");
    API.saveItem({
              name: "SomeItemName",
        description: "SomeDescription",
        location: "Random location",
        imageUrl: this.state.imageUrl
    });

  }

  render() {
    return (
      <div>
          <PostingForm onChange={this.onChange} image={this.state.imageUrl} onSubmit={this.onSubmit}></PostingForm>
      </div>
      //adding this.state.imageUrl
    )
  }
}

export default UploadImg;