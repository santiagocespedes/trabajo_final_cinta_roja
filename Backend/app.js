const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")

const PORT = process.env.PORT || 4000

//llamar los schemes o modelos
const {/*Opinion, */Finca } = require("./index")

//llamar los schemes o modelos

const app = express()

app.use(bodyParser({ extended: true }))
app.use(bodyParser.json())

app.use(cors())

app.get("/", (req, res) => {
    res.send(`Server ON using port ${PORT}`)
})

/////////////////////////////////////////////////////////////////////////////

// app.post("/api/v1/create/opinion", (req,res)=>{
//     const {nombre, estrellas, opinion} = req.body
//     const newOpinion = Opinion({
//         nombre,
//         estrellas,
//         opinion
//     })

//     newOpinion.save((err, opinion)=>{
//         !err ?res.status(201).send(opinion) : res.status(409).send(err);
//     })
// })

app.post("/api/v1/create/finca", (req, res) => {
    const { nombre, municipio, departamento, telefono, Num_opiniones_estrellas, opiniones } = req.body
    const newFinca = Finca({
        nombre,
        municipio,
        departamento,
        telefono,
        Num_opiniones_estrellas,
        opiniones
    })

    newFinca.save((err, finca) => {
        !err ? res.status(201).send(finca) : res.status(409).send(err);
    })
})

// app.get("/api/v1/get/opinion/:opinionid", (req,res)=>{
//     const {opinionid} = req.params
//     Opinion.findById(opinionid)
//     .exec()
//     .then((opinion) => {
//         res.status(200).send(opinion);
//     }).catch((err) => {
//         res.status(404).send(err);
//     });
// })

app.get("/api/v1/get/finca/:fincaid", (req, res) => {
    const { fincaid } = req.params
    Finca.findById(fincaid)
        .exec()
        .then((finca) => {
            res.status(200).send(finca);
        }).catch((err) => {
            res.status(404).send(err);
        });
})

///put1
// app.put("/api/v1/update/opinion/:opinionid", (req, res)=>{
//     const {opinionid} = req.params
//     Opinion.findByIdAndUpdate(opinionid, {$set: req.body}, {new:true})
//     .exec()
//     .then((opinion) => {
//         res.status(200).send(opinion);
//     }).catch((err) => {
//         res.status(404).send(err);
//     });
// })

app.put("/api/v1/update/finca/:fincaid", (req, res) => {
    const { fincaid } = req.params
    Finca.findByIdAndUpdate(fincaid, { $set: req.body }, { new: true })
        .exec()
        .then((finca) => {
            res.status(200).send(finca);
        }).catch((err) => {
            res.status(404).send(err);
        });
})

app.delete("/api/v1/delete/finca/:fincaid", (req, res) => {
    const { fincaid } = req.params
    Finca.findByIdAndDelete(fincaid)
        .exec()
        .then((finca) => {
            res.status(200).send({ message: `La finca ${fincaid} ha sido eliminada` });
        }).catch((err) => {
            res.status(409).send(err);
        });
})
///put2

app.post("/api/v1/add/opiniones/:fincaid", (req, res) => {
    const { fincaid } = req.params
    const { nombre, estrellas, opinion } = req.body
    console.log(nombre, estrellas, opinion);
    if (nombre === undefined || estrellas === undefined || opinion === undefined) {
        console.log("false");
        res.status(409).send("No se llenaron todas las casillas")
    }
    else {
        console.log("true");
        const body = {
            nombre,
            estrellas,
            opinion
        }
        Finca.findByIdAndUpdate(fincaid, { $push: { opiniones: body } }, { new: true })
            .exec()
            .then((finca) => {
                res.send(finca)
            }).catch((err) => {
                res.send(err)
            });
    }
})




///////////////////////////////////////////////////////////////////////////7
app.listen(PORT, () => {
    console.log(`Server ON using port ${PORT}`)
})


