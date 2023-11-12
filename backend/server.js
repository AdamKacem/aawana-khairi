require("dotenv").config();

const express = require("express");

const mongoose = require("mongoose");

const cors = require("cors");

const multer = require("multer");

const path = require("path");

const app = express();

app.use(express.json());
app.use(cors());

//define paths
const events = require("./routes/eventsRoute");
const workouts = require("./routes/workoutsRoute");

app.use("/api/uploadPhoto", events);
app.use("/api/events", events);
app.use("/api/workouts", workouts);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(
        "listening on port and connected to mongoDB:",
        process.env.PORT
      );
    });
  })
  .catch((error) => {
    console.log(error);
  });
