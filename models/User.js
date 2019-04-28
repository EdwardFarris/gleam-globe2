
<<<<<<< HEAD
//Setting up database using mySQL

//Table for user information
module.exports = function(sequelize, Sequelize) {

	var User = sequelize.define('user', {
		id: { autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER},
		firstname: { type: Sequelize.STRING,notEmpty: true},
		lastname: { type: Sequelize.STRING,notEmpty: true},
		username: {type:Sequelize.TEXT},
		title : {type:Sequelize.TEXT},
        email: { type:Sequelize.STRING, validate: {isEmail:true} },
        last_login: {type: Sequelize.INTEGER},
		password : {type: Sequelize.STRING,allowNull: false }, 
        last_login: {type: Sequelize.DATE},
        status: {type: Sequelize.ENUM('active','inactive'),defaultValue:'active' }

});

	return User;

}
=======
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
	firstname: { type: String, required: true },
	lastname: { type: String, required: true },
	username: { type: String, required: true },
	title: { type: String, required: true },
	email: { type: String, required: true },
	password: { type: String, required: true },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
>>>>>>> 02d2e16a07eb9aca8edec8f913274641d925a3fb
