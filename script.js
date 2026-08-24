function enviarFormulario() {
    console.log("Apertou")

    //Capturar os valores do input e criar variável para o objeto JSON

    let contaCliente = new Object()

    contaCliente.nome = document.getElementById('nomeDigitado').value
    contaCliente.agencia = document.getElementById('agenciaDigitada').value
    contaCliente.conta = document.getElementById('contaDigitada').value

    let meuJSON = JSON.stringify(contaCliente)

    console.log(meuJSON)

    console.log(contaCliente.valueOf())
}