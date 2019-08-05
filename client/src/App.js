import React from 'react';
<<<<<<< HEAD
import Form from "./Form/Form"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//SETTING GIT HUB TEST 1
=======
import UploadImg from "./components/UploadImg";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";

>>>>>>> bb223c2883b1b6053a675308ef3a1b7519b3e14f
function App() {
  return (
    <Router>
    <div>
<<<<<<< HEAD
      
      <Switch>
        <Route exact path="/" component={Form} />
      </Switch>
=======
      <Navbar/>
      <Jumbotron/>
      <UploadImg/>
>>>>>>> bb223c2883b1b6053a675308ef3a1b7519b3e14f
    </div>
  </Router>
  );
}

export default App;


