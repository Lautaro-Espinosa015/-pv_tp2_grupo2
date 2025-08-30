document.getElementById("calcular").addEventListener("click", function() {
    let numero1 = Number(document.getElementById("primerNumero").value);
    let numero2 = Number(document.getElementById("segundoNumero").value);
    let suma = numero1 * numero2;
    let nombre = document.getElementById("nombre").value;

    if(numero1>=160){
        let extra = suma*0.20;
        suma = suma+extra;
    }


    document.getElementById("resultado").innerHTML = nombre + " Te corresponden: " + suma;
});

