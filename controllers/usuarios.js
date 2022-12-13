//const { query } = require('express')
const { response } = require('express')
const Usuario = require('../models/usuarios')

const getUsuario = async (req, res = response) => {
    const usuario = await Usuario.find() // Buscar usuarios a través de todos los registros    
    res.json({
        msg: "estos son todos los Musicos",
        usuario
    })
}

const postUsuario = async (req, res ) => {
    const { nombre, correo, password, rol, estado } = req.body

    const usuario = new Usuario ({ nombre, correo, password, rol, estado })
   
    await usuario.save()

    res.json({
        msg: "Se ha ingresado correctamente al Musico",
        usuario
    })
}

const deleteUsuario = async (req, res) => {
    const { nombre } = req.body
    await Usuario.findOneAndDelete({nombre:nombre})

    res.json({
        msg: "Se ha eliminado Correctamente el Musico",
    })
}

const putUsuario = async (req, res) => {

    const { correoAnterior, correo, password, rol, estado } = req.body
     await  Usuario.findOneAndUpdate({correo: correoAnterior}, {correo: correo, password: password, rol: rol, estado: estado}) 

    res.json({  
        msg: "Se ha modificado Correctamente el Musico",
    })

}

module.exports = {
    getUsuario,
    postUsuario,
    putUsuario,
    deleteUsuario
}
