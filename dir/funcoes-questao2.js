function contaVogalEConsoanteDaFrase(frase){
    let frase_minuscula = frase.toLowerCase(); let vogais = "aeiouáéíóúãâêîôû"; let consoantes = "bcdfghjklmnpqrstvwxyz"
    let cont_vogal = 0; let cont_consoante = 0
    for (let char of frase_minuscula){
        if (vogais.includes(char)){
            cont_vogal++
        }else if (consoantes.includes(char)){
            cont_consoante++
        }
    }
    return [cont_vogal, cont_consoante]
}

let  frase = "Vasco é o time da virada."
let resultado = contaVogalEConsoanteDaFrase(frase)
console.log(`Vogais: ${resultado[0]}, Consoantes: ${resultado[1]}`)