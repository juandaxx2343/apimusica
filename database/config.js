const mongoose = require('mongoose')

const dbConnection = async => {
    try {
        mongoose.connect(process.env.MONGODB_CNN)
        console.log("Conectado a la base de datos correctamente...")
    } catch (error) {
        console.log("Error al conectar a la base de datos...", error)
    }
}

module.exports = dbConnection