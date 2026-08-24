function enviarFormulario() {

    // Capturar os valores dos inputs e criar o objeto JSON

    let cadastro = new Object()

    cadastro.nome = document.getElementById('nomeDigitado').value
    cadastro.sobrenome = document.getElementById('sobrenomeDigitado').value
    cadastro.dataNascimento = document.getElementById('dataNascimentoDigitada').value
    cadastro.rg = document.getElementById('rgDigitado').value
    cadastro.cpf = document.getElementById('cpfDigitado').value
    cadastro.nacionalidade = document.getElementById('nacionalidadeDigitada').value
    cadastro.naturalidade = document.getElementById('naturalidadeDigitada').value
    cadastro.altura = document.getElementById('alturaDigitada').value
    cadastro.peso = document.getElementById('pesoDigitado').value

    // Transformar o objeto em JSON

    let meuJSON = JSON.stringify(cadastro)

    // Mostrar o JSON no console

    console.log(meuJSON)

    console.log(cadastro.valueOf())
}