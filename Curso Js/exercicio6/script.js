var vermelho = window.document.querySelector('button#vermelho')
vermelho.addEventListener('click', vermelhoclick)

function vermelhoclick(){
    var imagemvermelho = window.document.querySelector('img#imagens')
    imagemvermelho.src = ('vermelho.png')
}


var amarelo = window.document.querySelector('button#amarelo')
amarelo.addEventListener('click', amareloclick)

function amareloclick(){
    var imagemamarelo = window.document.querySelector('img#imagens')
    imagemamarelo.src = ('amarelo.png')
}   


var verde = window.document.querySelector('button#verde')
verde.addEventListener('click', verdeclick)

function verdeclick(){
    var imagemverde = window.document.querySelector('img#imagens')
    imagemverde.src = ('verde.png')
}

var automatico = window.document.querySelector('button#automatico')
automatico.addEventListener('click', auto)

function auto(){

    for(var c = 1; c <=15; c++){
    var imagemauto = window.document.querySelector('img#imagens')

    imagemauto.src += ('amarelo.png')
    

    }
}


        
    

