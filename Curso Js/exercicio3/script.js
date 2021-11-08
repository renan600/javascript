var botao = window.document.querySelector('button#button')
botao.addEventListener('click', clicou)

function clicou(){
    var ano = window.document.querySelector('input#nascimento').value
    var sexo = window.document.getElementsByName('sexo')
    var resultado = window.document.querySelector('p#resultado')
    var imagem = window.document.querySelector('img#img')
    var section = window.document.querySelector('section#corpo')
    var atual = new Date()
    var atual = atual.getFullYear()
    var ano = Number(ano)
    var generomas = 'Masculino'
    var generofem = 'Feminino'

    var idade = ( atual - ano)

    
    /*resultado.style.textAlign = ('center')
    resultado.style.textShadow = ('0px 0px 8px black')
    resultado.style.fontWeight = ('bold')
    resultado.style.fontSize = ('1.5em')*/

    if(sexo[0].checked){
        resultado.innerHTML = (`<p style="text-align:center; text-shadow:0px 0px 8px black; font-weight:bold; font-size:1.5em">${generomas} com ${idade} Anos</p>`)
        if(idade >= 0 && idade < 10){
            imagem.src = 'h5anos.png'
            section.style.height = ('530px')
        }else if(idade >= 10 && idade < 15 ){
            imagem.src = 'h10anos.png'
            section.style.height = ('530px')
        }else if(idade >= 15 && idade < 20){
            imagem.src = 'h15anos.png'
            section.style.height = ('530px')
        }else if(idade >= 20 && idade < 25 ){
            imagem.src = 'h20anos.png'
            section.style.height = ('530px')
        }else if(idade >= 25 && idade < 30){
            imagem.src = 'h25anos.png'
            section.style.height = ('530px')
        }else if(idade >= 30  && idade < 35){
            imagem.src = 'h30anos.png'
            section.style.height = ('530px')
        }else if(idade >= 35  && idade < 40){
            imagem.src = 'h35anos.png'
            section.style.height = ('530px')
        }else if(idade >= 40  && idade < 45){
            imagem.src = 'h40anos.png'
            section.style.height = ('530px')
        }else if(idade >= 45  && idade < 50){
            imagem.src = 'h45anos.png'
            section.style.height = ('530px')
        }else if(idade >=50  && idade < 55){
            imagem.src = 'h50anos.png'
            section.style.height = ('530px')
        }else if(idade >= 55  && idade < 60){
            imagem.src = 'h55anos.png'
            section.style.height = ('530px')
        }else if(idade >= 60  && idade < 65){
            imagem.src = 'h60anos.png'
            section.style.height = ('530px')
        }else if(idade >= 65  && idade < 70){
            imagem.src = 'h65anos.png'
            section.style.height = ('530px')
        }else if(idade >= 70  && idade < 90){
            imagem.src = 'h70anos.png'
            section.style.height = ('530px')
        }else if(idade >= 90 && idade < 110 ){
            imagem.src = 'h90anos.png'
            section.style.height = ('530px')
        }else{
            resultado.innerHTML = ('ERRO: Valor Invalido!')
            imagem.src = ('')
            section.style.height = ('250px')
        }
    }else if(sexo[1].checked){
        resultado.innerHTML = (`<p style="text-align:center; text-shadow:0px 0px 8px black; font-weight:bold; font-size:1.5em">${generofem} com ${idade} Anos</p>`)
        if(idade >=0 && idade < 10){
            imagem.src = ('5anos.png')
            section.style.height = ('530px')
        }else if(idade >= 10 && idade < 15 ){
            imagem.src = '10anos.png'
            section.style.height = ('530px')
        }else if(idade >= 15 && idade < 20){
            imagem.src = '15anos.png'
            section.style.height = ('530px')
        }else if(idade >= 20 && idade < 25 ){
            imagem.src = '20anos.png'
            section.style.height = ('530px')
        }else if(idade >= 25 && idade < 30){
            imagem.src = '25anos.png'
            section.style.height = ('530px')
        }else if(idade >= 30  && idade < 35){
            imagem.src = '30anos.png'
            section.style.height = ('530px')
        }else if(idade >= 35  && idade < 40){
            imagem.src = '35anos.png'
            section.style.height = ('530px')
        }else if(idade >= 40  && idade < 45){
            imagem.src = '40anos.png'
            section.style.height = ('530px')
        }else if(idade >= 45  && idade < 50){
            imagem.src = '45anos.png'
            section.style.height = ('530px')
        }else if(idade >=50  && idade < 55){
            imagem.src = '50anos.png'
            section.style.height = ('530px')
        }else if(idade >= 55  && idade < 60){
            imagem.src = '55anos.png'
            section.style.height = ('530px')
        }else if(idade >= 60  && idade < 65){
            imagem.src = '60anos.png'
            section.style.height = ('530px')
        }else if(idade >= 65  && idade < 70){
            imagem.src = '65anos.png'
            section.style.height = ('530px')
        }else if(idade >= 70  && idade < 90){
            imagem.src = '70anos.png'
            section.style.height = ('530px')
        }else if(idade >= 90 && idade < 110 ){
            imagem.src = '90anos.png'
            section.style.height = ('530px')
        }else{
            resultado.innerHTML = ('ERRO: Valor Invalido!')
            imagem.src = ('')
            section.style.height = ('250px')
        }
    }  
}

var reset = window.document.querySelector('button#reset')
reset.addEventListener('click', recetar)

function recetar(){
    var ano = window.document.querySelector('input#nascimento').value
    var sexo = window.document.getElementsByName('sexo')
    var resultado = window.document.querySelector('p#resultado')
    var imagem = window.document.querySelector('img#img')
    var section = window.document.querySelector('section#corpo')

    
    imagem.src = ('')
    resultado.innerHTML = ('Preencha o Formulário a cima , e veja o Resultado!')
    section.style.height = ('250px')
  
    
}