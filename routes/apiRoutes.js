const router = require("express").Router();
const workouts = require("../models")

router.get("/api/workouts", (req, res) => {
  workouts.Workout.find({})
  .then(dbWorkout => {
    res.json(dbWorkout);
  })
  .catch(err => {
    res.status(400).json(err)
    console.log(err)
  })
});

router.post("/api/workouts", (req, res) => {
  workouts.Workout.create({})
  .then(dbWorkout => {
    res.json(dbWorkout);
  })
  .catch(err => {
    res.status(400).json(err)
    console.log(err)
  })
});

router.put("/api/workouts/:id", (req, res) => {
  const id = req.params.id;
  const body = req.body;

  workouts.Workout.findOneAndUpdate(
    { _id: id }, 
    { $push: { exercises: body }}, 
    { new: true, runValidators: true} //this is so it doesn't log a new workout for every exercise you put in on one day. It adds to duration, weight ect. 
    )
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
      console.log(err)
    });
});

router.get("/api/workouts/range", (req, res) => {
  workouts.Workout.find({})
  .sort({$natural: -1})// shows the last 7 days. Only issue is it shows the chart backwards
  .limit(7) //this limits the data so that it shows 7 workouts
  .then(dbWorkout => {
    res.json(dbWorkout);
  })
  .catch((err) => {
    res.status(400).json(err);
    console.log(err)
  });
});

module.exports = router;