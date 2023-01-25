const sectionLivro = document.getElementById('livros');
const elementoValorTotal = document.getElementById('valor_total_livros_disponiveis')

function exibeLivros(listaLivros) {
    elementoValorTotal.innerHTML = '';
    sectionLivro.innerHTML = '';
    listaLivros.forEach(livro => {
        // fazendo por if
        //let disponivel = verificaDisponivel(livro);

        // fazendo por operador ternário
        let disponivel = livro.quantidade > 0 ? 'livro__imagens' : 'livro__imagens indisponivel';
        
        sectionLivro.innerHTML += `
        <div class="livro">
        <img class="${disponivel}" src="${livro.imagem}" alt="${livro.alt}"/>
        <h2 class="livro__titulo">
          ${livro.titulo}
        </h2>
        <p class="livro__descricao">${livro.autor}</p>
        <p class="livro__preco" id="preco">R$ ${livro.preco.toFixed(2)}</p>
        <div class="tags">
          <span class="tag">${livro.categoria}</span>
        </div>
      </div>
        `
    });
}


// fazendo por if
// function verificaDisponivel (livro) {
//     if(livro.quantidade <= 0) {
//         return 'livro__imagens indisponivel'
//     }
//     else {
//         return 'livro__imagens';
//     }
// }
