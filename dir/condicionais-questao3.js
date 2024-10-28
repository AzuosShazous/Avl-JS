let soma_par = 0; let soma_impar = 0
for (let i = 0; i <= 99; i++){
    if (i % 2 === 0){
        soma_par+=i
    }
    else{
        soma_impar+=i
    }
}

console.log(`A soma de todos os números pares é ${soma_par}`)
console.log(`A soma de todos os números ímpares é ${soma_impar}`)