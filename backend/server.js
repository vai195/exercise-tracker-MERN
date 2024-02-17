require("dotenv").config();
const express = require("express");
const cors = require("cors");
const exerciseRoutes = require("./routes/exercises");
const mongoose = require("mongoose");

//express app
const app = express();
app.use(
  cors({
    origin: ["https://deploy-mern-frontend.vercel.app"],
    methods: ["POST", "GET"],
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
  .then(() => {
    //listen for requests
    app.listen(process.env.PORT, () => {
      console.log("connected to db and listening on port 4000");
    });
  })
  .catch((error) => {
    console.log(error);
  });
