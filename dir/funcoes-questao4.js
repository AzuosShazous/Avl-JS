function verificaPresencaDePalavraNaFrase(frase, palavra){
    let lista_frase = frase.split(" ")
    if (lista_frase.includes(palavra)){
        return `A palavra "${palavra}" está presente na frase "${frase}."`
    }
    else {
        return `A palavra "${palavra}" não está presente na frase "${frase}."`
    }
}

console.log(verificaPresencaDePalavraNaFrase("Ola ratinho feio", "Ola"))