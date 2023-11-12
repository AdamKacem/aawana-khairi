const express = require("express");
const router = express.Router();
const {
  getAllWorkouts,
  getWorkout,
  postWorkout,
  deleteWorkout,
  updateWorkout,
} = require("../controllers/workoutController");

 



//get all workouts
router.get("/", getAllWorkouts);
//get a specific workout
router.get("/:id", getWorkout);
//post workout
router.post("/", postWorkout);
//delete workout
router.delete("/:id", deleteWorkout);
//update a workout
router.patch("/:id", updateWorkout);

module.exports = router;
