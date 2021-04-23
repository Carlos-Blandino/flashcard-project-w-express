const router = require("express").Router();
const methodNotAllowed = require("../errors/methodNotAllowed");
const cardsController = require("../cards/cards.controller");

router
    .route("/")
    .get(cardsController.list)
    .all(methodNotAllowed)


module.exports = router;