function somar(numero1, numero2) {
    if (numero1 == null || numero1 == undefined) {
        console.log(`Parâmetro numero1 não pode ser nulo ou indefinido.`);
        return
    } else if (numero2 == null || numero2 == undefined) {
        console.log(`Parâmetro numero2 não pode ser nulo ou indefinido.`);
        return
    } else if (typeof numero1 != 'number') {
        console.log(`Tipo inválido para o argumento numero1`);
        return
    } else if (typeof numero2 != 'number') {
        console.log(`Tipo inválido para o argumento numero2`);
        return
    }

    let resultadoSoma = numero1 + numero2;
    return resultadoSoma;
}

function calcularDistancia(x1, x2, y1, y2) {
    if (x1 == null || x1 == undefined) {
        console.log(`Parâmetro x1 não pode ser nulo ou indefinido.`);
        return
    } else if (x2 == null || x2 == undefined) {
        console.log(`Parâmetro x2 não pode ser nulo ou indefinido.`);
        return
    } else if (y1 == null || y1 == undefined) {
        console.log(`Parâmetro y1 não pode ser nulo ou indefinido.`);
        return
    } else if (y2 == null || y2 == undefined) {
        console.log(`Parâmetro y2 não pode ser nulo ou indefinido.`);
        return
    } else if (typeof x1 != 'number') {
        console.log(`Tipo inválido para o argumento x1`);
        return
    } else if (typeof x2 != 'number') {
        console.log(`Tipo inválido para o argumento x2`);
        return
    } else if (typeof y1 != 'number') {
        console.log(`Tipo inválido para o argumento y1`);
        return
    } else if (typeof y2 != 'number') {
        console.log(`Tipo inválido para o argumento y2`);
        return
    }

    let resultado_distancia = Math.sqrt(((x2 - x1)**2) + ((y2 - y1)**2));

    return(resultado_distancia);
}

function converterParaHoraMinutoSegundo(qtd_segundos) {
    if (qtd_segundos == null || qtd_segundos == undefined) {
        console.log(`Parâmetro qtd_segundos não pode ser nulo ou indefinido.`);
        return
    } else if (typeof qtd_segundos != 'number') {
        console.log(`Tipo inválido para o argumento qtd_segundos`);
        return
    }

    let hora = 0;
    let minuto = 0;
    let segundo = 0;

    // Convertendo segundos para minutos
    segundo = qtd_segundos;

    // verificando se existe mais que 60 minutos
    if (segundo > 59) {
        minuto = segundo / 60;
        segundo = segundo % 60;

        if (minuto > 59) {
            hora = minuto / 60;
            minuto = minuto % 60;
        }
    }

    tempo_string = `${hora.toFixed(0)}:${minuto.toFixed(0)}:${segundo.toFixed(0)}`;

    return(tempo_string);   
}

function ePrimo(numero) {
    if (numero == null || numero == undefined) {
        console.log(`Parâmetro numero não pode ser nulo ou indefinido.`);
        return
    } else if (typeof numero != 'number') {
        console.log(`Tipo inválido para o argumento numero`);
        return
    }

    let numero_e_primo = false;
    
    // Verifica se o número é ímpar
    if (numero % 2 != 0) {

        // For que roda até que o i seja igual ao número a ser validado
        for (let i = 0; i <= numero + 1; i++) {

            // Verifica se o i é maior que 2
            if (i > 2) {
                // Verifica se o número é divisível pelo i
                if (numero % i != 0) {
                    numero_e_primo = true;
                }
            }
        }

    // Verifica se o número é 2
    } else if (numero == 2) {
        numero_e_primo = true;
    }

    return numero_e_primo;
}

function calcularFatorial(numero) {
    if (numero == null || numero == undefined) {
        console.log(`Parâmetro numero não pode ser nulo ou indefinido.`);
        return
    } else if (typeof numero != 'number') {
        console.log(`Tipo inválido para o argumento numero`);
        return
    }

    let numero_fatoriado = 1;

    //Verifica se o número é diferente de 1
    if (numero != 1) {

        // Executa o for enquanto o i for maior que 1
        for (let i = numero; i > 0; i--) {
            // Múltiplica o numero por i
            numero_fatoriado = numero_fatoriado * i;
        }
    } else {
        // Caso o número for 1 o fatorial é 0
        numero_fatoriado = 0;
    }

    if (numero_fatoriado < 0) {
        alert(`Por favor digite um número natural!`);
    }

    return numero_fatoriado;
}

function calcularMedia(vetor) {

    // Verifica se é o último item do vetor
    for (i = 0; i < vetor.length ; i++) {

        // Validaçoes do item
        if (vetor[i] == null || vetor[i] == undefined) {
            console.log(`Parâmetro vetor[${i}] não pode ser nulo ou indefinido.`);
            return
        } else if (typeof vetor[i] != 'number') {
            console.log(`Tipo inválido para o argumento vetor[${i}]`);
            return
        }
    }

    let resultado_soma = 0;
    
    for (let i = 0; i < vetor.length; i++) {
        resultado_soma += vetor[i];
    }

    resultado_media = resultado_soma / vetor.length;

    return resultado_media;
}

function calcularMediaPonderada(vetor, peso) {

    // Verifica se é o último item do vetor
    for (i = 0; i < vetor.length ; i++) {

        // Validaçoes do item
        if (vetor[i] == null || vetor[i] == undefined) {
            console.log(`Parâmetro vetor[${i}] não pode ser nulo ou indefinido.`);
            return
        } else if (typeof vetor[i] != 'number') {
            console.log(`Tipo inválido para o argumento vetor[${i}]`);
            return
        }
    }

    for (i = 0; i < peso.length ; i++) {

        // Validaçoes do item
        if (peso[i] == null || peso[i] == undefined) {
            console.log(`Parâmetro peso[${i}] não pode ser nulo ou indefinido.`);
            return
        } else if (typeof peso[i] != 'number') {
            console.log(`Tipo inválido para o argumento peso[${i}]`);
            return
        }
    }

    let resultado_soma = 0;
    
    for (let i = 0; i < vetor.length; i++) {
        resultado_soma += (vetor[i] * peso[i]);
    }

    let soma_pesos = 0;

    for (let i = 0; i < peso.length; i++) {
        soma_pesos = soma_pesos + peso[i]
    }

    resultado_media = resultado_soma / soma_pesos;

    return resultado_media;
}