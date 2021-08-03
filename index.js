// IMPORTACION
const mongoose = require("mongoose")
const app = require("./app")
var usuarioControlador = require("./src/controlador/usuario.controlador")
var CovidControlador = require("./src/controlador/covid.controlador")

mongoose.Promise = global.Promise
mongoose.connect('mongodb+srv://admin:admin@cluster0.j4rss.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log('Se encuentra conectado a la base de datos');

    app.listen(process.env.PORT || 3000, function() {
        console.log("Servidor corriendo en el puerto 3000");
        usuarioControlador.adminApp();
        CovidControlador.agregarCovid();
    })
}).catch(err => console.log(err))