const { response } = require('express')
const Usuario = require('../models/usuarios')

const { generarJWT } = require('../helpers/generar-jwt')

const login = async (req, res) => {
    const { correo, password } = req.body

    try {
        const usuarios = await Usuario.findOne({correo})
        if (!usuarios) {
            return res.status(400).json({
                msg: 'El usuario no se encuentra en la base de datos.'
            })
        }

        if (usuarios.password != password) {
            return res.status(400).json({
                msg: 'La contraseña es incorrecta.'
            })
        }

        if (usuarios.estado == false) {
            return res.status(400).json({
                msg: 'El usuario se encuentra  inactivo, por lo que no puede acceder.'
            })
        }

        // Generar el JWT (JSON Web Token)
        const token = await generarJWT(usuarios.id)
        return res.json({
            usuarios,
            token
        })

    } catch (error) {
        return res.status(400).json({
            msg: 'Apreciado usuario, por favor contacte al administrador.'
        })
    }
}

module.exports = {
    login
}