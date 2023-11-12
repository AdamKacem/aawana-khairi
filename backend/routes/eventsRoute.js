const express = require("express");
const router = express.Router();
const {
  uploadPhoto,
  postEvent,
  getEvent,
} = require("../controllers/eventsController");

// Route to create a new event
//router.post("/", createEvent);

//get an event
router.get("/", getEvent);

//post an event
//router.post("/", postEvent);
// Route to upload an image
router.post("/uploadPhoto", uploadPhoto, (req, res) => {
  console.log(req.files);
  res.status(200).json({ msg: "done" });
});

module.exports = router;
