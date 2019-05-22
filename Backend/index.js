const mongoose =  require("mongoose")

// const {Opinion} = require("./Opiniones")
const {Finca} = require("./Fincas")

const DB_URL = "mongodb+srv://santiagocespedes:Geniusnet.1@cluster0-e1t0z.mongodb.net/Fincaspf?retryWrites=true"
mongoose.connect(DB_URL, {useNewUrlParser:true}, (err)=>{
    !err
    ? console.log("DB conexion exitosa")
        : console.log(err);
})

module.exports = {
    Finca/*,
    Opinion*/
}