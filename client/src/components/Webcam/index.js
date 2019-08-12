import React from "react";
import Webcam from "react-webcam";
 

class WebcamCapture extends React.Component {
  setRef = webcam => {
    this.webcam = webcam;
  };
 
  capture = () => {
    const imageSrc = this.webcam.getScreenshot();
    this.uploadFile(imageSrc);
  };
 
  render() {
    const videoConstraints = {
      width: 1280,
      height: 720,
      facingMode: "user"
    };
 
    return (
      <div>
        <Webcam
          audio={false}
          height={350}
          ref={this.setRef}
          screenshotFormat="image/jpeg"
          width={350}
          videoConstraints={videoConstraints}
        />
        <button onClick={this.capture}>Capture photo</button>
      </div>
    );
  }
  
  dataURItoBlob = dataURI => {
    var binary = atob(dataURI.split(',')[1]);
    var array = [];
    for(var i = 0; i < binary.length; i++) {
        array.push(binary.charCodeAt(i));
    }
    return new Blob([new Uint8Array(array)], {type: 'image/jpeg'});
}

  uploadFile = encodedImageString => {
    const formData = new FormData();

    formData.append(0, this.dataURItoBlob(encodedImageString));

    //sends the img to server
    fetch(`http://localhost:3001/image-upload`, {
      method: 'POST',
      body: formData
    })
      .then(res => res.json())
      .then(images => {
        console.log(images[0].url);
      });
  }
}

export default WebcamCapture;