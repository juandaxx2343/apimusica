const { Router } = require('express')
const router = Router()
const { check } = require('express-validator')
const { validacion } = require('../validators/validacion')

const {getInstrumentos, postInstrumentos, putInstrumentos, deleteInstrumentos} = require('../controllers/instrumentos')

router.get('/', getInstrumentos)
router.post('/', [
    check("nombre", "El nombre es obligatorio.").not().isEmpty(),
    check("nombreInstrumen", "el nombre del instrumento es obligatorios.").not().isEmpty(),
    check("marca", "La marca es obligatoria.").not().isEmpty(),
    validacion
],
    postInstrumentos)

router.delete('/', deleteInstrumentos)

router.put('/', [
    check("nombre", "El nombre es obligatorio.").not().isEmpty(),
    check("marca", "La marca es obligatoria.").not().isEmpty(),
    validacion
],
    putInstrumentos)

module.exports = router