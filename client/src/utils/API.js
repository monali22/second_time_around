import axios from "axios";

export default{
    savePost: function(postdata){
      return axios.post("https://second-time-around.herokuapp.com/api/stock",postdata);
    },
    getDataById: function(id){
      return axios.get("https://second-time-around.herokuapp.com/api/stock/" + id);
    },
    getData: function(){
      return axios.get("https://second-time-around.herokuapp.com/api/stock/");
    },
    deleteData: function(id) {
      return axios.delete("https://second-time-around.herokuapp.com/api/stock/" + id);
    },
    updatePost:function(id){
      return axios.post("https://second-time-around.herokuapp.com/api/stock/"+id);
    },
// request the information to send it to the server
    saveItem: function(item) {
      return axios.post("https://second-time-around.herokuapp.com/api/freeItems", item);
    },
    getEmail:function(msg){
      return axios.post("https://second-time-around.herokuapp.com/api/freeItems",msg);
    },
    saveUser : function(userData){
      return axios.post("https://second-time-around.herokuapp.com/api/user",userData);
    },
    updateUserData:function(name,data){
      return axios.put("https://second-time-around.herokuapp.com/api/user/:"+name,{data});
    },
    findUser:function(email){
      return axios.get("https://second-time-around.herokuapp.com/api/user/?email=" + email);
    },
    getUData: function(){
      return axios.get("https://second-time-around.herokuapp.com/api/user/");
    },
    findUserID:function(id){
      return axios.get("https://second-time-around.herokuapp.com/api/user/" + id);
    },
    getUSerData: function(id){
      return axios.get("https://second-time-around.herokuapp.com/api/stock/?user_id="+id);
    },
};
