const express = require('express');
const logic = require('../logic/curso_logic');
const ruta = express.Router();

// Endpoint de tipo GET para el recurso Cursos
ruta.get('/',(req, res) => {
    let resultado = logic.listarCursosActivos();
    resultado.then(cursos => {
        res.json(cursos);
    }).catch(err => {
        res.status(400).json(err);
    })
});

// Endpoint de tipo POST para el recurso CURSOS
ruta.post('/', (req, res) => {
    let resultado = logic.crearCurso(req.body);

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

// Endpoint de tipo PUT para el recurso CURSOS
ruta.put('/:id', (req, res) => {
    let resultado = logic.actualizarCurso(req.params.id, req.body);
    resultado.then(curso => {
        res.json(curso)
    }).catch(err => {
        res.status(400).json(err)
    })
})

// Endpoint de tipo DELETE para el recurso CURSOS
ruta.delete('/:id', (req, res) => {
    let resultado = logic.desactivarCurso(req.params.id);
    resultado.then(curso => {
        res.json(curso);
    }).catch(err => {
        res.status(400).json(err);
    })
})

module.exports = ruta;