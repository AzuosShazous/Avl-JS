let dataAtual = new Date()

let dias_da_semana = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"]

let dia_da_semana = dias_da_semana[dataAtual.getDay()]

let horas = String(dataAtual.getHours()).padStart(2, '0')
let minutos = String(dataAtual.getMinutes()).padStart(2, '0')
let segundos = String(dataAtual.getSeconds()).padStart(2, '0')

console.log(`Hoje é: ${dia_da_semana}.`)
console.log(`A hora atual é: ${horas}:${minutos}:${segundos}.`)

// Exercício solucionado utilizando o padrão de tempo do sistema.