function isPalindrome(input) {
    // Remove espaços e transforma todas as letras em minúsculas
    const cleanedInput = input.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
    // Inicializa duas variáveis para o início e o fim da string
    let left = 0;
    let right = cleanedInput.length - 1;

    // Laço para comparar os caracteres
    while (left < right) {
        // Se os caracteres não são iguais, não é um palíndromo
        if (cleanedInput[left] !== cleanedInput[right]) {
            return false;
        }
        // Move os ponteiros
        left++;
        right--;
    }

    // Se todas as comparações foram verdadeiras, é um palíndromo
    return true;
}

function arrayMaxMin(numbers) {
    // Inicializa as variáveis para armazenar o mínimo e o máximo
    let min = 0; 
    let max = 0;

    // Verifica se o array está vazio
    if (numbers.length === 0) {
        return [null, null]; // Retorna null se o array estiver vazio
    }

    // Inicializa min e max com o primeiro elemento do array
    min = numbers[0];
    max = numbers[0];

    // Percorre o array usando um laço de repetição
    for (let i = 1; i < numbers.length; i++) {
        // Atualiza o mínimo se o elemento atual for menor
        if (numbers[i] < min) {
            min = numbers[i];
        }
        // Atualiza o máximo se o elemento atual for maior
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }

    // Retorna um novo array com o valor mínimo e máximo
    return [min, max];
}
