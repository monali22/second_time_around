import axios from "axios";

export default{
    savePost: function(postdata){
      return axios.post("http://localhost:3001/api/stock",postdata);
    },
    getData: function(id){
      return axios.get("http://localhost:3001/api/stock/" + id);
    },
    deleteData: function(id) {
      return axios.delete("http://localhost:3001/api/stock/" + id);
    },
    getData: function(){
      return axios.get("http://localhost:3001/api/stock/");
    }
};
