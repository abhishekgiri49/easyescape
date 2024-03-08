const mongoose = require("mongoose");

const tripSchema = new mongoose.Schema({
  package: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Package", // Reference to the Place model
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Reference to the Place model
    required: true,
  },
  bookingDate: { type: Date, default: Date.now },
  numberOfAdults: { type: Number },
  numberOfChildren: { type: Number },
  status: { type: String },
  specialRequest: { type: String },
  checkInDate: { type: Date },
  checkOutDate: { type: Date },
  // Add other fields as needed
});

const Trip = mongoose.model("Trip", tripSchema);

module.exports = Trip;
