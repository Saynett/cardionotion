function calcularAVA() {
    // Obtener los valores de los inputs
    var tsvi = parseFloat(document.getElementById('tsvi').value);
    var ivt_tsv = parseFloat(document.getElementById('ivt_tsv').value);
    var ivt_ao = parseFloat(document.getElementById('ivt_ao').value);

    // Verificar si los valores son válidos
    if (isNaN(tsvi) || isNaN(ivt_tsv) || isNaN(ivt_ao)) {
        document.getElementById('resultadoAVA').innerText = "Por favor, introduce todos los valores.";
        return;
    }

    // Realizar el cálculo AVA = ((B1 / 10) * B2) / B3
    var ava = ((tsvi / 10) * ivt_tsv) / ivt_ao;

    // Mostrar el resultado con 2 decimales
    document.getElementById('resultadoAVA').innerText = ava.toFixed(2);
}
