function calcular() {
    let altura = parseFloat(document.getElementById("altura").value);
    let peso = parseFloat(document.getElementById("peso").value);
    let imc = document.getElementById("imc");
    let def = document.getElementById("definicao");

    if (isNaN(altura) || isNaN(peso) || altura <= 0 || peso <= 0) {
        def.innerHTML = "Insira valores válidos para altura e peso.";
        imc.innerHTML = ""; 
        return;
    }

    if (altura > 10) {
        altura = altura / 100;
    }

    let result2 = peso / (altura * altura);
    let result = result2.toFixed(1);

    imc.innerHTML = result;

    if (result < 16) {
        def.innerHTML = "Magreza grave";
    } else if (result < 16.9) {
        def.innerHTML = "Magreza moderada";
    } else if (result < 18.5) {
        def.innerHTML = "Magreza leve";
    } else if (result < 24.9) {
        def.innerHTML = "Peso ideal!";
    } else if (result < 29.9) {
        def.innerHTML = "Sobrepeso";
    } else if (result < 34.9) {
        def.innerHTML = "Obesidade grau 1";
    } else if (result < 39.9) {
        def.innerHTML = "Obesidade grau 2";
    } else {
        def.innerHTML = "Obesidade mórbida";
    }
}