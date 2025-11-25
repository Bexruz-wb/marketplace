 import { Schema, model } from "mongoose";

const productSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },

    price: {
        type: Number,
        required: true
    },

    description: {
        type: String,
        trim: true
    },

    categoryId: {
        type: Schema.Types.ObjectId,
        ref: "Category"
    }

}, { timestamps: true });

export default model("Product", productSchema);
