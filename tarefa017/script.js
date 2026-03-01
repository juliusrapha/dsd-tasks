//A constante da velocidade permitida (boa prática usar UPPER_CASE para constantes globais)
const VELOCIDADE_PERMITIDA = 80;
// Custo da multa por km/h acima do limite
const MULTA_POR_KM = 5;

// Obtém referências para os elementos do DOM
const formVelocidade = document.getElementById('form-velocidade');
const inputVelocidade = document.getElementById('txtvel');
const divResultado = document.getElementById('resultado');

/**
 * Função para calcular e exibir o resultado da multa.
 * @param {Event} event - O evento de submissão do formulário.
 */
function submeter(event) {
    // Previne o comportamento padrão de recarregar a página ao submeter o formulário
    event.preventDefault();

    // 1. Coleta e Validação da Entrada
    // O uso de type="number" no HTML já ajuda, mas convertemos para garantir
    const veloAtual = Number(inputVelocidade.value);

    // Validação de preenchimento (embora 'required' no HTML ajude) e valor
    if (inputVelocidade.value.trim() === "") {
        divResultado.innerHTML = '<p style="color: red;">⚠️ **Erro:** Por favor, preencha a velocidade atual do carro.</p>';
        return;
    }

    if (isNaN(veloAtual) || veloAtual < 0) {
        divResultado.innerHTML = '<p style="color: red;">⚠️ **Erro:** Por favor, insira uma velocidade válida (um número positivo).</p>';
        return;
    }

    // 2. Lógica de Cálculo
    let mensagem;

    if (veloAtual <= VELOCIDADE_PERMITIDA) {
        // Sem multa
        mensagem = `<p style="color: green;">✅ **Parabéns!** Você está a **${veloAtual} km/h**. Sem multa. Lembre-se: Põe o cinto de segurança!</p>`;
    } else {
        // Com multa
        const diferenca = veloAtual - VELOCIDADE_PERMITIDA;
        const valorMulta = diferenca * MULTA_POR_KM;

        mensagem = `
            <p style="color: red;">🚨 **ATENÇÃO!**</p>
            <p>Sua velocidade é de **${veloAtual} km/h**, excedendo o limite de ${VELOCIDADE_PERMITIDA} km/h em ${diferenca} km/h.</p>
            <p style="font-weight: bold;">Está Multado. O valor da multa é de R$ ${valorMulta.toFixed(2)}.</p>
        `;
    }

    // 3. Exibição do Resultado
    divResultado.innerHTML = mensagem;
}

// Adiciona um listener para o evento de submissão do formulário
formVelocidade.addEventListener('submit', submeter);