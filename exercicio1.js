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

	function calculoDoJiraya(entrada1, entrada2) {
		let saida = entrada1 + entrada2; 
		saida = saida * 5;
		saida = saida / 200;
		return saida;
	}
	
	let resultados = [];
	resultados[0] = calculoDoJiraya(5, 6);
	resultados[1] = calculoDoJiraya(7, 11);
	resultados[2] = calculoDoJiraya(14, 22);	
})()