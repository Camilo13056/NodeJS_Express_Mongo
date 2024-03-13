const express = require('express');
const Curso = require('../models/curso_model');
const ruta = express.Router();

//ruta.get('/', (req,res)=>{
//    res.json('Respuesta a peticion GET de CURSOS funcionando correctamente...')
//});

// Función asíncrona para crear Cursos
async function crearCurso(body){
    let curso = new Curso({
        titulo       : body.titulo,
        descripcion  : body.descripcion,
        alumnos  : body.alumnos,
        calificacion : body.calificacion
    });
    return await curso.save();
}

// Endpoint de tipo POST para el recurso CURSOOS
ruta.post('/', (req, res) => {
    let resultado = crearCurso(req.body);

    resultado.then(curso => {
        res.json({
            curso
        })
    }).catch(err => {
        res.status(400).json({
            err
        })
    })
});

// Función asíncrona para actualizar cursos
async function actualizarCurso(id, body){
    let curso = await Curso.findByIdAndUpdate(id, {
        $set: {
            titulo: body.titulo,
            descripcion: body.descripcion,
            alumnos  : body.alumnos,
            calificacion : body.calificacion
        }
    }, {new: true});
    return curso;
}

// Endpoint de tipo PUT para el recurso CURSOS
ruta.put('/:id', (req, res) => {
    let resultado = actualizarCurso(req.params.id, req.body);
    resultado.then(curso => {
        res.json(curso)
    }).catch(err => {
        res.status(400).json(err)
    })
})


module.exports = ruta;