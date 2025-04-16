const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: false },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false }
]

// Exemplo de filtro que retorna sempre falso (só pra mostrar a estrutura)
console.log(produtos.filter(function(p) {
    return false
}))

// Funções de filtro
const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

// Encadeando filtros
console.log(produtos.filter(caro).filter(fragil))
