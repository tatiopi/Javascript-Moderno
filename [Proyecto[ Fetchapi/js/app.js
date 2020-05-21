document.getElementById('txtBtn').addEventListener('click', cargarTXT);
document.getElementById('jsonBtn').addEventListener('click', cargarJSON);
document.getElementById('apiBTN').addEventListener('click', cargarREST);


function cargarTXT() {
    fetch('datos.txt').then(function(res) {
        return res.text()
    }).then(function(empleados) {
        console.log(empleados);
        document.getElementById('resultado').innerHTML = empleados;
    }).catch(function(error) {
        console.log(error);
    });
}

function cargarJSON() {
    fetch('empleados.json').then(function(res) {
        return res.json()
    }).then(function(respuesta) {
        let html = '';
        respuesta.forEach(function(empleado) {
            html += `
                <li>${empleado.nombre} ${empleado.puesto}</li>
            `;
        });
        document.getElementById('resultado').innerHTML = html;
    });
}

function cargarREST() {
    let html = '';
    fetch('https://randomuser.me/api/?results=25&inc=gender,name,nat').then(res => {
        res.json().then(resultados => {
            resultados.results.forEach(res => {
                console.log(res);
                html += `
                    <p><b>Genero:</b> ${res.gender}
                    <b>Nombre:</b> ${res.name.title} ${res.name.first} ${res.name.last}</p> 
                `;
            });
            document.getElementById('resultado').innerHTML = html;
        });
    });
}