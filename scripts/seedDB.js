const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Events collection and inserts the events below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/project3"
);

const eventSeed = [
  {
    title: "FreestonePark-Cleanup",
    date: "5/12/19",
    start_time:
      "9:00am",
    street_address: "1045 E Juniper Road"
  },
  {
    title: "TempeBeachPark-Cleanup",
    date: "6/15/19",
    start_time:
      "8:00am",
    street_address: "80 W Rio Salado Pkwy"
  },
  {
    title: "SaltRiver-Cleanup",
    date: "6/21/19",
    start_time:
      "7:30am",
    street_address: "9200 N Bush Hwy"
  },
  {
    title: "ParkUniversity-Cleanup",
    date: "7/5/19",
    start_time:
      "10:00am",
    street_address: "92 W Vaughn Ave"
  },
  {
    title: "CosmoDogPark-Cleanup",
    date: "7/16/19",
    start_time:
      "11:00am",
    street_address: "2502 E Ray Rd"
  },
  {
    title: "Chandler-Cleanup",
    date: "5/12/19",
    start_time:
      "9:00am",
    street_address: "58 S San Marcos Pl"
  },

];

db.Event
  .remove({})
  .then(() => db.Event.collection.insertMany(eventSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

const userSeed = [
  {
    firstname: "Bon",
    lastname: "Jovi",
    username:
      "BonBon",
    email: "BonJ@gmail.com",
    password: 12345
  }
];

  db.User
    .remove({})
    .then(() => db.User.collection.insertMany(userSeed))
    .then(data => {
      console.log(data.result.n + " records inserted!");
      process.exit(0);
    })
    .catch(err => {
      console.error(err);
      process.exit(1);
    });