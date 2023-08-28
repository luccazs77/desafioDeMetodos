//-------------------------------------------------------------------------------------------------

// lista de produtos com preco
const produtos = [
  {nome:"Arroz",preco:60},
  {nome:"Carne",preco:30},
  {nome:"Feijão",preco:45},
  {nome:"Peixe",preco:80},
  {nome:"Camarão",preco:25},
];
//-------------------------------------------------------------------------------------------------

//filtrar produtos com preço menor que R$50
const produtosMenorQue50 = produtos.filter(produtos => produtos.preco < 50);
console.log(produtosMenorQue50);
//-------------------------------------------------------------------------------------------------

//add 10% de desconto nos produtos
const produtosComDesconto = produtos.map(produto => ({
  nome:produto.nome,
  preco:produto.preco * 0.9
}))
console.log(produtosComDesconto)
//-------------------------------------------------------------------------------------------------

//produto mais caro
const produtoMaisCaro = produtosComDesconto.reduce((produtoMax, produto) => 
produto.preco > produtoMax.preco ? produto : produtoMax);
console.log(produtoMaisCaro)
//-------------------------------------------------------------------------------------------------

//criar uma nova lista apenas com os nomes dos produtos
const nomesDosProdutos = produtos.map(produto => produto.nome);
console.log(nomesDosProdutos)
//-------------------------------------------------------------------------------------------------

