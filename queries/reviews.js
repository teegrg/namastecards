const db = require("../db/dbConfig");

const getAllReviews = async () => {
    try {
        const allReviews = await db.any(
            "SELECT * FROM reviews"
        )
        return allReviews;
    }catch (err) {
        return err;
    }
}

const getReview = async (id) => {
    try {
        const oneReview = await db.one("SELECT * FROM reviews WHERE id=$1", id);
        return oneReview;
    }catch(err) {
        return err;
    }
};

const newReview = async (review) => {
    try {
        const newReview = db.one(
            "INSERT INTO reviews (reviewer, content, rating) VALUES ($1, $2, $3) RETURNING *",
            [
                review.reviewer,
                review.content,
                review.rating,
            ]
        );
        return newReview;
    }catch(error){
        return error;
    }
};

const deleteReview = async (id) => {
    try {
        const deletedReview = await db.one(
            "DELETE FROM reviews WHERE id = $1 RETURNING *",
            id
        );
        return deletedReview;
    }catch(error){
        return error;
    }
};

const updateReview = async (id, review) => {
    try {
        const updatedReview = await db.one(
            "UPDATE reviews SET reviewer=$1, content=$2, rating=$3 WHERE id = $4 RETURNING *",
            [
                review.reviewer,
                review.content,
                review.rating,
                id,
            ]
        );
        return updatedReview;
    }catch(error){
        return error;
    }
};

module.exports = {
    getAllReviews,
    getReview,
    newReview,
    deleteReview,
    updateReview,
};