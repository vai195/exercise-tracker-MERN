require("dotenv").config();
const express = require("express");
const cors = require("cors");
const exerciseRoutes = require("./routes/exercises");
const mongoose = require("mongoose");

//express app
const app = express();
app.use(
  cors({
    origin: [""],
    methods: ["POST", "GET", "DELETE", "PATCH"],
    credentials: true,
  })
);

//middleware
app.use(express.json());
//request log
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//routes
app.use("/api/exercises", exerciseRoutes);

//connect to database
mongoose
  .connect(process.env.MONGO_URI)
  // .connect(
  //   "mongodb+srv://vsonnaku:Vaimoney.1@exercise-mernapp.utxesbo.mongodb.net/?retryWrites=true&w=majority"
  // )
  .then(() => {
    //listen for requests
    app.listen(4000, () => {
      console.log("connected to db and listening on port 4000");
    });
  })
  .catch((error) => {
    console.log(error);
  });
