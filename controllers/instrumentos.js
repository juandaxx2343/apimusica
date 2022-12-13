
const { response } = require('express')
const Instrumentos = require('../models/instrumentos')

const getInstrumentos = async (req, res = response) => {
    const instrumentos = await Instrumentos.find()    
    res.json({
        msg: "Aqui estan todos los instrumentos ingresados.",
        instrumentos
    })
}

const postInstrumentos = async (req, res ) => {
    const { nombre, nombreInstrumen, fecha, marca , estado } = req.body

    const instrumentos = new Instrumentos ({ nombre, nombreInstrumen, fecha, marca , estado })
    
    await instrumentos.save()

    res.json({
        msg: "Estos son los datos del instrumento.",
        instrumentos
    })
}

const deleteInstrumentos = async (req, res) => {
    const { nombre } = req.body
    await Instrumentos.findOneAndDelete({nombre:nombre})

    res.json({
        msg: "Se ha eliminado Correctamente los datos",
    })
}

const putInstrumentos = async (req, res) => {

    const { nombreAnterior, nombre, nombreInstrumen, fecha, marca , estado } = req.body
    await  Instrumentos.findOneAndUpdate({nombre: nombreAnterior}, {nombre: nombre, nombreInstrumen: nombreInstrumen, fecha: fecha, marca: marca , estado: estado}) 

    res.json({  
        msg: "Editado Correctamente los datos",
        
    })

}

module.exports = {
    getInstrumentos,
    postInstrumentos,
    putInstrumentos,
    deleteInstrumentos
}
