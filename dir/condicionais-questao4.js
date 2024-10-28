let alunos = [["Aluno1", [10, 50, 100]], ["Aluno2", [55, 78, 90]],["Aluno3", [60, 90, 98]],["Aluno4", [19, 20,38]],["Aluno5", [44, 33, 22]]]
for (let aluno of alunos){
    let media = ((aluno[1].reduce((a,b) => a + b,0))/3).toFixed(2)
    let estado = "Aprovado"
    if (media < 70){
        estado = "Reprovado"
    }
    console.log(`${aluno[0]}, média ${media}, ${estado}`)
}