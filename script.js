function somaMaior() {
    let A = Number(prompt("Digite um numero:"));
    let B = Number(prompt("Digite um numero:"));
    let C = Number(prompt("Digite um numero:"));
    let soma = A + B;

    if (soma < C) {
        alert("A soma de A+B é: " + soma)

    } else {
        console.log("Fim!")
    }

}

function tempoCasamento() {
    let nome = String(prompt("Qual é o seu nome?")).toUpperCase();
    let genero = String(prompt("Qual o seu genero? 'M' ou 'F'")).toUpperCase();
    let estadoCivil = String(prompt("Qual o seu estado civil? Solteiro(a) ou Casado(a)?")).toUpperCase();

    /*console.log(`
        ========
        Nome: ${nome},
        Genero:${genero},
        Estado civil: ${estadoCivil}
        `);
    console.log(genero);
    console.log(estadoCivil);*/

    if (genero === 'F' && estadoCivil === 'CASADA') {
        let tempoCasada = Number(prompt("Quantos anos de casada?"));
        alert(`
            ========
            Nome: ${nome},
            Genero: ${genero},
            Tempo de casada: ${tempoCasada}
            `);
    }
}

function imparPar() {
    let numero = Number(prompt("Digite um numero:"));

    if (numero % 2 === 0) {
        alert("O número é par");
    } else if (numero % 2 === 1) {
        alert("O número é ímpar.")
    } else {
        alert("O caractere é válido.")
        imparPar();
    }
}

function valoresIguais() {
    let A = parseInt(prompt("Digite um numero:"));
    let B = parseInt(prompt("Digite um numero:"));

    if ( A === B) {
        let C = parseInt(prompt("Digite um numero:"));
        alert ( "A soma de A + B é: " + C);

    } else {
        let C = A * B;
        alert("O produto de A * B é: " + C);
    }
}

function valorPositivoNegativo() {
    let num = Number(prompt("Digite um numero, positivo ou negativo :"));
    if (num < 0) {
        let resultado = num * 3;
        alert ("O triplo de " + num + " é: " + resultado);
    } else { 
        let resultado = num * 2;
        alert ("O dobro de " + num + " é: " + resultado);
    }

}

function valorBooleano() {
    let valor1 = Boolean(prompt("Digite um valor 1 para true ou 0 para false :"));
    let valor2 = Boolean(prompt("Digite um valor 1 para true ou 0 para false :"));

    if (valor1 === true && valor2 === true) {
    alert("Ambos são VERDADEIROS.");
} else if (valor1 === false && valor2 === false) {
    alert("Ambos são FALSOS.");
} else {
    alert("Os valores são diferentes (um é verdadeiro e o outro é falso).");
}
}



