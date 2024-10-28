let frase = "Vasco é o melhor time de todo o planeta terra"

let lista_palavra_frase = frase.split(" ")

for (let index_palavra in lista_palavra_frase){
    if (lista_palavra_frase[index_palavra].length < 5){
        lista_palavra_frase[index_palavra] = lista_palavra_frase[index_palavra].toUpperCase()

    }
    else if(lista_palavra_frase[index_palavra.length] > 5 ){
        lista_palavra_frase[index_palavra] = lista_palavra_frase[index_palavra].toLowerCase()
    }
}

let frase_modificada = lista_palavra_frase.join(" ")

console.log(frase_modificada)