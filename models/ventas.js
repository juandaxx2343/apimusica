const { Schema, model } = require('mongoose')

const VentaSchema = Schema({
    id: {
        type: Number,
        required: [true, "El id de la venta es obligatorio."]
    },
    fecha: {
        type: String,
        required: [true, "La fecha de la venta es obligatoria."],
        unique: true
    },
    precio: {
        type: Number,
        required: [true, "El precio es obligatorio."]
    },
    ancheta: {
        type: String,
        required: [true, "La ancheta de la venta es obligatoria."],
        unique: true
    },
    estado: {
        type: Boolean,
        default: true
    },
    
})

module.exports = model('Venta', VentaSchema)