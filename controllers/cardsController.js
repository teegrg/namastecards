const express = require("express");
const cards = express.Router();
const {
    getallCards,
    getCards,
    createCard,
    updateCard,
    deleteCard,
} = require("../queries/namastecards");


//INDEX
cards.get("/", async(req, res) => {
    try {
        const allCards = await getallCards();
        // console.log(allCards);
        if (allCards[0]) {
            res.status(200).json(allCards);
        } else {
            res.status(404).json({error : "no cards found"})
        }
    } catch(error) {
        res.status(500).json({error: "Server error"})
    }
});

// SHOW
cards.get("/:id", async(req, res) => {
    const { id } = req.params;
    const card = await getCards(id);
    if(card.id){
        res.json(card);
    } else {
        res.json({error:"song not found with id"})
    }
});

//CREATE
cards.post("/", async(req, res) => {
   try {
        const cards = await createCard(req.body);
        res.json(cards);
    } catch(error){
        res.status(400).json({error: error})
    }
});

//DELETE
cards.delete("/:id", async(req, res) => {
    const { id } = req.params;
    const deletedCard = await deleteCard(id);
    if(deletedCard){
        res.status(200).json(deletedCard)
    } else {
        res.status(404).json("card not fuond")
    }
});

//UPDATE
cards.put("/:id", async(req, res) => {
    const { id } = req.params;
   try {
        const updatedCard = await updateCard(id, req.body);
    res.status(200).json(updatedCard);
} catch (error) {
    res.status(500).json({error: "failed to update"})
}
})


module.exports = cards;