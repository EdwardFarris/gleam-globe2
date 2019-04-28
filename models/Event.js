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

