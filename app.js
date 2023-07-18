
const XLSX = require('xlsx');


function readExel(direccionArchivo){
    const libroTrabajo = XLSX.readFile(direccionArchivo);
    const hojasLibro = libroTrabajo.SheetNames;

    const hoja = hojasLibro[0];
    const dataHoja = XLSX.utils.sheet_to_json(libroTrabajo.Sheets[hoja])
    //dataHoja.forEach(persona=>{
    //    console.log(persona)
    //})
    for(let i = 0 ; i < 10 ; i ++){
        console.log(dataHoja[i]);
    }
}

readExel('./data/RELACION-COMEDOR.xlsx')
