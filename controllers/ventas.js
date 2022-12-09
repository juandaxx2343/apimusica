//const { query } = require('express')
const { response } = require('express')
const Venta = require('../models/ventas')

const getVenta = async (req, res = response) => {
    const venta = await Venta.find()   
    res.json({
        msg: "GET API | Venta",
        venta
    })
}

const postVenta = async (req, res ) => {
    const { id, fecha, precio,ancheta, estado } = req.body

    // Instanciar el objeto con los parámetros recibidos
    const venta = new Venta ({ id, fecha, precio,ancheta, estado })
    // Guardar registro en la base de datos
    await venta.save()

    res.json({
        msg: "POST API | Venta",
        venta
    })
}

const deleteVenta = async (req, res) => {
    const { nombre } = req.query

    const venta = await Venta.findOneAndDelete({nombre:nombre})

    res.json({
        msg: "DELETE API | Venta",
        venta
    })
}

const putVenta = async (req, res) => {

    const { id, fecha, precio,ancheta, estado } = req.body
    const venta = await  Venta.findOneAndUpdate({id: id}, {fecha:fecha, precio: precio,ancheta: ancheta, estado: estado}) 

    res.json({  
        msg: "PUT API | Venta",
        venta
    })

}

module.exports = {
    getVenta,
    postVenta,
    putVenta,
    deleteVenta
}
