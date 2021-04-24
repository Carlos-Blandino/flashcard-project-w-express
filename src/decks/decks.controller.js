

const path = require("path");
//use existing decks data


const decks = require(path.resolve("src/data/decks-data"));
const cards = require(path.resolve("src/data/cards-data"));

//use this function to assign ID's
const nextId = require("../utils/nextId");

function list(req, res, next) {

    const newDeck = decks.map((deck) => {
        const deckCards = cards.filter((card) => {
            return card.deckId === deck.id
        })
        deck.cards = deckCards
        return deck
    })
    res.json(newDeck)

}

function read(req,res,next) {
    const deckId = req.params.deckId;

    if(deckId){
       const foundDeck = decks.find((deck)=> {
           return Number(deckId) === deck.id;
       });
        const newCards = cards.filter((card) => {
            return card.deckId === Number(deckId)
        })
        foundDeck.cards = newCards
        res.json(foundDeck)
    }



}

module.exports = {
    list,
    read
}