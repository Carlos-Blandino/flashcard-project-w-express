const router = require("express").Router();
const methodNotAllowed = require("../errors/methodNotAllowed");
const decksController = require("../decks/decks.controller")
router
    .route("/")
    .get(decksController.list)
    .post(decksController.create)
    .all(methodNotAllowed)
router
    .route("/_embed=cards")
    .get(decksController.list)
    .all(methodNotAllowed)
router
    .route("/:deckId")
    .put(decksController.update)
    .delete(decksController.destroy)
    .get(decksController.read)

    .all(methodNotAllowed)


module.exports = router;