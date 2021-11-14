var tituloH1 = document.querySelector(".titulo");
tituloH1.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++){

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso")
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura")
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc")

    var pesoEhValido = pesoValido(peso);
    var alturaEhValida = alturaValida(altura);

    if (!pesoEhValido){
        var pesoEhValido = false;
        tdImc.textContent = "Peso Inválido!";
        paciente.classList.add("paciente-invalido");
    }

    if (!alturaEhValida){
        var alturaEhValida = false;
        tdImc.textContent = "Altura Inválida!";
        paciente.classList.add("paciente-invalido");
    }

    if (pesoEhValido && alturaEhValida){
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
}
}

function calculaImc (peso, altura){
    var imc = 0;

    imc = peso / (altura * altura);
    return imc.toFixed(2);
}

function pesoValido(peso){
    if(peso > 0 && peso < 500){
        return true;
    }else{
        return false;
    }
}

function alturaValida(altura){
    if(altura > 0 && altura < 3.00){
        return true;
    }else{
        return false;
    }
}