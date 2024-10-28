let data_atual = new Date()

let dias_da_semana = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"]

let dia_da_semana = dias_da_semana[data_atual.getDay()]

let horas = String(data_atual.getHours()).padStart(2, '0'); let minutos = String(data_atual.getMinutes()).padStart(2, '0'); let segundos = String(data_atual.getSeconds()).padStart(2, '0')

console.log(`Hoje é: ${dia_da_semana}.`)
console.log(`A hora atual é: ${horas}:${minutos}:${segundos}.`)
