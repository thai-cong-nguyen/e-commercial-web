const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Course = new Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    sold: { type: Number, require: true },
    image: { type: String, require: true },
    author: { type: String, required: true },
    rating: { type: Number, required: true },
},{
    timestamps: true,
});

module.exports = mongoose.model('Course', Course);