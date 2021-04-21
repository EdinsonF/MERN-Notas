
import express from 'express';
import mongoose from 'mongoose'
import routes from './routes/routes.js';
import cors from 'cors';



const app = express();

app.use(cors());

//BD
const BD = 'mongodb://localhost/nota';
    mongoose.connect(BD)
    .then( bd => console.log('BD Conect'))
    .catch(error => console.log(error))


//MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//RUTAS
app.use('/', routes());


//SERVER
app.listen(4000, () =>{
    console.log("Server Run");
});