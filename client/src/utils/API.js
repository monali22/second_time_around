import axios from "axios";

export default{
    savePost:function(postdata){
      return axios.post("http://localhost:3001/api/stock",postdata);
    }
};
