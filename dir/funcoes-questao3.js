function determinaMaiorEMenorDoArray(lista_num) {
    
    if (lista_num.length !== 10) {
        return "A lista deve ter exatamente 10 números."
    }

    let maior = lista_num[0]
    let menor = lista_num[0]

    for (let numero of lista_num) {
        if (numero > maior) {
            maior = numero
        }
        if (numero < menor) {
            menor = numero
        }
    }

    return {"Maior": maior, "Menor": menor}
}

let numeros = [1,2,3,4,5,6,7,8,9,0]
let retorno = determinaMaiorEMenorDoArray(numeros)
console.log(retorno)
