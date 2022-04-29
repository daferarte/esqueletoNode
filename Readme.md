# @author Daniel Arteaga
# @version 1.0.0
 
## Aplicativo central del esqueleto de express para la implementacion de microservicios
## Recuerde que este esqueleto aun no cuenta con un esquema de seguridad

# Instalación
Para poder utilizar el aplicativo se debe correr el comando 

``` NodeJs ```
- npm install

Esto ejecutara el package.json que tiene las aplicaciones para iniciar el app

# Directorios

EsqueletoNode
    -controllers
        --usuarios.controller.js
    -models
        --server.js
    -public
        --index.html
    -routes
        --usuarios.routes.js
    .env
    .gitignore
    app.js
    package.json

## Acontinuación se explica la utilizacion de los directorios y archivos

```app.js```
Archivo central del API donde se instancia el servidor.

```package.json```
Archivo de configuracion del API en este se especifican las librerias y comandos a utilizar (Recuerde incluir comandos de produccion y desarollo de ser necesario)

```controllers```
Carpeta contenedora de los controlladores del API
```usuarios.controller.js```
Archivo de ejemplo de controladores en este solo se debe incluir los metodos que ejecutaran los endpoint

```models```
Carpeta contenedora de todos los modelos del API
```server.js```
Clase donde se instancia el servidor de express este incluye express, cors.
Dentro de esta clase se mira la implementacion de metodos constructor, middleware, routes y listen.

```public```
Carpeta contenedora de todos los archivos publicos del API
```index.html```
Archivo de ejemplo de html en caso de requerirlo de lo contrario se recomienda eliminarlo

```Routes```
Carpeta contenedora de todas las rutas del API
```usuarios.routes.js```
Archivo de rutas de ejemplo en este se realiza con el animo de filtrar las diferentes rutas segun su restriccion o implementación.
En este archivo se llama al controller


