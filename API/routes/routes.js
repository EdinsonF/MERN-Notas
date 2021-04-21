
import express from 'express';

const Route = express.Router();

import   {notaNueva, verNotas, eliminarNota, actualizarNota, consultarNota} from '../controllers/indexController.js';



export default () => {

    Route.get('/notas', verNotas);
    Route.post('/notas', notaNueva);
    Route.delete('/notas/:id', eliminarNota);
    Route.put('/notas/:id', actualizarNota);
    Route.get('/notas/:id', consultarNota);

    return Route;
}