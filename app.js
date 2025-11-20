function agregar() {

    let canton = document.getElementById("canton").value;
    let provincia = document.getElementById("provincia").value;

    let datos = {
        canton: canton,
        provincia: provincia
    }

    tabla(datos);
    limpiar();
}

function tabla(objeto) {
    let tabla = document.getElementById("body");

    let datos = `<tr>
        <th>${objeto.canton}</th>
        <th>${objeto.provincia}</th>
    </tr>`;

    tabla.innerHTML += datos;

}

function limpiar() {
    let canton = document.getElementById("canton").value = "";
    let provincia = document.getElementById("provincia").value = "";
}
