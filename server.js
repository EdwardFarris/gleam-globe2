
const express = require('express');
const app = express();
const passport = require('passport');
const session = require('express-session');
const bodyParser = require('body-parser');
// const env = require('dotenv').load();
const env = require('dotenv').config();
const routes = require("./routes");
const PORT = process.env.PORT || 3001;

//For Body Parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//For Passport
app.use(session({ secret: 'keyboard cat', resave: true, saveUninitialized: true })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

//Models
var models = require("./models");
console.log(models)

//Sync Database
models.sequelize.sync().then(function () {

    console.log('Nice! Database looks fine')

}).catch(function (err) {

    console.log(err, "Something went wrong with the Database Update!")

});

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("build"));
}
// Add routes, both API and view
app.use(routes);

app.get('/', function (req, res) {

    res.send('Welcome to Passport with Sequelize');

});


app.listen(PORT, function (err) {
    console.log(`API server listening on ${PORT}`)
    // if (!err)
    //     console.log(`API server listening on ${PORT}`);
    // else console.log(err)

});