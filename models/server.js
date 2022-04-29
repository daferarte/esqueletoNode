/**
 * @author Daniel Arteaga
 * @version 1.0.0
 * 
 * Servidor de Express
 * Este servidor es una clase y crea metodos para llamar a los middleware y rutas
 */

/**
 * Importando librerias
 */
const express = require('express');
const cors = require('cors');


/**
 * @class Server
 * Clase Server que instancia el servidor de express
 */
class Server {

    /**
     * @constructor Server
     * Constructor de la clase que inicializa el servidor de Express para el API
     * @var app variable que instancia el servidor de express
     * @var port variable que contiene el puerto por el que se ejecuta la variable
     * @var usuariosPath variable de ejemplo con el endpoint del controlador usuarios
     * 
     * De igual manera se llaman los metodos de de middlewares y routes
     */
    constructor() {
        this.app  = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';

        // Middlewares
        this.middlewares();

        // Rutas de mi aplicación
        this.routes();
    }

    /**
     * @method middlewares
     * Metodo que se encarga de gestionar los middlewares del API de manera global
     * Se recomienda incluir en esta los moddlewares globales
     */
    middlewares() {
        // CORS
        this.app.use( cors() );
        // Lectura y parseo del body
        this.app.use( express.json() );
        // Directorio Público
        this.app.use( express.static('public') );
    }

    /**
     * @method routes
     * Metodo que se encarga de administrar las rutas segun su restricción o implementación
     */
    routes() {
        //Ruta de ejemplo
        this.app.use( this.usuariosPath, require('../routes/usuarios.routes'));
    }

    /**
     * @method listen 
     * Metodo que se encarga de inicializar el servidor de express
     */
    listen() {
        this.app.listen( this.port, () => {
            console.log('Servidor corriendo en puerto', this.port );
        });
    }

}

/**
 * @var Server
 * Exportamos la clase server para ser utilizado
 */
module.exports = Server;
