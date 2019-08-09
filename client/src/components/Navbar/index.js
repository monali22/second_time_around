import React from "react";
// import Modal from 'react-modal';
import "./style.css";
// import ReactDOM from 'react-dom';
// // import Background from './donate.jpg';
// import SocialLogin from '@majac/react-social-login';
// import { FacebookLoginButton } from "react-social-login-buttons";
// import { GoogleLoginButton } from "react-social-login-buttons";
import LoginButton from "../LoginButton";
import SignOutButton from "../SignOutButton";
import {connect} from "react-redux";
import {Link } from "react-router-dom"


class Navbar extends React.Component {

  ifLoginClicked = () => {
    this.setState({ isLoggedIn: true });
  }

  ifLogoutClicked = () => {
    this.setState({ isLoggedIn: false });
  }

  logInInfo = (val) => {
    console.log("hurrat  " + val);
  }

  handleRef = (val) => {
    { localStorage.setItem("nameId", val) }
  }

  render() {
    return (

      <div>
        <nav className="navbar navbar-expand-lg navbar-light">

          <Link className="navstylelogo navbar-brand logo" to="/">
            Second time around
      </Link>


          {/* <a className="navstylelogo navbar-brand logo" href="#">
            Second time around
        </a> */}
          {/* <img className="navstylelogo navbar-brand logo" src={require('./logo.png')} height="80" class="d-inline-block align-top" alt="secondtime"/> */}
          <div>
            {/* <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/profile"
              className={
                window.location.pathname === "/" || window.location.pathname === "/profile"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Profile
            </Link>
          </li>
        </ul> */}
          </div>
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
                placeholder="Search"
                aria-label="Search"
              />
            </form>

            <a href="/profile"><button className="navbutton btn btn-warning my-2 btn-sm">Profile</button></a>
              
              {(localStorage.getItem("nameId")!==null)?<SignOutButton />:<LoginButton />}
          </div>
        </nav>
      </div>
    );

  }
}
export default Navbar;
