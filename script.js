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
