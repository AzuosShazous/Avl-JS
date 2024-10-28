let ladoA = 5
let ladoB = 5
let ladoC = 5

let semiperimetro = (ladoA + ladoB + ladoC) / 2

let area = (semiperimetro * (semiperimetro - ladoA) * (semiperimetro - ladoB) * (semiperimetro - ladoC))**(1/2)

console.log(`A área do triângulo é: ${area.toFixed(2)}`)

//Questão solucionada utilizando a fórmula de Heron -> A = sqrt{p(p-A)(p-B)(p-C)}; p = ( A+B+C)/2.