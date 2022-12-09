const { Router } = require('express')
const router = Router()
const { check } = require('express-validator')
const { validacion } = require('../validators/validacion')

const {getVenta, postVenta, deleteVenta, putVenta} = require('../controllers/ventas')

router.get('/', getVenta)
router.post('/', [
    check("id", "El id de la es obligatorio.").not().isEmpty(),
    check("fecha", "La fecha es obligatoria.").not().isEmpty(),
    check("ancheta", "La ancheta es obligatoria.").not().isEmpty(),
    validacion
],
    postVenta)

router.delete('/', deleteVenta)

router.put('/', [
    check("id", "El id de la es obligatorio.").not().isEmpty(),
    check("fecha", "La fecha es obligatoria.").not().isEmpty(),
    check("ancheta", "La ancheta es obligatoria.").not().isEmpty(),
    validacion
],
    putVenta)
//router.patch('/', patchVenta)

module.exports = router