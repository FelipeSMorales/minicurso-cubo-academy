(function(){
	'use strict'
	debugger;
	
	function mostraMenu() {
		console.log('Escolha uma opção');
		console.log('1 - Vou entender funções');
		console.log('2 - Vou continuar tentando');
		console.log('3 - Ainda tá zuado');
		console.log('4 - FUDEU');
	}

	function somaDoisNumeros(entrada1, entrada2) {
		let saida = entrada1 + entrada2; 
		return saida;
	}
	
	let resultados = [];

	for(let index =1; index < 3; index + 1) {
		let numero1 = 5;
		let numero2 = 6;
		resultados[0] = somaDoisNumeros(numero1, numero2);
	}
	
	let numero1 = 5;
	let numero2 = 6;
	resultados[0] = somaDoisNumeros(numero1, numero2);

	numero1 = 7;
	numero2 = 11;
	resultados[1] = somaDoisNumeros(numero1, numero2);

	numero5 = 14;
	numero6 = 22;
	resultados[2] = somaDoisNumeros(numero5, numero6);

	
})()