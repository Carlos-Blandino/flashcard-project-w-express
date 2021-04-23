const path = require("path");
//use existing decks data
const decks = require(path.resolve("src/data/decks-data"));

//use this function to assign ID's
const nextId = require("../utils/nextId");

function list(req, res,next){
    res.json({data: decks})
}

module.exports = {
    list,
}