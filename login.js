function enviar() {
    // Obtém os valores dos campos de entrada
    const nome = document.getElementById('inome').value;
    const senha = document.getElementById('isenha').value;

    localStorage.setItem('nome', nome);
    localStorage.setItem('senha', senha);

    // Cria um objeto com os valores dos campos
    const dados = {
        nome: nome,
        senha: senha
    };

    // Exibe o objeto no console
    console.log(dados);
    
}


function enviar2() {
    // Redirecionar para a pagina que eu escolher
    window.location.href = 'http://127.0.0.1:5500/pages/login_pagina2.html'; // Substitua pelo URL da sua página de destino
   
}



// Adiciona um ouvinte de evento para o botão
document.getElementById('ibotao').addEventListener('click', enviar);
document.getElementById('ibotao').addEventListener('click', enviar2);
