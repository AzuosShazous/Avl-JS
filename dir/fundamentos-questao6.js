let lista_num = [1,1,1,1,1,2,2,2,3,4,4,5,5,5,5,5,5,5,5,5,5,5,6,6,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,8,9,0,5,4]

let dict_contar = {}

for (let num of lista_num) {
    dict_contar[num] = (dict_contar[num] || 0) + 1
}

let num_moda = null
let valor_moda = 0

for (let num in dict_contar) {
    if (dict_contar[num] >= valor_moda) {
        valor_moda = dict_contar[num]
        num_moda = Number(num)
    }
}

console.log(`O número com maior ocorrência é o ${num_moda}, que apresenta ${valor_moda} ocorrências.`)

// o script é deficiente no que diz respeito a números com ocorrências iguais.