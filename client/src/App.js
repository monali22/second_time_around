import React,{Component} from 'react';
import PostForm from './components/PostForm';
import ItemsDonated from "./components/ItemsDonated";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar" ;
import Jumbotron from "./components/Jumbotron";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SimpleMap from './components/SimpleMap';


function App() {
  return (
    <Router>
    <div>
    <Navbar />
      <Jumbotron/>
      <Wrapper>
        <PostForm />
      </Wrapper>
      <Wrapper>
      <ItemsDonated />
      </Wrapper>
      <SimpleMap/>
    </div>
  </Router>
  );
}



  


export default App;

