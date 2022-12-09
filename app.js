const Server = require('./models/server') // Importamos el modelo server

require('dotenv').config()
const server = new Server()

server.listen()