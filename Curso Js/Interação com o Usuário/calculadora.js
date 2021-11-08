
var somar = window.document.querySelector('input#botaosomar')
somar.addEventListener('click', somou)

function somou(){
    var som01 = window.document.querySelector('input#mais01').value
    var som02 = window.document.querySelector('input#mais02').value

    var resultado = window.document.querySelector('div#soma')

    n1 = Number(som01) 
    n2 = Number(som02)

    total = n1 + n2 

    resultado.innerHTML= (`${total}`)

}
var diminuir = window.document.querySelector('input#botaosubtracao')
diminuir.addEventListener('click', diminuiu)

function diminuiu(){
    var som01 = window.document.querySelector('input#menos01').value
    var som02 = window.document.querySelector('input#menos02').value

    var resultado = window.document.querySelector('div#subtracao')

    n1 = Number(som01) 
    n2 = Number(som02)

    total = n1 - n2 

    resultado.innerHTML= (`${total}`)

}


var dividir = window.document.querySelector('input#botaodivisao')
dividir.addEventListener('click', dividiu)

function dividiu(){
    var som01 = window.document.querySelector('input#divisao01').value
    var som02 = window.document.querySelector('input#divisao02').value

    var resultado = window.document.querySelector('div#dividir')

    n1 = Number(som01) 
    n2 = Number(som02)

    total = n1 / n2 

    resultado.innerHTML= (`${total}`)

}

var multiplicar = window.document.querySelector('input#botaomultiplicar')
multiplicar.addEventListener('click', multiplicou)

function multiplicou(){
    var som01 = window.document.querySelector('input#multi01').value
    var som02 = window.document.querySelector('input#multi02').value

    var resultado = window.document.querySelector('div#multiplicar')

    n1 = Number(som01) 
    n2 = Number(som02)

    total = n1 * n2 

    resultado.innerHTML= (`${total}`)

}

