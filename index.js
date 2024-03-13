const usuarios = require('./controllers/usuarios');
const cursos = require('./controllers/cursos');

const express = require('express');
const mongoose = require('mongoose');

// Conexion a la base de datos MongoDB
mongoose.connect('mongodb://localhost:27017/userscoursesdb')
    .then(() => console.log('Conectado a MongoDB...'))
    .catch(err => console.error('No se pudo conectar con MongoDB:', err));

// Middleware 
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//end points (recursos)
app.use('/api/usuarios', usuarios);
app.use('/api/cursos', cursos);

const port = process.env.PORT || 3004;
app.listen(port, () => {
    console.log('API REST Ok, y ejecutándose...');
});