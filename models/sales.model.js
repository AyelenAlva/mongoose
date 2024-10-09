import mongoose from "mongoose";

const saleSchema = new mongoose.Schema({
        // Campo que referencia al empleador asociado a la venta.
    employer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "employer", 
        required: true 
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Products", 
        required: true 
    },
    date: {
        type: Date,
        required: true, 
        default: Date.now 
    },
    amount: {
        type: Number,
        required: true, 
        min: 0 
    },
    quantity: {
        type: Number,
        required: true, 
        min: 1
    }
});
// Este modelo se utilizará para interactuar con la colección de ventas en la base de datos.

const Sales = mongoose.model("Sales", saleSchema);

export default Sales;