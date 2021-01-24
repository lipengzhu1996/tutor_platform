const mongoose = require('mongoose')

// Declare Schema
const TutorInfoSchema = new mongoose.Schema(
  {
    id: String,
    name: String,
    description: String,
    rate: Number,
    ratings: Number,
    hours: Number,
    price: Number,
    bio: String,
    edu: String,
    subjects: [String],
    address: String,
    reviews: [Object],
  },
  { timestamps: true }
);

// Declare Model to mongoose with Schema
const Todo = mongoose.model('Tutor', TutorInfoSchema)

// Export Model to be used in Node
module.exports = mongoose.model('Tutor')