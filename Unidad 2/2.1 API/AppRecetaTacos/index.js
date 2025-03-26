import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

const recetaJSON = `[
    {
        "id": "0001",  
        "tipo": "taco",  
        "nombre": "Taco lechon",  
        "precio": 20.00,  
        "ingredientes": {  
            "proteina": {  
                "nombre": "Puerco",  
                "preparación": "Horneado" 
            },  
            "salsa": {  
                "nombre": "Tomate verde",  
                "pico": "Medio" 
            },  
            "acompañamientos": [  
                {  
                    "nombre": "Cebolla",  
                    "cantidad": "1 cucharada",  
                    "ingredientes": ["Cebolla blanca", "Cilantro", "Naranja", "Sal"] 
                },  
                {  
                    "nombre": "Guacamole",  
                    "cantidad": "2 cucharadas",  
                    "ingredientes": ["Aguacate", "Jugo de limón", "Sal", "Cebolla", "Cilantro"] 
                } 
            ] 
        } 
    },
    {
        "id": "0002",  
        "tipo": "taco",  
        "nombre": "Taco de carne asada",  
        "precio": 25.00,  
        "ingredientes": {  
            "proteina": {  
                "nombre": "Res",  
                "preparación": "Asada a la parrilla" 
            },  
            "salsa": {  
                "nombre": "Salsa roja",  
                "pico": "Picante" 
            },  
            "acompañamientos": [  
                {  
                    "nombre": "Pico de gallo",  
                    "cantidad": "1 cucharada",  
                    "ingredientes": ["Jitomate", "Cebolla", "Cilantro", "Limón", "Sal"] 
                },  
                {  
                    "nombre": "Frijoles refritos",  
                    "cantidad": "2 cucharadas",  
                    "ingredientes": ["Frijol bayo", "Aceite", "Cebolla", "Ajo", "Sal"] 
                } 
            ] 
        } 
    },
    {
        "id": "0003",
        "tipo": "taco",
        "nombre": "Taco de barbacoa",
        "precio": 25.00,
        "ingredientes":{
            "proteina": {
                "nombre": "Carne de Borrego",
                "preparación": "Cocido en un hoyo"
            },
            "salsa": {
                "nombre": "Salsa borracha",
                "pico": "Picante"
            },
            "acompañamientos": [
                {
                    "nombre": "Consomé",
                    "cantidad": "1/2 taza",
                    "ingredientes": ["Caldo de barbacoa", "Cebolla", "Cilantro"]
                },
                {
                    "nombre": "Limón y cebolla",
                    "cantidad": "1 cucharada",
                    "ingredientes": ["Limón", "Cebolla blanca"]
                }
            ]
        }
    },
    {
        "id": "0004",
        "tipo": "taco",
        "nombre": "Taco de pescado",
        "precio": 30.00,
        "ingredientes": {
            "proteina": {
                "nombre": "Filete de pescado",
                "preparación": "Empanizado y frito"
            },
            "salsa": {
                "nombre": "Salsa de chipotle",
                "pico": "Suave"
            },
            "acompañamientos": [
                {
                    "nombre": "Repollo morado",
                    "cantidad": "1/2 taza",
                    "ingredientes": ["Repollo", "Mayonesa", "Vinagre"]
                },
                {
                    "nombre": "Crema",
                    "cantidad": "1 cucharada",
                    "ingredientes": ["Crema ácida", "Limón", "Sal"]
                }
            ]
        }
    }
]
`;

const recetasTacos = JSON.parse(recetaJSON);
//console.log(recetasTacos);

app.use(express.static("public"));
app.use(bodyParser.json());

app.get('/receta/:type', (req, res) => {
    const elegirTaco = recetasTacos.find(r => r.ingredientes.proteina.nombre.toLowerCase() === req.params.type.toLowerCase());
    res.json(elegirTaco || { error: "Receta no encontrada" });
});

app.listen(port, () => {
    console.log("Servidor corriendo en http://localhost:3000");
});
