// let lista_num = [10, 58, 68, 88, 25, 45]
// let n = 3
// console.log(lista_num.slice(lista_num.length-n,lista_num.length))

// ou

let lista_numeros = [10, 58, 68, 88, 25, 45]
let num_elementos = 3
let lista_n_num = []
for (let i = lista_numeros.length - num_elementos; i <= lista_numeros.length -1; i++){
    lista_n_num.push(lista_numeros[i])
}

console.log(`lista do(s) ${num_elementos} último(s) elemento(s):`, lista_n_num)