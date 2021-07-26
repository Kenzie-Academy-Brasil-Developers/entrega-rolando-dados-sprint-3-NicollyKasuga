const rolagemDados = () => {
    let result = []
    for (let i = 1; i <= 1000; i++){
        result.push(Math.ceil(Math.random()*6))
    
    }
    return result
}
let dado1 = rolagemDados()
let dado2 = rolagemDados()


let dados = []
const soma = () => {
    for(let i = 1; i <= 1000; i++){
        dados.push(dado1[i] + dado2[i])
    }
    return dados
    }
console.log(soma())


    let count = [0,0,0,0,0,0,0,0,0,0,0]
    for(let i = 1; i < dados.length; i++){
        count[dados[i]-2]++

       }
       function textao () {
           for(let i = 0; i < count.length; i++){
       let texto = document.createElement('p')
       texto.innerText = 'Frequencia de ' + (i +2) + ' é ' + count[i]
       let div = document.querySelector('#dado')
       let bloco = document.createElement('p')
       bloco.style.width = count[i]+ 'px'
       bloco.style.background = 'purple'
       bloco.style.height = '10px'
       div.appendChild(texto)
       div.appendChild(bloco)
       
           }
       }
       
textao()