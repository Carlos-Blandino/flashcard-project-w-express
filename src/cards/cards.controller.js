const path = require("path");
//use existing decks data
const cards = require(path.resolve("src/data/cards-data"));

//use this function to assign ID's
const nextId = require("../utils/nextId");

function list(req, res,next){
    res.json({data: cards})
}

module.exports = {
    list,
}