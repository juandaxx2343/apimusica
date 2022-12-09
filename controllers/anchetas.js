//const { query } = require('express')
const { response } = require('express')
const Ancheta = require('../models/anchetas')

const getAncheta = async (req, res = response) => {
    const ancheta = await Ancheta.find() // Buscar anchetas a través de todos los registros    
    res.json({
        msg: "GET API | Ancheta",
        ancheta
    })
}

const postAncheta = async (req, res ) => {
    const { nombreAncheta, insumos, estado } = req.body

    // Instanciar el objeto con los parámetros recibidos
    const ancheta = new Ancheta ({ nombreAncheta, insumos, estado })
    // Guardar registro en la base de datos
    await ancheta.save()

    res.json({
        msg: "POST API | Ancheta",
        ancheta
    })
}

const deleteAncheta = async (req, res) => {
    const { nombre } = req.query

    const ancheta = await Ancheta.findOneAndDelete({nombre:nombre})

    res.json({
        msg: "DELETE API | Ancheta",
        ancheta
    })
}

const putAncheta = async (req, res) => {

    const { nombreAnterior, nombreAncheta, insumos, estado } = req.body
    const ancheta = await  Ancheta.findOneAndUpdate({nombreAncheta: nombreAnterior}, {nombreAncheta: nombreAncheta, insumos: insumos, estado: estado}) 

    res.json({  
        msg: "PUT API | Ancheta",
        ancheta
    })

}

module.exports = {
    getAncheta,
    postAncheta,
    putAncheta,
    deleteAncheta
}
