const { Schema, model } = require('mongoose')

const AnchetaSchema = Schema({
    nombreAncheta: {
        type: String,
        required: [true, "El nombre de la ancheta es obligatorio."]
    },
    insumos: {
        type: String,
        required: [true, "Los insumos de la ancheta son obligatorios."],
        unique: true
    },
    estado: {
        type: Boolean,
        default: true
    },
    
})

module.exports = model('Ancheta', AnchetaSchema)