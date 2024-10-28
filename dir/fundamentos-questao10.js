let nome = "Alan Mathison Turing"

let lista_nome_invertida = nome.split(" ").reverse()

novo_formato = ""
for (let index in lista_nome_invertida){
    if (Number(index) === lista_nome_invertida.length -1){
        lista_nome_invertida[index] = lista_nome_invertida[index].charAt(0).toUpperCase() + lista_nome_invertida[index].slice(1,lista_nome_invertida[index].length)
        novo_formato+= lista_nome_invertida[index]
        
    }
    else{
        novo_formato+= lista_nome_invertida[index].charAt(0).toUpperCase() + ". "
    }
    

}

console.log(`Novo formato de exibição de nome: ${novo_formato}`)