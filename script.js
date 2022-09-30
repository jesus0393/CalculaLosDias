function calcularFecha() {

  const diasDeLaSemana = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];

  let dia = document.getElementById("dia").value;
  let mes = document.getElementById("mes").value;
  let anio = document.getElementById("anio").value;

  let fecha = new Date(anio, mes - 1, dia);
  let diaDeLaSemana = fecha.getDay();

  let diaString = diasDeLaSemana[diaDeLaSemana]

  let diaLaboral = "";

  switch (diaDeLaSemana) {
    case 0: case 6:
      diaLaboral = "No es dia laboral";
      break;
    default:
      diaLaboral = "Es dia laboral";
      break;
  }

  document.getElementById("resultado").innerHTML = `<div class="alert alert-primary my-4 text-center" role="alert">
                                                          ${diaString}, ${diaLaboral} 
                                                      </div>`
}