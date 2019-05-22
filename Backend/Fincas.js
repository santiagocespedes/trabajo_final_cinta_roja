const mongoose = require("mongoose")

const Schema = mongoose.Schema

const fincaSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    municipio:{
        type: String,
        required: true
    },
    departamento:{
        type: String,
        required: true
    },
    telefono:{
        type: Number,
        required: true
    },
    Num_opiniones_estrellas:{
        type: Number,
        required: true
    },
    opiniones:{
        type: [
            {
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
            }
        ]
    },
})
 const Finca = mongoose.model("Finca",fincaSchema)

 module.exports = {
    Finca
 }