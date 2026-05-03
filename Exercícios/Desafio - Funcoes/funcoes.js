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

      for (let i = 0; i < vetor.length; i++) {

            if (i > indice && i < (quantidade + indice)) {
                  continue
            } else {
                  lista_aux[i] = vetor[i]
            }
      }

      vetor  = lista_aux;

      return vetor;
}