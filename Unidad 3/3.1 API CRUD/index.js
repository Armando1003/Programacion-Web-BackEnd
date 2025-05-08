import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Usuario from './models/usuario.model.js';

dotenv.config();

const app = express();
const port = 3000;

//midleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

//handlers
app.get('/', (req, res) => {    
    res.send('Bienvenido a mi API CRUD');
});

app.post('/Usuarios', async (req,res) => { 
    try{
        const usuario = await Usuario.create(req.body);
        res.status(201).json(usuario);
    } catch (error) {
        console.error("Error al crear el usuario:", error);
        res.status(500).json({error: 'Error al crear usuario' });
    }    
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});


//definimos la URI
const uri = process.env.uri;

//conexion a la base de datos
mongoose.connect(uri)
.then(() => {
    console.log("Conexión exitosa a la base de datos");
})
.catch((error) => {
    console.error("error al conectar a la base de datos", error);
});