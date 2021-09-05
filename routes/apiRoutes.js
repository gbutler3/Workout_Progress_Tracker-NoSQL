const router = require("express").Router();

router.get("/api/workouts", (req, res) => {
  database.Workout.find()
  .then(dbWorkout => {
    res.json(dbWorkout);
  })
  .catch(err => {
    res.status(400).json(err)
  })
})

module.exports = router;
