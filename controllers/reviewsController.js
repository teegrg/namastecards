const express = require("express");

const reviews = express.Router();
const {
    getAllReviews,
    getReview,
    newReview,
    deleteReview,
    updateReview,
} = require("../queries/reviews");

//INDEX
reviews.get("/", async (req, res) => {
    try {
        const allReviews = await getAllReviews();
        res.json(allReviews)
    } catch (error) {
        res.json(error)
    }
});

//SHOW
reviews.get("/:id", async(req, res) => {
    const { id } = req.params;
    const review = await getReview(id);
    if (review) {
        res.json(review)
    }else {
        res.status(404).json({ error: "id not found"})
    }
});

//NEW
reviews.post("/", async (req, res) => {
    const review = await newReview(req.body);
    res.status(200).json(review)
});

//UPDATE
reviews.put("/:id", async (req, res) => {
    const { id } = req.params;
    const updatedReview = await updateReview(id, req.body);
    if (updatedReview.id){
        res.status(200).json(updatedReview)
    } else {
        res.status(404).json("Review not found");
    }
});

//DELETE
reviews.delete("/:id", async (req, res) => {
    const { id } = req.params;

    const deletedReview = await deleteReview(id);
    if (deletedReview.id){
        res.status(200).json(deleteReview)
    }else {
        res.status(404).json( {error: "review not found" })
    }
});

module.exports = reviews;