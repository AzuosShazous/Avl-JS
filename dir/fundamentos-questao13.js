let lista_numeros = [1,2,3,4,5,6,7,8,9]

let lista_numeros_potencias = []
let soma_total = 0
for (let numero of lista_numeros){  
    lista_numeros_potencias.push(numero**3); soma_total+= numero**3

}


console.log("A nova lista de potências é: ", lista_numeros_potencias, "\n")
console.log(`A soma de todos os elementos da lista é ${soma_total}`)