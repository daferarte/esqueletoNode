/**
 * @author Daniel Arteaga
 * @version 1.0.0
 * 
 * Usuarios router
 * Rutas de metodos de ejemplo
 */

/**
 * @var Router Variable para manejar el response de express
 * Esta variable se crea por que en este archivo no disponemos de la variable this.app de express
 */
const { Router } = require('express');

/**
 * los siguientes metodos son desestructuraciones de los metodos que se utilizan en el controlador 
 */
const { usuariosGet,
        usuariosPut,
        usuariosPost,
        usuariosDelete,
        usuariosPatch } = require('../controllers/usuarios.controller');

/**
 * @var router
 * Instancia de la importación de router
 */
const router = Router();


/**
 * Definición de las rutas que manejara mi app
 */
router.get('/', usuariosGet );

router.put('/:id', usuariosPut );

router.post('/', usuariosPost );

router.delete('/', usuariosDelete );

router.patch('/', usuariosPatch );


/**
 * Exportando las rutas para ser utilizadas.
 */
module.exports = router;