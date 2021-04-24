const router = require("express").Router();
const methodNotAllowed = require("../errors/methodNotAllowed");
const decksController = require("../decks/decks.controller")
router
    .route("/")
    .get(decksController.list)
    .all(methodNotAllowed)
router
    .route("/_embed=cards")
    .get(decksController.list)
    .all(methodNotAllowed)
router
    .route("/:deckId")
    .get(decksController.read)


module.exports = router;