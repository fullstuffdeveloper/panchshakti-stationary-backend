const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    productName: { type: String, required: true, unique: true },
    productBrand: { type: String, required: true },
    productActualPrice: { type: Number, required: true },
    productQuantity: { type: Number, required: true },
    productSellingPriceMin: { type: Number, required: true },
    productSellingPriceMax: { type: Number, required: true },
    productExpiry: { type: Date, required: true }
});

const userModel = mongoose.model("Product", productSchema);
module.exports = userModel;