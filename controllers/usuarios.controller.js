/**
 * @author Daniel Arteaga
 * @version 1.0.0
 * 
 * Usuarios controller
 * Controlador de metodos de ejemplo de como se utilizan las funciones
 */

/**
 * @var response Variable para manejar el response de express
 * @var request Variable para manejar el request de epress
 * Estas dos variables se utilizan para utilizar el autocompletado de express
 */
const { response, request } = require('express');

/**
 * @method usuariosGet
 * Metodo de ejemplo para usuarios de tipo get
 * @param {*} req datos de request es decir metodos enviados hacia el app
 * @param {*} res datos de response es decir datos de respuesta hacia el front
 */
const usuariosGet = (req = request, res = response) => {

    //Ejemplo de desestructuración de variables por parte del query
    const { q, nombre = 'No name', apikey, page = 1, limit } = req.query;

    //ejemplo de respuesta tipo json
    res.json({
        msg: 'get API - controlador',
        q,
        nombre,
        apikey,
        page, 
        limit
    });
}

/**
 * @method usuariosPost
 * metodo de ejemplo de tipo post
 * @param {*} req datos de request es decir metodos enviados hacia el app
 * @param {*} res datos de response es decir datos de respuesta hacia el front
 */
const usuariosPost = (req, res = response) => {

    //ejemplo de desestructuración de datos del body
    const { nombre, edad } = req.body;

    //ejemplo de respuesta del body
    res.json({
        msg: 'post API - usuariosPost',
        nombre, 
        edad
    });
}

/**
 * @usuariosPut
 * metodo de ejemplo de tipo put
 * @param {*} req datos de request es decir metodos enviados hacia el app
 * @param {*} res datos de response es decir datos de respuesta hacia el front
 */
const usuariosPut = (req, res = response) => {

    //ejemplo de desestructuracion de datos que viajan por los params
    const { id } = req.params;

    //ejemplo de respuesta del body
    res.json({
        msg: 'put API - usuariosPut',
        id
    });
}

const usuariosPatch = (req, res = response) => {
    res.json({
        msg: 'patch API - usuariosPatch'
    });
}

const usuariosDelete = (req, res = response) => {
    res.json({
        msg: 'delete API - usuariosDelete'
    });
}



/**
 * @var module.exports 
 * exportamos todos los metodos para ser utilizados en otras clases
 */
module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete,
}