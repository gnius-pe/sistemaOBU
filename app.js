

const XLSX = require('xlsx'); 
//const tablaPersona = document.getElementById('tabla-personas');

class Persona {
    constructor(idAlumno, codigo,nombreCompleto, sexo,escuelaProfesional, pps, comedor, estado) {
      this.idAlumno = idAlumno || '';
      this.codigo = codigo || '';
      this.nombreCompleto = nombreCompleto || '';
      this.sexo = sexo || '';
      this.escuelaProfesional = escuelaProfesional || '';
      this.pps = pps || '';
      this.comedor = comedor || '';   
      this.estado = estado || '';
    }
}


function readExel(direccionArchivo){
    const libroTrabajo = XLSX.readFile(direccionArchivo);
    const hojasLibro = libroTrabajo.SheetNames;
    const hoja = hojasLibro[0];
    const dataHoja = XLSX.utils.sheet_to_json(libroTrabajo.Sheets[hoja]);
    let datosPersonas = [];

    dataHoja.forEach(persona=>{
        datosPersonas.push(new Persona(persona['N°'],
                                        persona.CODIGO,
                                        persona['APELLIDOS Y NOMBRES'],
                                        persona.SEXO,
                                        persona['ESCUELA PROFESIONAL'],
                                        persona.PPS,
                                        persona.COMEDOR,
                                        persona.ESTADO))
    })
    return datosPersonas;
}


let datosComedor = readExel('./data/RELACION-COMEDOR.xlsx')
console.log("datosComedor")

