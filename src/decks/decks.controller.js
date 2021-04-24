const path = require("path");
//use existing decks data


 const decks = require(path.resolve("src/data/decks-data"));
 const cards = require(path.resolve("src/data/cards-data"));

//use this function to assign ID's
const nextId = require("../utils/nextId");

function list(req, res,next){
   // console.log('in list')
    const embedCards = req.query._embed

    if(embedCards === "cards") {
const newDeck = decks.map( (deck) => {
    const deckCards = cards.filter((card ) => {
       return card.deckId === deck.id

    })
    deck.cards = deckCards

    return deck
})


        res.json({newDeck})
    } else {
        res.json({ decks})
    }

}

module.exports = {
    list,
}