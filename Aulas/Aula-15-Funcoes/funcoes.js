function adicionarNoFinal(lista, elemento) {

      console.log(lista);

      let nova_lista = [];

      for (let i = 0; i < lista.length; i++) {
            nova_lista[i] = lista[i];
      }

      nova_lista[lista.length] = elemento;

      console.log(`Nova Lista: ${nova_lista}`);

      return nova_lista;
}

// adicionarNoFinal(alunos, 'bob')

// elemento = 'ian';

//                 0      1      2      3
//      lista = ['tom', 'bob', 'dan']
// nova_lista = ['tom', 'bob', 'dan', 'ian']
// .lenth          1      2      3      4