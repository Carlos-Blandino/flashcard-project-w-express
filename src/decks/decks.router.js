const router = require("express").Router();
const methodNotAllowed = require("../errors/methodNotAllowed");
const decksController = require("../decks/decks.controller")
router
    .route("/")
    .get(decksController.list)
    .all(methodNotAllowed)


module.exports = router;