const nome = localStorage.getItem('nome');
const senha = localStorage.getItem('senha');

// Exibe os dados na página
document.getElementById('nome').textContent = 'Nome: ' + nome;
document.getElementById('senha').textContent = 'Senha: ' + senha;
