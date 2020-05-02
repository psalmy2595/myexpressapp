const express = require("express");
const app = express();
const mongoose = require("mongoose");
const authRoutes = require("./routes/auth");



mongoose
  .connect(
    "mongodb://localhost:27017/expressapp",
    { useNewUrlParser: true, useUnifiedTopology: true }
  ).then(result => {
    console.log("Database connected");
    app.listen(3000);
  })
  .catch(err => console.log(err));
  
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use('/',authRoutes);

app.use((req, res) => {
    res.send("<h1>Welcome to my app</h1>");
  });


