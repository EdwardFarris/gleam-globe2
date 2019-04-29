const router = require("express").Router();
const SignInUp = require("../../controllers/controller");

// Matches with "/api/users" Need to associate with controllers/ create controllers
router.route("/")
 .get(SignInUp.findAll)
 .post(SignInUp.create);

// Matches with "/api/signIn/:id"
router
 .route("/:id")
 .get(SignInUp.findById)
 .put(SignInUp.update);