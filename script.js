
function calcularDoppler() {

    // Recebendo os valores informados pelo usuário
    const observador = Number(
        document.getElementById("velObservador").value
    );

    const fonte = Number(
        document.getElementById("velFonte").value
    );

    const som = Number(
        document.getElementById("velSom").value
    );

    const frequencia = Number(
        document.getElementById("frequencia").value
    );

    const mensagem = document.getElementById("mensagem");

    // Validando os valores
    if (
        !Number.isFinite(observador) ||
        !Number.isFinite(fonte) ||
        !Number.isFinite(som) ||
        !Number.isFinite(frequencia) ||
        som <= 0 ||
        frequencia <= 0
    ) {
        mensagem.innerHTML =
            "Erro: informe valores válidos. " +
            "A velocidade do som e a frequência devem ser positivas.";
        return;
    }

    // Verificando se o denominador é válido
    if (som - fonte <= 0) {
        mensagem.innerHTML =
            "Erro: a velocidade da fonte deve ser menor " +
            "que a velocidade do som nesta configuração.";
        return;
    }

    // Aplicando a fórmula do Efeito Doppler
    const frequenciaPercebida =
        frequencia * (som + observador) / (som - fonte);

    // Exibindo o resultado
    mensagem.innerHTML =
        "A frequência emitida pela fonte é: " +
        frequencia.toFixed(2) + " Hz<br><br>" +

        "<strong>Frequência percebida pelo observador:</strong><br>" +

        "<span style='font-size: 26px; color: #243b55; font-weight: bold;'>" +
        frequenciaPercebida.toFixed(2) +
        " Hz</span>";
}
