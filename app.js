const express = require("express");
const app = express();
const path = require("path");
const session = require('express-session');

//Rutas
const mainRoutes = require('./routes/mainRoutes');
const userRoutes = require('./routes/userRoutes');//errror

const publicPath = path.resolve(__dirname, "./public");

//Template Engine
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: false }));//permite procesar formularios
app.use(express.static(publicPath));
app.use(mainRoutes);
app.use('/user', userRoutes);
app.use(session({secret: 'secreto!!'}));


 app.listen(4000, () => console.log("Servidor corriendo en el puerto: 4000"));

