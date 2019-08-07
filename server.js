const express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes");
const cloudinary = require('cloudinary')
const formData = require('express-form-data')
const app = express();
const PORT = process.env.PORT || 3001;
const cors = require('cors');
require('dotenv').config()


cloudinary.config({
  cloud_name: process.env.cloud_name,
  api_key: process.env.api_key,
  api_secret: process.env.api_secret,
});

app.use(formData.parse());

//app.use(cors({
  //origin: "localhost:3001"
//}))
app.use(cors());

app.post('/image-upload', (req, res) => {

  console.log("Received image!");
  const values = Object.values(req.files);
  const promises = values.map(image => cloudinary.uploader.upload(image.path));

  Promise
    .all(promises)
    .then(results => res.json(results));
});

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/secondturnaround");

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
