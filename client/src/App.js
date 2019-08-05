import React from 'react';
import UploadImg from "./components/UploadImg";
import Wrapper from "./components/Wrapper";
import PostCollectCard from "./components/PostCollectCard";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";

function App() {
  return (
    <div>
      <Navbar/>
      <Jumbotron/>
      <UploadImg/>
      <Wrapper>
        <PostCollectCard/>
      </Wrapper>
    </div>
  );
}

export default App;


