const mongoose = require("mongoose")

const Schema = mongoose.Schema

const opinionSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    estrellas:{
        type: Number,
        required: true
    },
    opinion:{
        type: String,
        required: true
    }
})
 const Opinion = mongoose.model("Opinion",opinionSchema)

 module.exports = {
    Opinion
 }