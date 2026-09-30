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

    if (A === B) {
        let C = parseInt(prompt("Digite um numero:"));
        alert("A soma de A + B é: " + C);

    } else {
        let C = A * B;
        alert("O produto de A * B é: " + C);
    }
}

function valorPositivoNegativo() {
    let num = Number(prompt("Digite um numero, positivo ou negativo :"));
    if (num < 0) {
        let resultado = num * 3;
        alert("O triplo de " + num + " é: " + resultado);
    } else {
        let resultado = num * 2;
        alert("O dobro de " + num + " é: " + resultado);
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

function lerVariaveis() {
    let variavel = Number(prompt("Digite um numero:"));

    if (variavel % 2 === 0) {
        let soma = variavel + 5;
        alert("A resposta é: " + soma);
    } else {
        let soma = variavel + 8;
        alert("a resposta é: " + soma);
    }

}

function ordenarDecrescente() {
    let A = parseInt(prompt("Digite um numero:"));
    let B = parseInt(prompt("Digite um numero:"));
    let C = parseInt(prompt("Digite um numero:"));

    if (A > B && A > C) {
        if (B > C) {
            alert(`${A}, ${B}, ${C} `);
        }
        else {
            alert(`${A}, ${C},${B}`);
        }
    } else if (B > A && B > C) {
        if (C > A) {
            alert(`${B}, ${C}, ${A}`);
        }
        else {
            alert(`${B}, ${A}, ${C}`);
        }

    } else {
        if (A > B) {
            alert(`${C}, ${A}, ${B}`);
        }
        else {
            alert(`${C}, ${B}, ${A}`);
        }
    }
}

function pesoIdeal() {
    let altura = parseFloat(prompt("Digite sua altura: "));
    let genero = String(prompt("Informe qual o seu genero? 'M' ou 'F'? ").toUpperCase());
    let pesoIdeal;

    switch (genero) {
        case "M":
            pesoIdeal = (72.7 * altura) - 58;
            break;
        case "F":
            pesoIdeal = (62.1 * altura) - 44.7;
            break;
        default:
            alert(" Gênero informado é invalido!");
            return;

    }
    alert(`O peso ideal é ${pesoIdeal.toFixed(2)}`);

}


function descobrirImc() {
    let peso = parseFloat(prompt("Digite seu peso:"));
    let altura = parseFloat(prompt("Digite sua altura:"));
    const imc = peso / (altura ** 2);
    let condicao;

    switch (true) {
        case imc < 18.5:
            condicao = "Abaixo do peso";
            break;
        case imc >= 18.5 && imc < 25:
            condicao = "Peso normal";
            break;
        case imc >= 25 && imc < 30:
            condicao = " Acima do peso";
            break;
        case imc >= 30:
            condicao = "Obeso";
            break;
        default:
            alert("Impossivel de calcular o IMC! Dados invalido!")

    }
    alert(`
        imc: ${imc.toFixed(2)}
        condição: ${condicao}
    `)
}

function verDesconto() {
    let preco = parseFloat(prompt("Digite o preço do produto: "));
    let codigo = parseInt(prompt(`Digite o código da condição de pagamento:
1 - À vista em dinheiro ou cheque (10% de desconto)
2 - À vista no cartão de crédito (15% de desconto)
3 - Em duas vezes, sem juros
4 - Em duas vezes, com juros de 10%`));
    let valorFinal;

    switch (codigo) {
        case 1:
            valorFinal = preco * 0.9;
            break;

        case 2:
            valorFinal = preco * 0.85;
            break;

        case 3:
            valorFinal = preco;
            break;

        case 4:
            valorFinal = preco * 1.1;
            break;
        default:
            alert("Código informado é invalido");
            return;

    }
    let parcelas = codigo >= 3
    ? alert(`
        Duas parcelas de R$ ${(valorFinal / 2).toFixed(2)}`)
    : alert("Total a ser pago: R$ " + valorFinal.toFixed(2));

}


function verificarMedia() { }