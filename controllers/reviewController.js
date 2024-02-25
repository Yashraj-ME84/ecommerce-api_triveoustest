const db = require('../models')

const Review = db.reviews

//1. Add Review

exports.addReview = async (req, res) => {

    const id = req.params.id

    let data = {
        product_id: id,
        rating: req.body.rating,
        description: req.body.description
    }

    const review = await Review.create(data)
    res.status(200).send(review)

}

// 2. Get All Reviews

exports.getAllReviews = async (req, res) => {

    const reviews = await Review.findAll({})
    res.status(200).send(reviews)

}