function adicionarNoFinal(vetor, elemento) {
      if (elemento == '') {
            alert(`Insira algo no input para poder adicionar!`);
            return
      }

      vetor[vetor.length] = elemento;
      
      return vetor;
}

function removerNoFinal(vetor) {
      let lista_aux = [];

      for (let i = 0; i < vetor.length - 1; i++) {
            lista_aux[i] = vetor[i]
      }

      vetor = lista_aux;

      return vetor;
}

function adicionarNoInicio(vetor, elemento) {
      if (elemento == '') {
            alert(`Insira algo no input para poder adicionar!`);
            return
      }

      let lista_aux = [];

      lista_aux[0] = elemento;

      for (let i = 1; i <= vetor.length; i++) {

            lista_aux[i] = vetor[i - 1]

      }

      vetor = lista_aux;
      
      return vetor;
}

function removerDoInicio(vetor) {
      let lista_aux = [];

      for (let i = 0; i < vetor.length; i++) {

            if (i != 0) {
                  lista_aux[i - 1] = vetor[i]
            }
      }

      vetor = lista_aux;
      
      return vetor;
}

function alterarLista(vetor, indice, quantidade, novoElemento) {
      let lista_aux = [];
      let lista_limpa = [];

      for (let i = 0; i < vetor.length; i++) {

            console.log("ENTRADA no for");

            if (i >= indice && i < (quantidade + indice)) {
                  console.log("i é menor que indice e maior que qtd+indice (If)");

                  if (novoElemento != "") {
                        console.log("Trocando lista_aux[i] por elemento novo");
                        lista_aux[i] = `${novoElemento}`;
                  } else {
                        console.log("Ignorando elemento nulo");
                  }

            } else {

                  lista_aux[i] = vetor[i]

            }
      }

      
      let count = 0;

      for (let i = 0; i < lista_aux.length; i++) {

            if (lista_aux[i] == "") {
                  break
            } else {
                  lista_limpa[count] = lista_aux[i];
                  count++
                  continue
                  console.log(lista_limpa);
            }
      }

      vetor = lista_limpa;

      return vetor;
}