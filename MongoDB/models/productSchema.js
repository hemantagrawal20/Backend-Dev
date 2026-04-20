import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxLength: [20, "Product name cannot exceed 20 characters"]
    },
    price: {
        type: Number,
        min: [1, "Price must be at least 1"],
        required: true
    },
    stock: {
        type: Number,
        default: 0
    },
    specs: {
        type:Object
    },
    tags: [{
        type: String
    }]
});

const product = mongoose.model("Product", productSchema);

export default product;