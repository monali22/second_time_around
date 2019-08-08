import React from "react";
// import Modal from 'react-modal';
import "./style.css";
// import ReactDOM from 'react-dom';
// // import Background from './donate.jpg';
// import SocialLogin from '@majac/react-social-login';
// import { FacebookLoginButton } from "react-social-login-buttons";
// import { GoogleLoginButton } from "react-social-login-buttons";
import LoginButton from "../LoginButton"
import SignOutButton from "../SignOutButton"


// const customStyles = {
//   content: {
//     top: '50%',
//     left: '50%',
//     right: '50%',
//     bottom: '50%',
//     marginRight: '-50%',
//     transform: 'translate(-50%, -50%)',
//     height: '100%',
//     width: '70%',



//   }
// };


// const styleLogIn = {
//   "marginLeft": "1px"
// }







//Modal.setAppElement('#main')

class Navbar extends React.Component {

  

  ifLoginClicked = () => {

    this.setState({ isLoggedIn: true });

  }



  ifLogoutClicked = () => {

    this.setState({ isLoggedIn: false });

  }

  logInInfo =(val) =>{
    console.log("hurrat  "+val);
  }

  handleRef = (val) =>{
    {localStorage.setItem("nameId",val)}
  }
  
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

              {

                (localStorage.getItem("nameId").length!=0) ? (

                  <SignOutButton refId={this.handleRef}/>

                ) : (

                    <LoginButton refId={this.handleRef}/>

                  )

              }

            </form>
          </div>
        </nav>
      </div>
    );

  }
}
export default Navbar;
