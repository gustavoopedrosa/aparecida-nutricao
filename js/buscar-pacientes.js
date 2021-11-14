var botaoBuscar = document.querySelector("#buscar-pacientes")

botaoBuscar.addEventListener("click", function(){
    var xhr = new XMLHttpRequest()
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes")
    xhr.addEventListener("load", function(){
        
        var erroRequisicao = document.querySelector("#erro-requisicao")

        if(xhr.status == 200){
            erroRequisicao.classList.add("invisivel")
            var pacientes = JSON.parse(xhr.responseText)

            pacientes.forEach(function(paciente) {
                adicionaPacienteNaTabela(paciente)
            });
            
        }else{
            erroRequisicao.classList.remove("invisivel")
        }
    })
    xhr.send()
})