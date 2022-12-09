const jwt = require('jsonwebtoken')

const generarJWT = (uid = '') => {
    return new Promise((resolve, reject) => {
        const payload = { uid }

        jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: '1h'}, (err, token) => {
            if (err) {
                reject("Hubo un error al generar el token." +err)
            }
            else {
                resolve(token)
            }
        })
    })
}

module.exports = {
    generarJWT
}