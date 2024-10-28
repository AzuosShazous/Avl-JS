let frase = "A vida é uma caixinha de surpresas"

let lista_palavras = frase.split(" ")

soma_tamanho_palavras = 0
for (let palavra of lista_palavras){
    soma_tamanho_palavras+= palavra.length
}

console.log(`A soma do tamanho de todas as palavras da frase é ${soma_tamanho_palavras}`)