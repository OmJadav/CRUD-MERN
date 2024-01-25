const mongoose = require("mongoose")

const empSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: Number, required: true },
    salary: { type: Number, required: true },
    role: { type: String, required: true },
    doj: { type: String, required: true },
    address: { type: String, required: true },

}, { timestamps: true })

const empModel = mongoose.model('emp', empSchema);

module.exports = empModel;