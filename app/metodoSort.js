let btnPreco = document.getElementById('btnOrdenarPorPreco');

btnPreco.addEventListener('click', ordenaLivroPreço)

function ordenaLivroPreço() {
    let livrosOrdenados = livros.sort((a, b) => a.preco - b.preco);
    exibeLivros(livrosOrdenados);
}