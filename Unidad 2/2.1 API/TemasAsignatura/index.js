import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

const temasJSON = `[
    {
        "id": "0001",
        "nombre": "Programación",
        "descripcion": "Fundamentos y técnicas de desarrollo de software.",
        "palabrasClaves": ["algoritmos", "estructuras de datos", "paradigmas", "sintaxis"],
        "practicas": [
            {
                "titulo": "Resolución de problemas",
                "descripcion": "Implementar soluciones algorítmicas a problemas comunes.",
                "objetivo": "Desarrollar pensamiento lógico y habilidades de codificación."
            },
            {
                "titulo": "Proyecto integrador",
                "descripcion": "Desarrollar una aplicación completa usando buenas prácticas.",
                "objetivo": "Aplicar conocimientos en un contexto real."
            }
        ]
    },
    {
        "id": "0002",
        "nombre": "Bases de Datos",
        "descripcion": "Diseño, implementación y gestión de sistemas de almacenamiento de datos.",
        "palabrasClaves": ["SQL", "NoSQL", "normalización", "índices"],
        "practicas": [
            {
                "titulo": "Diseño de esquemas",
                "descripcion": "Crear modelos entidad-relación y convertirlos a esquemas físicos.",
                "objetivo": "Aprender a modelar datos eficientemente."
            },
            {
                "titulo": "Optimización de consultas",
                "descripcion": "Analizar y mejorar el rendimiento de consultas SQL.",
                "objetivo": "Entender el funcionamiento interno de los motores de BD."
            }
        ]
    },
    {
        "id": "0003",
        "nombre": "Redes",
        "descripcion": "Principios de comunicación entre sistemas y protocolos de red.",
        "palabrasClaves": ["TCP/IP", "OSI", "ruteo", "seguridad"],
        "practicas": [
            {
                "titulo": "Configuración de redes",
                "descripcion": "Montar una red local con diferentes dispositivos.",
                "objetivo": "Entender los componentes físicos y lógicos de las redes."
            },
            {
                "titulo": "Análisis de tráfico",
                "descripcion": "Usar herramientas como Wireshark para inspeccionar paquetes.",
                "objetivo": "Comprender cómo viaja la información en una red."
            }
        ]
    },
    {
        "id": "0004",
        "nombre": "Inteligencia Artificial",
        "descripcion": "Técnicas para crear sistemas que muestran comportamiento inteligente.",
        "palabrasClaves": ["machine learning", "redes neuronales", "procesamiento de lenguaje", "visión computacional"],
        "practicas": [
            {
                "titulo": "Modelo predictivo",
                "descripcion": "Implementar un algoritmo de clasificación con scikit-learn.",
                "objetivo": "Aprender los fundamentos del aprendizaje supervisado."
            },
            {
                "titulo": "Chatbot básico",
                "descripcion": "Crear un asistente conversacional usando NLP.",
                "objetivo": "Entender el procesamiento del lenguaje natural."
            }
        ]
    }
]`;

const temas = JSON.parse(temasJSON);

app.use(express.static("public"));
app.use(bodyParser.json());

app.get('/tema/:type', (req, res) => {
    const tipoBuscado = req.params.type.toLowerCase();
    const tema = temas.find(t => 
        t.nombre.toLowerCase().includes(tipoBuscado) ||
        t.palabrasClaves.some(p => p.toLowerCase().includes(tipoBuscado))
    );
    
    res.json(tema || { error: "Tema no encontrado" });
});

app.listen(port, () => {
    console.log("Servidor corriendo en http://localhost:3000");
});