import React from 'react';
import UploadImg from "./components/UploadImg";
import Wrapper from "./components/Wrapper";
import PostCollectCard from "./components/PostCollectCard";


function App() {
  return (
    <div>
      <UploadImg/>
      <Wrapper>
        <PostCollectCard/>
      </Wrapper>
    </div>
  );
}

export default App;


