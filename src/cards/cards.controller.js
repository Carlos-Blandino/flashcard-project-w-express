const path = require("path");
//use existing decks data
const cards = require(path.resolve("src/data/cards-data"));


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
function create(req,res,next){
    const
        { front, back, deckId }
            = req.body;
    const newCard = {
        id: cards.length + 1,
        front,
        back,
        deckId
    };

    cards.push(newCard);
    res.status(201).json({ data: newCard });
}

function destroy(req, res, next) {

    const { cardId } = req.params;
    const index = cards.findIndex((card) => card.id === cardId);
    cards.splice(index, 1);
    res.status(204);
}

function update(req,res,next){
    const {cardId }= req.params;
    const {front, back} = req.body;
    const i = cards.findIndex((card)=> {
        return Number(cardId) === card.id;
    });

    cards[i] = req.body;
    res.status(201).json( {data: cards[i]});
}

module.exports = {
    list,
    read,
    create,
    destroy,
    update
}