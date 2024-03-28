alert(`Hello World!`)

let numberOne = 26
let numberTwo = 54

alert(`O resultado da soma de ${numberOne} + ${numberTwo} = ${(numberOne+numberTwo)}`)
if (typeof numberOne == 'number'){
  alert(`${numberOne} é um número`)
}

let name = 'Bruno'
if (typeof name == 'string'){
  alert(`${name} é uma string`)
}

let verdade = true
if (typeof verdade == 'boolean'){
  alert(`${verdade} é um Booleano`)
}

alert(`O resultado da subtração de ${numberOne} - ${numberTwo} = ${(numberOne-numberTwo)}`)

alert(`O resultado da multiplicação de ${numberOne} * ${numberTwo} = ${(numberOne*numberTwo)}`)

alert(`O resultado da divisão de ${numberOne} / ${numberTwo} = ${(numberOne/numberTwo)}`)

if (numberOne%2 == 0){
  alert(`${numberOne} é um número par`)
} else {
  alert(`${numberOne} não é um número par`)
}

if (numberTwo%2 != 0){
  alert(`${numberTwo} é um número impar`)
} else {
  alert(`${numberTwo} não é um número impar`)
}
