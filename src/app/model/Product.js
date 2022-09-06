const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Product = new Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    sold: { type: Number, require: true },
    image: { type: String, require: true },
},{
    timestamps: true,
});

module.exports = mongoose.model('Product', Product);