import express from "express";
import path from "path";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

app.use('/Public', express.static(path.join(__dirname, 'Public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'Views', 'home.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'Views', 'about.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'Views', 'contact.html'));
});

app.listen(port, () => {
    console.log("Servidor corriendo en http://localhost:3000");
});