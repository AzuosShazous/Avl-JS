function inverteNumero(numero){
    let numero_invertido = numero.toString().split("").reverse().join("")
    return parseInt(numero_invertido)
}

let numero_qualquer = 12356
console.log(`O número ${numero_qualquer} ivertido é ${inverteNumero(numero_qualquer)}`)