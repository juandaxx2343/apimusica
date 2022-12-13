const { Schema, model } = require('mongoose')

const InstrumentoSchema = Schema({
    nombre: {
        type: String,
        required: [true, "El nombre es obligatorio."]
    },
    nombreInstrumen: {
        type: String,
        required: [true, "el nombre del instrumento debe de ser obligatoria"],
        unique: true

    },
    fecha: {
        type: String,
        required: [true, "La fecha es obligatoria."],
        unique: true
    },
    marca: {
        type: String,
        required: [true, "La marca es obligatoria."],
        unique: true
    },
    estado: {
        type: Boolean,
        default: true
    },
    
})

module.exports = model('Instrumento', InstrumentoSchema)