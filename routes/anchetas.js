const { Router } = require('express')
const router = Router()
const { check } = require('express-validator')
const { validacion } = require('../validators/validacion')

const {getAncheta, postAncheta, deleteAncheta, putAncheta} = require('../controllers/anchetas')

router.get('/', getAncheta)
router.post('/', [
    check("nombreAncheta", "El nombre de la ancheta es obligatorio.").not().isEmpty(),
    check("insumos", "Los insumos son obligatorios.").not().isEmpty(),
    validacion
],
    postAncheta)

router.delete('/', deleteAncheta)

router.put('/', [
    check("nombreAncheta", "El nombre de la ancheta es obligatorio.").not().isEmpty(),
    check("insumos", "Los insumos son obligatorios.").not().isEmpty(),
    validacion
],
    putAncheta)
//router.patch('/', patchAncheta)

module.exports = router