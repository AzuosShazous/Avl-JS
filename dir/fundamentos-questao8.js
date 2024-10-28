let frase = "Subi no onibus"

var_control = frase.length - 1
frase_modificada = ""
while (var_control >= 0){
    frase_modificada += frase[var_control]
    var_control-=1
}
console.log(frase_modificada)