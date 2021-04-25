const router = require("express").Router();
const methodNotAllowed = require("../errors/methodNotAllowed");
const cardsController = require("../cards/cards.controller");

router
    .route("/")
    .get(cardsController.list)
    .all(methodNotAllowed)

router
    .route("/:cardId")
    .get(cardsController.read)
    .all(methodNotAllowed)
module.exports = router;