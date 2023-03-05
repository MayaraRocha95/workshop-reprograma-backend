# workshop-reprograma-backend
Projeto feito em Back-end no workshop da Reprograma 


### Descrição
Este código JavaScript é uma implementação da funcionalidade da calculadora freelancer na página HTML. Ele começa obtendo referências aos elementos HTML com os IDs "valor-hora", "horas-projeto" e "resposta" usando o método document.getElementById(). Em seguida, ele adiciona um ouvinte de evento ao botão "Calcular Projeto" usando o método addEventListener(). Quando o botão é clicado, a função de retorno de chamada é executada.

Dentro da função de retorno de chamada, o código obtém os valores dos inputs convertendo-os em números de ponto flutuante usando a função parseFloat(). Em seguida, ele calcula o valor do projeto multiplicando o valor da hora pelo número de horas do projeto. O resultado é exibido na tela definindo o conteúdo da tag "span" com o ID "resposta" usando a propriedade textContent. O método toFixed() é usado para formatar o número com duas casas decimais.

No geral, este código lida com a interação do usuário com a página HTML e executa o cálculo da calculadora freelancer, exibindo o resultado na página em tempo real. Ele é um exemplo de como o JavaScript pode ser usado para adicionar interatividade a uma página web.

### O Desafio 
  Este é o Desafio proposto no Workshop
![Imgame do Desafio](./Workshop%20-%20Desafio.png)



feito por Mayara Rocha