const mongoose = require("mongoose")
const perfumechema = mongoose.Schema({
brand: String,
fragrance: String,
cost: Number
})
module.exports = mongoose.model("perfume",
perfumechema)