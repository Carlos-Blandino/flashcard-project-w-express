const path = require("path");
//use existing decks data
const cards = require(path.resolve("src/data/cards-data"));

//use this function to assign ID's
const nextId = require("../utils/nextId");

function list(req, res,next){
    res.json({data: cards})
}
function read(req, res, next) {
    const cardId = req.params.cardId;

    if(cardId){
        const newCard = cards.find((card) => {
            return card.id === Number(cardId)
        })
        res.json(newCard)
    }

}
module.exports = {
    list,
    read
}