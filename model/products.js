const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name: { type : String, require : true },
    price: { type : Number, require : true },
    desc: { type : String, require : true }

}, { timestamps: true });

const products = mongoose.model('products', schema);
module.exports = products;