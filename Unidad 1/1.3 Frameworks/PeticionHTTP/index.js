import express from "express";

const app = express();
const port = 3000;

app.get('/', (req, res)=>{
    res.send("<h1> Hola Mundo </h1>");
});

app.post('/registro', (req,res)=>{
    res.sendStatus(201);
});

app.put('/usuario/actualizar', (req,res)=>{
    res.sendStatus(200);
    res.send('USUARIO ACTUALIZADO');
});

app.patch('/usuario/modificar', (req, res)=>{
    res.sendStatus(200);
    res.send('USUARIO MODIFICADO');
});

app.delete('/usuario/eliminar', (req, res)=>{
    res.sendStatus(200);
    res.send('USUARIO ELIMINADO');
});

app.listen(port, () => {
    console.log("Servidor corriendo en http://localhost:3000");
});