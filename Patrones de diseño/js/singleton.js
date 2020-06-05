class Office {
    constructor(name, employees) {
        this.name = name;
        this.employees = employees

        if (typeof Office.instance === 'Object') {
            return Office.instance;
        }

        Office.instance = this;
        return this;
    }
}

/* Este es el ejemplo del curso el cual no me gusta */

const alumnos = {
    // todos los alumnos
    listaAlumnos: [],
    // Obtener un alumno
    get: function(id) {
        console.log(id);
    },
    // crear alumno
    crear: function(datos) {
        this.listaAlumnos.push(datos);

    },
    // listar todos los alumnos
    listado: function() {
        return this.listaAlumnos;
    }
}

const infoAlumno = {
    nombre: 'Juan',
    edad: 20
}

const infoAlumno2 = {
    nombre: 'Pedro',
    edad: 21
}

alumnos.crear(infoAlumno);
alumnos.crear(infoAlumno2);

const listado = alumnos.listado();


console.log(listado);

const alumno = alumnos.get(0);
console.log(alumno);