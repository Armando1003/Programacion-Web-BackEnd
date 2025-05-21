//Importación del cliente oficial de MongoDB
import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

//Inicializar el cliente de MongoDB
const client = new MongoClient(process.env.uri);

//Variable para almacenar la instancia de la base de datos
let db;

//Función para conectar a la base de datos MongoDB
export async function connectDB() {
  try {
    await client.connect();

    db = client.db('test');

    console.log('✅ Conectado a MongoDB');
  } catch (err) {
    console.error('❌ Error al conectar a MongoDB:', err);
  }
}

// Función para obtener la instancia de la base de datos conectada
export function getDB() {
  if (!db) {
    throw new Error('❌ Base de datos no conectada');
  }
  return db;
}