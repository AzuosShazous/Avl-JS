let frase = "Eu sou Lucas"
let lista_palavras = frase.split(" ")
let palavra = "Lucas"
if (lista_palavras.includes(palavra)){
    console.log(`A palavra "${palavra}" está presente na frase "${frase}."`)
}
else {
    console.log(`A palavra "${palavra}" não está presente na frase "${frase}."`)
}