
import Notas from '../Models/Index.js';


export const notaNueva = async (req, res, next) =>{
    try {
        const nota = new Notas(req.body);
        const result = await nota.save();
        res.json({
            mensaje: "Registro Exitoso"
        });
    } catch (error) {
        console.log(error);
        next();
    }
}

export const verNotas = async (req, res, next) => {
    try {
        const nota = await Notas.find();
        
        res.json(nota);
    } catch (error) {
        console.log(error);
        next();
    }
}

export const eliminarNota = async (req, res, next) => {
    try {
        const nota = await Notas.findOneAndDelete({_id : req.params.id});
        res.json({
            mensaje: "Registro Eliminado"
        });
    } catch (error) {
        console.log(error);
        next();
    }
}

export const actualizarNota = async (req, res, next) => {
    try {
        const nota = await Notas.findOneAndUpdate({_id : req.params.id}, req.body, {new : true});
        res.json({
            mensaje: "Actualizado Correctamente"
        });
    } catch (error) {
        console.log(error);
        next();
    }
}

export const consultarNota = async (req, res, next) => {
    try {
        const nota = await Notas.find({_id: req.params.id});
        res.json(nota)
    } catch (error) {
        console.log(error);
        next();
    }
}