function maiorPalavraDaFrase(frase){
    lista_frase = frase.split(" ")
    maior_num_char = 0
    for (let palavra of lista_frase){
        if (palavra.length > maior_num_char){
            maior_num_char = palavra.length
        }
    }
    let lista_palavras_maiores = []
    for (let palavra of lista_frase){
        if (palavra.length === maior_num_char){
            lista_palavras_maiores.push(palavra)
        }
    }
    return lista_palavras_maiores
}

let frase = "Eu sou a nova coisa mais estranha do mundo"
console.log("A(s) maior(es) palavra(s) da frase é (são): ", maiorPalavraDaFrase(frase))
