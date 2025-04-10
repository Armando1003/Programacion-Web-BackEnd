import express from 'express';
import axios from 'axios';

const app = express();
const port = 3000;

app.use(express.static("public"));

app.get('/', async (req, res) => {
    try {
        const result = await axios.get('https://meowfacts.herokuapp.com/?lang=esp');
        const data = result.data.data; 
        res.render('index.ejs', {
            data: data,
        });
        console.log(result.data);

        
    } catch (error) {
        console.log(error.response.data);
        res.status(500).send('Error al obtener la cita');
    }
})

app.listen(port, () => {
    console.log("Servidor corriendo en http://localhost:3000");
});