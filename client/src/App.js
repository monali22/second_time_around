import React,{Component} from 'react';
import UploadImg from "./components/UploadImg";
import PostForm from './components/PostForm';
import ItemsDonated from "./components/ItemsDonated";
import Wrapper from "./components/Wrapper";
import { wrap } from 'module';

class App extends Component {

  state={
    stock:[]
  }
  /*updatestock=(newstock)=>{
    console.log("inside app", newstock);
    this.setState({stock:newstock});
      
    }*/
  render()
  {


  return (
    <div>
      
      
   
      <PostForm />
      <Wrapper>
        
      <ItemsDonated />
      </Wrapper>
    

      
    </div>
  );
}
}
export default App;


