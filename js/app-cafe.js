function recogeDatos(evento) {
    evento.preventDefault();


    let cafe = document.querySelector("#cafe").value;
    let agua = 16 * cafe;
    let bienvenida1 = document.querySelector("#bienvenida");
    let cantidad = document.querySelector("#resultado-cafe");
    let resultado;
    if (cafe > 0) {
        resultado = '☕Ponle  ' + agua + 'gr. ' + ' de agua🤩  <br> <img src="/img/cafe/agua.jpg " alt="">';
        cantidad.innerHTML = resultado;

    } else {
        resultado = "😭 Numero no valido  ";
        bienvenida1.innerHTML = resultado;
    }
}

let miForm = document.querySelector("#formulario");
miForm.addEventListener("submit", recogeDatos);