/** @format */

// Função para calcular o próximo elemento de cada sequência
function calcularProximosElementos() {
	// a) 1, 3, 5, 7, ___
	let a = [1, 3, 5, 7];
	a.push(a[a.length - 1] + 2); // Adiciona 2 ao último elemento
	console.log(`Próximo elemento da sequência a: ${a[a.length - 1]}`); // 9

	// b) 2, 4, 8, 16, 32, 64, ____
	let b = [2, 4, 8, 16, 32, 64];
	b.push(b[b.length - 1] * 2); // Multiplica o último elemento por 2
	console.log(`Próximo elemento da sequência b: ${b[b.length - 1]}`); // 128

	// c) 0, 1, 4, 9, 16, 25, 36, ____
	// numero atual é o quadrado do indice
	let c = [];
	for (let i = 0; i <= 6; i++) {
		c.push(i * i); // Adiciona o quadrado do índice
	}
	c.push(7 * 7); // Próximo quadrado
	console.log(`Próximo elemento da sequência c: ${c[c.length - 1]}`); // 49

	// d) 4, 16, 36, 64, ____
	// adiciona 12 ao numero anterior
	let d = [4, 16, 36, 64];
	d.push(d[d.length - 1] + 28); // Adiciona 28 ao último elemento
	console.log(`Próximo elemento da sequência d: ${d[d.length - 1]}`); // 92

	// e) 1, 1, 2, 3, 5, 8, ____
	let e = [1, 1, 2, 3, 5, 8];
	e.push(e[e.length - 1] + e[e.length - 2]); // Soma os dois últimos elementos
	console.log(`Próximo elemento da sequência e: ${e[e.length - 1]}`); // 13

	// f) 2, 10, 12, 16, 17, 18, 19, ____
	let f = [2, 10, 12, 16, 17, 18, 19];
	f.push(f[f.length - 1] + 1); // Adiciona 1 ao último elemento
	console.log(`Próximo elemento da sequência f: ${f[f.length - 1]}`); // 20
}

// Chama a função para calcular e exibir os próximos elementos
calcularProximosElementos();
