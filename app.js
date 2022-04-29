/**
 * @author Daniel Arteaga
 * @version 1.0.0
 * 
 * Aplicativo central del esqueleto de express para la implementacion de microservicios
 */

/**
 * Importando dotenv
 */
require('dotenv').config();

/**
 * @param Server
 * variable de instancia del servidor de express
 */
const Server = require('./models/server');
const server = new Server();



server.listen();