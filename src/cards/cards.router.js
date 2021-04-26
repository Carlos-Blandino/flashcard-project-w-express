const router = require("express").Router();
const methodNotAllowed = require("../errors/methodNotAllowed");
const cardsController = require("../cards/cards.controller");

router
    .route("/")
    .get(cardsController.list)
    .post(cardsController.create)
    .all(methodNotAllowed)

router
    .route("/:cardId")
    .get(cardsController.read)
    .put(cardsController.update)
    .delete(cardsController.destroy)
    .all(methodNotAllowed)
module.exports = router;