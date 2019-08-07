import axios from "axios";

export default{
    savePost: function(postdata){
      return axios.post("http://localhost:3001/api/stock",postdata);
    },
    getDataById: function(id){
      return axios.get("http://localhost:3001/api/stock/" + id);
    },
    getData: function(){
      return axios.get("http://localhost:3001/api/stock/");
    },
    deleteData: function(id) {
      return axios.delete("http://localhost:3001/api/stock/" + id);
    },
// request the information to send it to the server
    saveItem: function(item) {
      return axios.post("http://localhost:3001/api/freeItems", item);
    }
   
};
