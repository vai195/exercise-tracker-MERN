require("dotenv").config();
const express = require("express");
const cors = require("cors");

const mongoose = require("mongoose");
const exerciseRoutes = require("./routes/exercises");
const userRoutes = require("./routes/user");

//express app
const app = express();
app.use(
  cors({
    origin: [
      "http://localhost:4000",
      "http://localhost:3000",
      "https://exercise-tracker-mern-v1.netlify.app",
    ],
    methods: "GET,POST,PUT,DELETE, PATCH",
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
app.use("/api/user", userRoutes);

//connect to database
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    //listen for requests
    app.listen(4000, () => {
      console.log("connected to db and listening on port 4000");
    });
  })
  .catch((error) => {
    console.log(error);
  });

module.exports = app;
