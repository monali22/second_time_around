import React from "react";
import Modal from 'react-modal';
import "./style.css";
import ReactDOM from 'react-dom';
// import Background from './donate.jpg';
import SocialLogin from '@majac/react-social-login';
import { FacebookLoginButton } from "react-social-login-buttons";
import { GoogleLoginButton } from "react-social-login-buttons";


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: '50%',
    bottom: '50%',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    height: '100%',
    width: '70%',
  }
};


const styleLogIn = {
  "marginLeft": "1px"
}


Modal.setAppElement('#main')

class Navbar extends React.Component {


  printConsole() {
    console.log("loff");
  }
  state = {
    email: "",
    uname: "",
    password: "",
    modalIsOpen: false,
    facebook: '345443186398494',
    google:
      '801055399463-0buo8uiukhiial91079gnd8jf5h368p2.apps.googleusercontent.com',
  };

  // this.openModal = this.openModal.bind(this);
  // this.afterOpenModal = this.afterOpenModal.bind(this);
  // this.closeModal = this.closeModal.bind(this);


  openModal = (e) => {
    e.preventDefault();
    this.setState({ modalIsOpen: true });
  }

  afterOpenModal = () => {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = 'blue';
    this.subtitle.style.textAlign = "center";
    this.subBtn.style.backgroundColor = "blue";
    this.subBtn.style.color = "white";
    this.subBtn.style.marginLeft = "40%";
  }

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  }
  postData = (e) => {
    e.preventDefault();
    console.log(this.state);
  }
  handleInputChange = event => {
    const { name, value } = event.target;
    console.log(event.target);
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light">
          <a className="navstylelogo navbar-brand logo" href="#">
            Second time around
        </a>
          {/* <img className="navstylelogo navbar-brand logo" src={require('./logo.png')} height="80" class="d-inline-block align-top" alt="secondtime"/> */}
          <button
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="navstyle nav-link" href="#">
                  {/* Home <span className="sr-only">(current)</span> */}
                </a>
              </li>
              <li className="navstyle nav-item">
                <a className="nav-link" href="#">
                  {/* Donate */}
              </a>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input
                className="navstyle form-control mr-sm-2"
                type="search"
                // placeholder="Search"
                aria-label="Search"
              />
              <button className="navbutton btn btn-warning my-2 btn-sm" type="submit">
                Search
            </button>

              <button className="navbutton btn btn-warning my-2 btn-sm" style={styleLogIn} onClick={this.openModal} >
                Log In
            </button>

              <Modal
                isOpen={this.state.modalIsOpen}
                // onAfterOpen={this.afterOpenModal}
                onRequestClose={this.closeModal}
                style={customStyles}
                contentLabel="Example Modal"
                className="Modal"
                overlayClassName="Overlay"
              >
                <div className="divSide">
                  <h1 className="helpSomeone">Help Someone</h1>
                  <ul className="ulHelp">
                    <p><i class="fa fa-camera"></i> Post listings</p>
                    <p><i class='fas fa-comments'></i> Chat with buyers and sellers</p>
                    <p><i class="fa fa-heart"></i> Save listings</p>
                  </ul>
                </div>

                <div className="loginStuff">
                  <h3 className="titleInLOgin">Second Time Around</h3>
                  <p className="subTitle">Take and give quickly, safely and locally. It’s for second time around!</p>
                  <br></br>
                  <p className="socialLoginLine"><span>Quickly Connect with</span></p>
                  <SocialLogin
                    options={{
                      provider: 'facebook',
                      appId: this.state.facebook,
                      onSuccess: res => {
                        console.log('Login Success', res);
                      },
                      onFail: error => {
                        console.log('Login Fail', error);
                      }
                    }}
                    component={<FacebookLoginButton />}
                  />
                  <br></br>
                  <SocialLogin
                    options={{
                      provider: 'google',
                      appId: this.state.google,
                      onSuccess: res => {
                        console.log('Login Success', res);
                      },
                      onFail: error => {
                        console.log('Login Fail', error);
                      }
                    }}
                    component={<GoogleLoginButton />}
                  />
                  <br></br>
                  <p className="socialLoginLine"><span>Or USE YOUR EMAIl</span></p>

                      <div className="footerSign">
                      <a href="#nav-home" className=" " >Sign In </a>
                     
                      <a href="#nav-content1" className="verticalLine contentSignUp" > Sign Up</a>
                      </div>
                      
                </div>

                {/* <div style={hidden}><p>heyyyyyysshhs</p></div> */}

                {/* <h2 ref={subtitle => this.subtitle = subtitle}>Register</h2>
                {/* <button onClick={this.closeModal} style={closeButton} ><i class="fa fa-close"></i></button> */}
                {/* <div>I am a modal</div> */}
                {/* <form>
                  <div className="form-group">
                    <label >Email address:</label>
                    <input type="email" className="form-control" id="email" name="email" value={this.state.email} onChange={this.handleInputChange} />
                  </div>
                  <div className="form-group">
                    <label >User Name:</label>
                    <input type="text" className="form-control" id="uname" name="uname" value={this.state.uname} onChange={this.handleInputChange}/>
                  </div>
                  <div className="form-group">
                    <label>Password:</label>
                    <input type="password" className="form-control" id="pwd" name="password" value={this.state.password} onChange={this.handleInputChange}/>
                  </div>

                  <button type="submit" className="btn btn-default" ref={subBtn => this.subBtn = subBtn} onClick={this.postData}>Submit</button>
                </form> */}
              </Modal>
            </form>
          </div>
        </nav>
      </div>
    );

  }
}
export default Navbar;
