// THIS FILE HOLDS RESPONSE FROM ALL REQUESTS MADE TO DATABASE
const db = require("../db/dbConfig");

//ALL NAMASTECARDS
const getallCards = async () => {
    try {
        const allCards = await db.any("SELECT * FROM namastecards")
        return allCards;
    } catch(error){
        console.error("Error executing the querry:", error)
    }
}

//SHOW: ONE 
const getCards = async (id) => {
    try {
        const oneCard = await db.one("SELECT * FROM namastecards WHERE id=$1", id);
        return oneCard;
    } catch (error) {
        return error;
    }
}

//CREATE 
const createCard = async (card) => {
    try {
        const newCard = await db.one(
            "INSERT INTO namastecards (company, tag, name, email, phone, cell, address, linkedin, image) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *",
            [
                card.company,
                card.tag,
                card.name,
                card.email,
                card.phone,
                card.cell,  
                card.address,  
                card.linkedin,  
                card.image,  
            ]
        );
        return newCard;
    } catch (error) {
        return error;
    }
};

//DELETE
const deleteCard = async (id) => {
    try {
        const deletedCard = await db.one(
            "DELETE FROM namastecards WHERE id=$1 RETURNING *", id
        )
        return deletedCard;
    } catch (error) {
        return error;
    }
};

//UPDATE
const updateCard = async (id, card) => {
    try {
      const updatedCard = await db.one(
        "UPDATE namastecards SET company=$1, tag=$2, name=$3, email=$4, phone=$5, cell=$6, address=$7, linkedin=$8, image=$9 where id=$10 RETURNING *",
        [
            card.company,
            card.name,
            card.email,
            card.phone,
            card.cell,
            card.address,
            card.linkedin,
            card.image,
            id
        ]
      );
      return updatedCard;
    }catch(error) {
      return error;
    }
  };


module.exports = {
    getallCards,
    getCards,
    createCard,
    updateCard,
    deleteCard,
};