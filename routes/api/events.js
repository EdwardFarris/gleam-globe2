const router = require("express").Router();
const eventsController = require("../../controllers/eventsController");

<<<<<<< HEAD
// Matches with "/api/books"
router.route("/")
//   .get(booksController.findAll)
  .post(eventsController.create);

// Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(booksController.findById)
//   .put(booksController.update)
//   .delete(booksController.remove);

module.exports = router;
=======
// Matches with "/api/events"
router.route("/")
  .get(eventsController.findAll)
  .post(eventsController.create);

// Matches with "/api/events/:id"
router
  .route("/:id")
  .get(eventsController.findById)
  .put(eventsController.update)
  .delete(eventsController.remove);

module.exports = router;
>>>>>>> 02d2e16a07eb9aca8edec8f913274641d925a3fb
