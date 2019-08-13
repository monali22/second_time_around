import axios from "axios";

export default{
    savePost: function(postdata){
      return axios.post("/api/stock",postdata);
    },
    getDataById: function(id){
      return axios.get("/api/stock/" + id);
    },
    getData: function(){
      return axios.get("/api/stock/");
    },
    deleteData: function(id) {
      return axios.delete("/api/stock/" + id);
    },
    updatePost:function(id){
      return axios.post("/api/stock/"+id);
    },
// request the information to send it to the server
    saveItem: function(item) {
      return axios.post("/api/freeItems", item);
    },
    getEmail:function(msg){
      return axios.post("/api/freeItems",msg);
    },
    saveUser : function(userData){
      return axios.post("/api/user",userData);
    },
    updateUserData:function(name,data){
      return axios.put("/api/user/:"+name,{data});
    },
    findUser:function(email){
      return axios.get("/api/user/?email=" + email);
    },
    getUData: function(){
      return axios.get("/api/user/");
    },
    findUserID:function(id){
      return axios.get("/api/user/" + id);
    },
    getUSerData: function(id){
      return axios.get("/api/stock/?user_id="+id);
    },
};
