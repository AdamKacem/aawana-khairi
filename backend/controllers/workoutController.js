const Workout = require("../modules/Workouts");
const mongoose = require("mongoose");

//get all workouts
const getAllWorkouts = async (req, res) => {
  const workouts = await Workout.find({});
  res.status(200).json(workouts);
  console.log("GETWORKOUT");
};

//get a single workout
const getWorkout = async (req, res) => {
  const { id } = req.params;
  //Check if id syntax is valid
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Wrong id" });
  }
  const workout = await Workout.findById(id);
  //Check if workout exists
  if (!workout) {
    return res.status(400).json({ error: "Can't find workout" });
  }
  res.json(workout);
};

//post a workout
const postWorkout = async (req, res) => {
  const { title, reps } = req.body;
  const workout = await Workout.create({ title, reps });
  res.status(200).json(workout);
};

//delete a workout
const deleteWorkout = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Can't find workout" });
  }
  const workout = await Workout.findOneAndDelete({ _id: id });
  if (!workout) {
    return res.status(400).json({ error: "Can't find workout" });
  }
  res.status(200).json(workout);
};

//update a workout

const updateWorkout = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Can't find workout" });
  }

  const workout = await Workout.findOneAndUpdate({ _id: id }, { ...req.body });

  if (!workout) {
    return res.status(400).json({ error: "Can't find workout" });
  }
  res.status(200).json(workout);
};

module.exports = {
  getAllWorkouts,
  getWorkout,
  postWorkout,
  deleteWorkout,
  updateWorkout,
};
