const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

// API Routes
router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
<<<<<<< HEAD
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../../build/index.html"));
});

module.exports = router;
=======
router.use(function (req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

router.use(function (req, res) {
  res.sendFile(path.join(__dirname, "../signup/src/SignUpForm"));
});

router.use(function (req, res) {
  res.sendFile(path.join(__dirname, "../signup/src/SignInForm"));
});

module.exports = router;
>>>>>>> 02d2e16a07eb9aca8edec8f913274641d925a3fb
