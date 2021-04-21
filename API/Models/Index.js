
import mongoose from 'mongoose';

const Nota = new mongoose.Schema({
    titulo:{
        type: String,
        trim: true
    },

    descripcion:{
        type: String,
        trim: true
    }
});

export default  mongoose.model('Nota', Nota);