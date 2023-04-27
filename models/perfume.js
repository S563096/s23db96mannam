const mongoose = require("mongoose")
const perfumechema = mongoose.Schema({
brand: {type:String,minLength:2,maxLength:67},
fragrance: {type:String,minLength:3,maxLength:80},
cost: {type:Number,min:5,maxLength:1200},
})
module.exports = mongoose.model("perfume",
perfumechema)