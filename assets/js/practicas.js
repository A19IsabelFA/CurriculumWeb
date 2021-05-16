window.onload = function () {
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      mostrar(this);
    }
  };
  xhttp.open("GET", "../json/practicas.json", true);
  xhttp.send();
}
function mostrar(json) {
  let tabla = "";
  let datos = json.responseText;
  var lista = JSON.parse(datos);
  lista.forEach(item => tabla += `<tr><td>${item.year}</td><td>${item.empresa}</td></tr>`);
  document.getElementById('cuerpo').innerHTML = tabla;
}