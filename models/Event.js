const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  title: { type: String, required: true },
  date: { type: String, required: true },
  start_time: { type: String, required: true },
  street_address: { type: String, required: true },
  location: {
    type: {
      type: String, // Don't do `{ location: { type: String } }`
      enum: ['Point'], // 'location.type' must be 'Point'
      required: true
    },
    coordinates: {
      type: [Number],
      required: true
    }
  }
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;



