/**
 * Função principal para realizar o cálculo e exibir o resultado.
 * A premissa é: cada cigarro encurta a vida em 10 minutos.
 */
function confirmar() {
  // 1. Captura e validação dos inputs
  const inputCigar = document.querySelector("input#cigar");
  const inputAnos = document.querySelector("input#anos");
  const resDiv = document.querySelector("div#res");

  // Converte para número e verifica se são válidos
  const quantCig = parseInt(inputCigar.value);
  const quantAnos = parseInt(inputAnos.value);

  if (isNaN(quantCig) || isNaN(quantAnos) || quantCig < 0 || quantAnos < 0) {
    resDiv.innerHTML =
      '<span class="error-message">Por favor, insira valores numéricos positivos e válidos em ambos os campos.</span>';
    return; // Interrompe a função se a validação falhar
  }

  // 2. Lógica de Cálculo
  const minutosPerdidosPorDia = quantCig * 10; // 10 minutos por cigarro
  const horasPerdidasPorDia = minutosPerdidosPorDia / 60;
  const diasPerdidosPorDia = horasPerdidasPorDia / 24;

  // Total de dias perdidos ao longo de todos os anos (considerando 365 dias/ano)
  const totalEmDias = quantAnos * 365 * diasPerdidosPorDia;

  // 3. Formatação dos Resultados

  // Dias perdidos (número inteiro)
  const diasPerdidosInteiros = Math.floor(totalEmDias);

  // Anos perdidos (aproximação para 2 casas decimais)
  const anosPerdidos = (totalEmDias / 365.25).toFixed(2); // Usa 365.25 para média de anos bissextos

  // 4. Exibição dos Resultados na tela
  resDiv.innerHTML = `
          <p class="title-estimate">
            Estimativa:
          </p>
          <p class="days-lost">
            ${diasPerdidosInteiros.toLocaleString("pt-BR")} dias perdidos
          </p>
          <p class="years-lost">
            (aproximadamente <span class="font-bold">${anosPerdidos} anos</span> de vida)
          </p>
        `;
}
