const Exercise = require("../models/exerciseModel");
const mongoose = require("mongoose");

//get all exercises
const getExercises = async (req, res) => {
  const user_id = req.user._id;
  const exercises = await Exercise.find({ user_id }).sort({ createdAt: -1 });
  res.status(200).json(exercises);
};

//get a single exercise
const getExercise = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such exercise" });
  }
  const exercise = await Exercise.findById(id);
  if (!exercise) {
    return res.status(404).json({ error: "No such exercise" });
  }

  res.status(200).json(exercise);
};

//create a exercise
const createExercise = async (req, res) => {
  const { title, reps, weight } = req.body;

  let emptyFields = [];

  if (!title) {
    emptyFields.push("title");
  }

  if (!weight) {
    emptyFields.push("weight");
  }

  if (!reps) {
    emptyFields.push("reps");
  }

  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: "Please fill in all the fields", emptyFields });
  }

  //add doc to db
  try {
    const user_id = req.user._id;
    const exercise = await Exercise.create({ title, reps, weight, user_id });
    res.status(200).json(exercise);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//delete a exercise
const deleteExercise = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such exercise" });
  }
  const exercise = await Exercise.findOneAndDelete({ _id: id });
  if (!exercise) {
    return res.status(404).json({ error: "No such exercise" });
  }

  res.status(200).json(exercise);
};

//update a exercise
const updateExercise = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such exercise" });
  }
  const exercise = await Exercise.findByIdAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );
  if (!exercise) {
    return res.status(404).json({ error: "No such exercise" });
  }

  res.status(200).json(exercise);
};

module.exports = {
  createExercise,
  getExercise,
  getExercises,
  deleteExercise,
  updateExercise,
};
