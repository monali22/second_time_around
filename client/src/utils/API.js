import axios from "axios";

export default {
    savePost: function(postdata) {
      return axios.post("http://localhost:3001/api/stock", postdata);
    },

// request the information to send it to the server
    saveItem: function(item) {
      return axios.post("http://localhost:3001/api/freeItems", item);
    }
};