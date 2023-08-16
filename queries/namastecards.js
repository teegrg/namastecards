// THIS FILE HOLDS RESPONSE FROM ALL REQUESTS MADE TO DATABASE
const db = require("../db/dbConfig");

//ALL NAMASTECARDS
const getallNamasteCards = async () => {
    try {const allCards = await db.any("SELECT * FROM namastecards")
        return allCards;
    } catch(error){
        console.error("Error executing the querry:", error)
    }
}

//SHOW: ONE 
const getNamasteCards = async (id) => {
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
            "INSERT INTO quotes (category, message, sender, reciver, image, is_favorite) VALUES($1, $2, $3, $4, $5, $6) RETURNING *",
            [
                card.category,
                card.message,
                card.sender,
                card.name,
                card.image,
                card.is_favorite,  
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
        "UPDATE namastecard SET category=$1, message=$2, sender=$3, reciver=$4, image=$5, is_favorite=$6 where id=$7 RETURNING *",
        [card.category, card.message, card.sender,card.reciver,card.image, card.is_favorite, id]
      );
      return updatedCard;
    }catch(error) {
      return error;
    }
  };
