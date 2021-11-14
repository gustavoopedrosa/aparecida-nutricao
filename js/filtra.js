var campoFiltra = document.querySelector("#filtrar-tabela")

campoFiltra.addEventListener("input",function(){
    console.log(this.value)

    var pacientes = document.querySelectorAll(".paciente")

    if(this.value.length > 0) {
        var conteudoCampoFiltra = this.value

        pacientes.forEach(function(paciente){
            var tdNome = paciente.querySelector(".info-nome")
            var nome = tdNome.textContent
            var expressao = new RegExp(conteudoCampoFiltra, "i")
            if(!expressao.test(nome)){
                paciente.classList.add("invisivel")
            }else{
                paciente.classList.remove("invisivel")
            }
        })
    }else{
        pacientes.forEach(function(paciente){
            paciente.classList.remove("invisivel")
        })
    }
});