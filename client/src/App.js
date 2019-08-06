import React from 'react';
import UploadImg from "./components/UploadImg";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import SignIn from "./SignIn/SignIn"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
    <div>
    <Navbar />
      <Jumbotron/>
      
    
    </div>
  </Router>
  );
}

export default App;


