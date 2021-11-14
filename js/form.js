var botaoPaciente = document.querySelector("#adicionar-pacientes");

botaoPaciente.addEventListener("click", function(event){
    event.preventDefault();
  
    var form = document.querySelector("#form-adiciona");
    
    var paciente = extraiPacienteDoFormulario(form);

    var erros = validaPaciente(paciente);

    if (erros.length > 0){
        exibeMensagensErro(erros);
        return;
    }

    adicionaPacienteNaTabela(paciente)

    form.reset();

    var mensagensErro = document.querySelector("#mensagens-erro")
    mensagensErro.innerHTML="";
});

function adicionaPacienteNaTabela(paciente){
    var pacienteTr = montaTr(paciente)
    var tabelaPacientes = document.querySelector("#tabela-pacientes");
    tabelaPacientes.appendChild(pacienteTr)
}

function exibeMensagensErro(erros){
    var ul = document.querySelector("#mensagens-erro");

    ul.innerHTML="";

    erros.forEach(function(erro){
        
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    })
}

function extraiPacienteDoFormulario(form){

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente;
}

function montaTr(paciente){
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function montaTd(dado, classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
    return td;
}

function validaPaciente(paciente){

    var erros = [];

    if(!pesoValido(paciente.peso)) erros.push("O peso é inválido");

    if(!alturaValida(paciente.altura)) erros.push("A altura é inválida");
    
    if(!paciente.nome.length > 0) erros.push("O campo NOME não pode estar em branco");
    
    if(!paciente.peso.length > 0) erros.push("O campo PESO não pode estar em branco");

    if(!paciente.altura.length > 0) erros.push("O campo ALTURA não pode estar em branco");

    if(!paciente.gordura.length > 0) erros.push("O campo GORDURA não pode estar em branco");

    return erros;
}