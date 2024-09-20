// Função para verificar a existência da letra 'a' e contar quantas vezes ela ocorre
function verificarLetraA() {
    const texto = document.getElementById('texto').value;
    const resultado = document.getElementById('resultado');

    if (!texto) {
        resultado.textContent = "Por favor, insira uma string.";
        resultado.classList.add('erro');
        return;
    }

    // Usar expressão regular para contar 'a' e 'A'
    const letrasEncontradas = texto.match(/[aA]/g); 
    const quantidade = letrasEncontradas ? letrasEncontradas.length : 0;

    if (quantidade > 0) {
        resultado.textContent = `A letra 'A' aparece ${quantidade} vez(es).`;
        resultado.classList.remove('erro');
        resultado.classList.add('sucesso');
    } else {
        resultado.textContent = "A letra 'A' não foi encontrada.";
        resultado.classList.remove('sucesso');
        resultado.classList.add('erro');
    }
}
