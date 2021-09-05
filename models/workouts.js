const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Number, 
    default: Date.now
  },
  exercis:[
    {
      type: {
        type: String, 
        required: true,
      },
      name:{
        type: string, 
        required: true, 
      },
      duration:{
        type: Number, 
        required: true, 
      },
      weight: {
        type: Number,
      },
      reps: {
        type: Number,
        required: true, 
      },
      sets: {
        type: Number,
        required: true,
      }
    }
  ]
})

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout; 
