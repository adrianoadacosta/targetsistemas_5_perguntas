/** @format */

// Função para contar a ocorrência da letra 'a' em uma string
function countLetterA(str) {
	// Usando uma expressão regular para encontrar 'a' ou 'A'
	const regex = /a/gi; // 'g' para global e 'i' para ignorar case
	const matches = str.match(regex); // Encontra todas as ocorrências

	// Retorna a quantidade de ocorrências ou 0 se não houver
	return matches ? matches.length : 0;
}

// Entrada do usuário (pode ser alterada para uma string fixa)
const userInput = prompt("Informe uma string para verificar a letra 'a':");

// Verificando a quantidade de letras 'a'
const count = countLetterA(userInput);

// Exibindo o resultado
if (count > 0) {
	console.log(`A letra 'a' aparece ${count} vez(es) na string.`);
} else {
	console.log("A letra 'a' não aparece na string.");
}
