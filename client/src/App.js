import React, { Component } from 'react';
// import PostForm from './components/PostForm';
// import ItemsDonated from "./components/ItemsDonated";
// import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Footer from "./components/Footer";
// import CardWrapper from "./components/CardWrapper";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import PostCollectCard from './components/PostCollectCard';
import Profile from "./pages/Profile";
import Donate from "./pages/Donate";
import Home from "./pages/Home";


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Jumbotron />
        <Route exact path="/" component={Home} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/donate" component={Donate} />
        <Footer/>
      </div>
    </Router>
  );
}






export default App;

