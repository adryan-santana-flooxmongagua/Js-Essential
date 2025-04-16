// let e const
{
    var a = 2
    let b = 3
    console.log(b)
}
console.log(a)

// Template String
const produto = 'iPad'
console.log(`${produto} é caro!`)

// Destructuring com string
const [l, e, ...tras] = "Cod3r"
console.log(l, e, tras)

// Destructuring com array
const [x, , y] = [1, 2, 3]
console.log(x, y)

// Destructuring com objeto
const { idade, nome } = { nome: 'Ana', idade: 9 }
console.log(nome, idade)
