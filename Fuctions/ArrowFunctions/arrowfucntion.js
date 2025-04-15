// Forma tradicional de função
let dobro = function (a) {
    return 2 * a
  }
  
  // Arrow function com bloco
  dobro = (a) => {
    return 2 * a
  }
  
  // Arrow function com return implícito
  dobro = a => 2 * a // return implícito
  console.log(dobro(Math.PI))
  
  // Função tradicional retornando uma string
  let ola = function () {
    return 'Olá'
  }
  

  ola =() => 'Olá'
  ola = _ => 'Olá' // possui um param
  console.log(ola())