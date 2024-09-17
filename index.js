//sequencia fibonacci
function isFibonacci(num) {
  let a = 0;
  let b = 1;

  if (num === 0 || num === 1) {
    return `${num} pertence à sequência de Fibonacci.`;
  }

  while (b < num) {
    let next = a + b;
    a = b;
    b = next;
  }

  if (b === num) {
    return `${num} pertence à sequência de Fibonacci.`;
  } else {
    return `${num} não pertence à sequência de Fibonacci.`;
  }
}
const number = 28;
console.log(isFibonacci(number));

//verificar a existencia e ocorência da letra 'a'

function Verify(str){
  let regex = /a/gi;
  let matches = str.match(regex);

  if(matches){
    console.log(`A letra 'A' aparece ${matches.length} vez(es) na string`)
  }else{
    console.log("A letra 'A' não foi encontrada na string.")
  }
}

let texto = "olá mundo!"
Verify(texto);

function soma(){
  let indice = 12
  let k = 1
  let soma = 0

  while(k< indice){
    k +=1
    soma += k
    console.log(soma)
  }
}
soma()