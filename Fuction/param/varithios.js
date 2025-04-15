
// Exemplo 1: this no escopo global
console.log('Exemplo 1:', this); // No navegador: window | No Node.js: {}




// Exemplo 2: this em uma função normal
function mostrarThis() {
  console.log('Exemplo 2:', this);
}
mostrarThis(); // No navegador: window | No modo estrito: undefined






// Exemplo 3: this em um objeto
const pessoa = {
  nome: 'Havz',
  dizerNome: function() {
    console.log('Exemplo 3:', this.nome);
  }
};
pessoa.dizerNome(); // 'Havz'





// Exemplo 4: this em uma função separada usada no objeto
function saudacao() {
  console.log('Exemplo 4:', this.nome);
}
const user = {
  nome: 'Adryan',
  falar: saudacao
};
user.falar(); // 'Adryan'







// Exemplo 5: this em arrow function
const userArrow = {
  nome: 'Lucas',
  falar: () => {
    console.log('Exemplo 5:', this.nome);
  }
};
userArrow.falar(); // undefined








// Exemplo 6: this com bind, call, apply
function apresentar() {
  console.log('Exemplo 6:', `Olá, meu nome é ${this.nome}`);
}
const pessoa2 = { nome: 'Pedro' };
apresentar.call(pessoa2);   // Olá, meu nome é Pedro
apresentar.apply(pessoa2);  // Olá, meu nome é Pedro
const apresentarPedro = apresentar.bind(pessoa2);
apresentarPedro();          // Olá, meu nome é Pedro

// Exemplo 7: this em event listener (HTML necessário)
/*
<button id="btn">Clique aqui</button>
<script>
  const botao = document.getElementById('btn');

  botao.addEventListener('click', function () {
    console.log('Exemplo 7 - função normal:', this); // o próprio botão
  });

  botao.addEventListener('click', () => {
    console.log('Exemplo 7 - arrow function:', this); // depende do escopo onde foi definida
  });
</script>
