function aplicarDesconto(livros) {
    const desconto = 0.3;
    livrosComDesconto = livros.map(livro => {
        /*Esse método com 3 pontinhos salva tudo o que tem dentro do livro, mas o preço vai ser alterado. Que é o que desejamos de fato fazer*/
        return {...livro, preco: livro.preco - (livro.preco * desconto)}
    });
    return livrosComDesconto;
}