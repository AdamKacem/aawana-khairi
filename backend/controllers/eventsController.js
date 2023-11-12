const Event = require("../modules/Event");
const mongoose = require("mongoose");
const multer = require("multer");

//set up the multer

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join("../../backend/images/"));
  },
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "_" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({
  storage: storage,
});

const uploadPhoto = () => {
  console.log("photo uploaded");
  upload.single("image");
};

const getEvent = async (req, res) => {
  const events = await Event.find({});
  res.status(200).json(events);
  console.log("GETEVENT");
};

const postEvent = async (req, res) => {
  const { title, description, photo } = req.body;
  const event = await Event.create({ title, description, photo });
  res.status(200).json(event);
  console.log("POSTEVENT");
};

module.exports = {
  uploadPhoto,
  getEvent,
  postEvent,
};
