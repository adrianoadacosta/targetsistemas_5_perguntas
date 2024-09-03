/** @format */

// Função para simular o controle das lâmpadas
function identificarLamps() {
	// Simulando as lâmpadas e seus estados
	const lamps = {
		1: { estado: 'desligada', temperatura: 'fria' },
		2: { estado: 'desligada', temperatura: 'fria' },
		3: { estado: 'desligada', temperatura: 'fria' },
	};

	// Ligando o primeiro interruptor
	console.log('Ligando o primeiro interruptor...');
	lamps[1].estado = 'ligada';
	lamps[1].temperatura = 'quente'; // A lâmpada 1 ficará quente

	// Espera de 10 minutos (simulado)
	console.log('Esperando 10 minutos...');
	// Desligando o primeiro interruptor
	console.log('Desligando o primeiro interruptor...');
	lamps[1].estado = 'desligada';
	lamps[1].temperatura = 'quente'; // Mantém a temperatura quente

	// Ligando o segundo interruptor
	console.log('Ligando o segundo interruptor...');
	lamps[2].estado = 'ligada';
	lamps[2].temperatura = 'quente'; // A lâmpada 2 ficará quente

	// Simulando a ida até as lâmpadas
	console.log('Indo até as lâmpadas...');

	// Identificando as lâmpadas
	for (let i = 1; i <= 3; i++) {
		console.log(
			`Lâmpada ${i}: Estado - ${lamps[i].estado}, Temperatura - ${lamps[i].temperatura}`
		);
	}

	// Determinando qual lâmpada é qual
	let resultado = {};
	for (let i = 1; i <= 3; i++) {
		if (lamps[i].estado === 'ligada') {
			resultado[`Lâmpada ${i}`] = 'controlada pelo segundo interruptor';
		} else if (lamps[i].temperatura === 'quente') {
			resultado[`Lâmpada ${i}`] = 'controlada pelo primeiro interruptor';
		} else {
			resultado[`Lâmpada ${i}`] = 'controlada pelo terceiro interruptor';
		}
	}

	return resultado;
}

// Executando a função e exibindo o resultado
const resultado = identificarLamps();
console.log('Resultado da identificação das lâmpadas:');
console.log(resultado);
