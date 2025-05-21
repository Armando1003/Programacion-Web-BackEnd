import express from 'express';
import dotenv from 'dotenv';
import { connectDB, getDB } from './db.js';
import { ObjectId } from 'mongodb';

dotenv.config(); 

const app = express();
const port = 3000;

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 
app.use(express.static('public')); 

//Ruta principal 
app.get('/', (req, res) => {
  res.send('Bienvenido a mi API CRUD');
});


//Handler: Obtener todos los usuarios
app.get('/usuarios', async (req, res) => {
  try {
    const db = getDB();
    const usuarios = await db.collection('usuarios').find().toArray();
    res.status(200).json(usuarios);
  } catch (error) {
    console.error('Error al obtener los usuarios:', error);
    res.status(500).json({ error: 'Error al obtener los usuarios' });
  }
});

//Handler: Obtener un usuario por id
app.get('/usuarios/:id', async (req, res) => {
  try {
    const db = getDB();
    const usuario = await db.collection('usuarios').findOne({ _id: new ObjectId(req.params.id) });
    if (!usuario) return res.status(404).json({ error: 'Usuario no encontrado' });
    res.status(200).json(usuario);
  } catch (error) {
    console.error('Error al obtener el ID:', error);
    res.status(500).json({ error: 'Error al obtener el ID' });
  }
});

//Handler: Crear un nuevo usuario
app.post('/usuarios', async (req, res) => {
  try {
    const db = getDB();
    const result = await db.collection('usuarios').insertOne(req.body);
    res.status(201).json(result.ops?.[0] || req.body);
  } catch (error) {
    console.error('Error al crear el usuario:', error);
    res.status(500).json({ error: 'Error al crear usuario' });
  }
});

//Handler: Actualizar un usuario existente
app.put('/usuarios/:id', async (req, res) => {
  try {
    const db = getDB();
    const id = req.params.id;
    const result = await db.collection('usuarios').updateOne(
      { _id: new ObjectId(id) },
      { $set: req.body }
    );
    if (result.matchedCount === 0) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }
    const actualizado = await db.collection('usuarios').findOne({ _id: new ObjectId(id) });
    res.status(200).json(actualizado);
  } catch (error) {
    console.error('Error al actualizar el usuario:', error);
    res.status(500).json({ error: 'Error al actualizar el usuario' });
  }
});

//Handler: Eliminar un usuario
app.delete('/usuarios/:id', async (req, res) => {
  try {
    const db = getDB();
    const id = req.params.id;
    const result = await db.collection('usuarios').deleteOne({ _id: new ObjectId(id) });
    if (result.deletedCount === 0) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }
    res.status(200).json({ message: 'Usuario eliminado' });
  } catch (error) {
    console.error('Error al eliminar el usuario:', error);
    res.status(500).json({ error: 'Error al eliminar el usuario' });
  }
});

//Conexión a MongoDB y arranque del servidor
connectDB().then(() => {
  app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
  });
});