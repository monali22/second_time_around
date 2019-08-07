import React from 'react';
import UploadImg from "./components/UploadImg";
import PostForm from './components/PostForm';
import Wrapper from "./components/Wrapper";
import PostCollectCard from "./components/PostCollectCard";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
    <div>
    <Navbar />
      <Jumbotron/>
      <UploadImg/>
      <PostForm />
      <Wrapper>
        <PostCollectCard/>
      </Wrapper>
    </div>
  </Router>
  );
}

export default App;


