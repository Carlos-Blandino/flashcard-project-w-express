const path = require("path");
//use existing decks data


const decks = require(path.resolve("src/data/decks-data"));
const cards = require(path.resolve("src/data/cards-data"));

//use this function to assign ID's

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

function read(req, res, next) {
    const deckId = req.params.deckId;
    if (deckId) {
        const foundDeck = decks.find((deck) => {
            return Number(deckId) === deck.id;
        });
        const newCards = cards.filter((card) => {
            return card.deckId === Number(deckId)
        })
        foundDeck.cards = newCards
        res.json(foundDeck)
    }
}

function update(req, res, next) {
    const {deckId} = req.params;
    const foundDeck = decks.find((deck) => {
        return Number(deckId) === deck.id;
    });
    foundDeck.name = req.body.name;
    foundDeck.description = req.body.description;
    res.status(201).json({data: foundDeck});

}

function create(req, res, next) {
    const
        {name, description}
            = req.body;
    const newDeck = {
        id: decks.length + 1,
        name,
        description,
    };
    decks.push(newDeck);
    res.status(201).json({data: newDeck});
}

function destroy(req, res, next) {
    const {orderId} = req.params;
    const index = decks.findIndex((order) => order.id === orderId);
    decks.splice(index, 1);
    res.status(204);
}

module.exports = {
    list,
    read,
    update,
    create,
    destroy
}