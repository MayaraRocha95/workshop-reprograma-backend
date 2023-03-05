// Obtém os elementos HTML
const valorHora = document.getElementById('valor-hora');
const horasProjeto = document.getElementById('horas-projeto');
const resposta = document.getElementById('resposta');

// Adiciona um ouvinte de evento ao botão "Calcular Projeto"
document.querySelector('button').addEventListener('click', () => {
  // Obtém os valores dos inputs
  const valorHoraFloat = parseFloat(valorHora.value);
  const horasProjetoFloat = parseFloat(horasProjeto.value);
  
  // Calcula o valor do projeto
  const valorProjeto = valorHoraFloat * horasProjetoFloat;
  
  // Exibe o valor do projeto na tela
  resposta.textContent = `R$ ${valorProjeto.toFixed(2)}`;
});
