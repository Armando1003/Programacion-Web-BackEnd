const fs = require("fs");

//usar metodo writeFile para escribir un archivo

// fs.writeFile("archivo.txt", "TEXTO MODIFICADO", (err) =>{
//    if(err)throw err;
//    console.log("El archivo se ha creado");
// });

fs.readFile('./archivo.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
  }); 