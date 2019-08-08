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
    updatePost:function(id,data){
      return axios.put("http://localhost:3001/api/stock/"+id,{data});
    },
// request the information to send it to the server
    saveItem: function(item) {
      return axios.post("http://localhost:3001/api/freeItems", item);
    },
    saveUser : function(userData){
      return axios.post("http://localhost:3001/api/user",userData);
    },
    updateUserData:function(name,data){
      return axios.put("http://localhost:3001/api/user/:"+name,{data});
    }
};
