var button = window.document.querySelector('button#button')
button.addEventListener('click', clicou)

function clicou(){
    var inicio = window.document.querySelector('input#inicio').value
    var inicio = Number(inicio)
    var fim = window.document.querySelector('input#fim').value
    var fim = Number(fim)
    var passo = window.document.querySelector('input#passo').value
    var passo = Number(passo)
    
    var resultado = window.document.querySelector('p#resultado')
    
    resultado.innerHTML=('Contando:</br>')
    

    if(inicio < fim){
        for(c = inicio; c <= fim ; c = c + passo){
    

        resultado.innerHTML +=(`${c} &#x1F449`)

        if(passo == 0){
            passo = passo  + 1
            window.alert('valor invalido, Consideramos o numero 1')
        }
    }
}else if(inicio > fim){
    for(c = inicio; c >= fim ; c = c - passo){
    

        resultado.innerHTML +=(`${c} &#x1F449`)
    
        if(passo == 0){
            passo = passo  + 1
            window.alert('valor invalido, Consideramos o numero 1')
        }
    }
}
resultado.innerHTML +=(`&#x1F3C1`)

if(inicio == ''){
    resultado.innerHTML = ('Impossível Contar, nenhum valor de Inicio encontrado')
}else if(fim == ''){
    resultado.innerHTML = ('Impossível Contar, nenhum valor de Fim encontrado')
}
}



