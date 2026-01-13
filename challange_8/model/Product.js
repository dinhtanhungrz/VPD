const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    stock: { type: Number, default: 0 },
    status: { type: String, default: "selling" }
}, { timestamps: true });

module.exports = mongoose.model("Product", productSchema);