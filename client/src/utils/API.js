import axios from "axios";

export default {
  // Gets all books
  getStock: function() {
    return axios.get("/api/stocks");
  },
//   // Gets the book with the given id
//   getBook: function(id) {
//     return axios.get("/api/books/" + id);
//   },
//   // Deletes the book with the given id
//   deleteBook: function(id) {
//     return axios.delete("/api/books/" + id);
//   },
  // Saves a book to the database
  saveStock: function(Data) {
    return axios.post("/api/stocks", Data);
  }
};
