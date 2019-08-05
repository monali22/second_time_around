import React, { Component } from 'react'
// import { API_URL } from './config'
import PostingForm from "../PostingForm"

class UploadImg extends Component {
  
  state = {
    uploading: false,
    images: []
  }

  onChange = e => {
    const files = Array.from(e.target.files)
    this.setState({ uploading: true })

    const formData = new FormData()

    files.forEach((file, i) => {
      formData.append(i, file)
    })

    fetch(`http://localhost:3001/image-upload`, {
      method: 'POST',
      body: formData
    })
    .then(res => res.json())
    .then(images => {
      this.setState({ 
        uploading: false,
        images
      })
    })
  }

  render() {
    return (
      <div>
          <PostingForm onChange={this.onChange}></PostingForm>
      </div>
    )
  }
}

export default UploadImg;