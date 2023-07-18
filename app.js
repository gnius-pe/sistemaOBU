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


let datosPersonas = [];

function insertarDatosEnTabla(personas){
    const tabla = document.getElementById('tabla-personas');
    const tbody = tabla.getElementsByTagName('tbody')[0];

    personas.forEach(persona => {
        const fila = document.createElement('tr');
    
        const numeroCelda = document.createElement('td');
        numeroCelda.textContent = persona.idAlumno;
        
        const codigoCelda = document.createElement('td');
        codigoCelda.textContent = persona.codigo;
    
        const nombresApellidosCelda = document.createElement('td');
        nombresApellidosCelda.textContent = persona.nombreCompleto;
    
        const sexoCelda = document.createElement('td');
        sexoCelda.textContent = persona.sexo;
    
        const escuelaProfesionalCelda = document.createElement('td');
        escuelaProfesionalCelda.textContent = persona.escuelaProfesional;
    
        const promedioPonderadoCelda = document.createElement('td');
        promedioPonderadoCelda.textContent = persona.pps;
    
        const comedorCelda = document.createElement('td');
        comedorCelda.textContent = persona.comedor;
    
        const estadoCelda = document.createElement('td');
        estadoCelda.textContent = persona.estado;
        
        fila.appendChild(numeroCelda);
        fila.appendChild(codigoCelda);
        fila.appendChild(nombresApellidosCelda);
        fila.appendChild(sexoCelda);
        fila.appendChild(escuelaProfesionalCelda);
        fila.appendChild(promedioPonderadoCelda);
        fila.appendChild(comedorCelda);
        fila.appendChild(estadoCelda);
    
        tbody.appendChild(fila);
      });
  }

  document.getElementById('file-input').addEventListener('change', function(event) {
    var file = event.target.files[0];
    
    var reader = new FileReader();
    
    reader.onload = function(e) {
      let data = new Uint8Array(e.target.result);
      let workbook = XLSX.read(data, {type: 'array'});
      
      let worksheet = workbook.Sheets[workbook.SheetNames[0]];
      let jsonData = XLSX.utils.sheet_to_json(worksheet);
  
      let personas = [];
      jsonData.forEach(persona => {
        personas.push(new Persona(persona['Nº'],
                                    persona.CODIGO,
                                    persona['APELLIDOS Y NOMBRES'],
                                    persona.SEXO,
                                    persona['ESCUELA PROFESIONAL'],
                                    persona.PPS,
                                    persona.COMEDOR,
                                    persona.ESTADO));
      });
      // Llamar a la función para insertar datos en la tabla
      insertarDatosEnTabla(personas);
    };
    reader.readAsArrayBuffer(file);
  });
  

  /* EVENTOS DE ESTILOS */

  window.addEventListener('scroll', function() {
    let footer = document.querySelector('.footer');
    let scrollPosition = window.innerHeight + window.scrollY;
    let pageHeight = document.documentElement.scrollHeight - window.innerHeight;
  
    if (scrollPosition >= pageHeight) {
      footer.classList.add('footer-hidden');
    } else {
      footer.classList.remove('footer-hidden');
    }
  });
  
