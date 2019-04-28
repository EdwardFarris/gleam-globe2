<<<<<<< HEAD
//Setting up database using mySQL

//Table for new clean-up events, will store date of event, 
//time of event, and street address of event
module.exports = function(sequelize, Sequelize) {

	var Event = sequelize.define('event', {
		id: { autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER},
		before_img_url: { type: Sequelize.STRING },
		after_img_url: { type: Sequelize.STRING },
		date: { type: Sequelize.DATE, allowNull: false},
		start_time: {type:Sequelize.TIME, allowNull: false},
        street_address: {type:Sequelize.STRING, allowNull: false },
        city: { type:Sequelize.STRING },
        state: {type: Sequelize.STRING},
		zip: {type: Sequelize.INTEGER}, 
        lat: {type: Sequelize.DECIMAL(10, 8) },
        lng: {type: Sequelize.DECIMAL(11, 8) },
        status: {type: Sequelize.ENUM('active','inactive'),defaultValue:'active' }

});

	return Event;

} 
=======
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  title: { type: String, required: true },
  date: { type: String, required: true },
  start_time: { type: String, required: true },
  street_address: { type: String, required: true }
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;


>>>>>>> 02d2e16a07eb9aca8edec8f913274641d925a3fb

