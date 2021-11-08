var botao = window.document.querySelector('button#verificar')
botao.addEventListener('click', clicou)

function clicou(){

    var ano = window.document.querySelector('input#nascimento').value
    var mas = window.document.querySelector('input#masculino').value
    var fem = window.document.querySelector('input#feminino').value
    var img = window.document.querySelector('img#imagem')
    var resultado = window.document.querySelector('p#mensagem')
    var corpo = window.document.querySelector('section#corpo')
    var sexo = window.document.getElementsByName('sexo')
    var genero = ''
  

    ano = Number(ano)
    total = (2021 - ano)

    resultado.innerHTML = (`<p style="text-align: center; font-weight: bold; text-shadow: 0px 0px 8px black;">${total} Anos .</p>`)
    
    
    if(sexo[0].checked){
        genero = 'Mulher'
    if(total >= 0 && total <= 10){
        img.src = '5anos.png'
        corpo.style.height = '500px'
    }else if(total > 10 && total <= 15){
        img.src = '10anos.png'
        corpo.style.height = '500px'
    }else if(total > 15 && total <= 20){
        img.src = '15anos.png'
        corpo.style.height = '500px'
    }else if(total > 20 && total <= 25){
        img.src = '20anos.png'
        corpo.style.height = '500px'
    }else if(total > 25 && total <= 30){
        img.src = '25anos.png'
        corpo.style.height = '500px'
    }else if(total > 30 && total <= 35){
        img.src = '30anos.png'
        corpo.style.height = '500px'
    }else if(total > 35 && total <= 40){
        img.src = '35anos.png'
        corpo.style.height = '500px'
    }else if(total > 40 && total <= 45){
        img.src = '40anos.png'
        corpo.style.height = '500px'
    }else if(total > 45 && total <= 50){
        img.src = '45anos.png'
        corpo.style.height = '500px'
    }else if(total > 50 && total <= 55){
        img.src = '50anos.png'
        corpo.style.height = '500px'
    }else if(total > 55 && total <= 60){
        img.src = '55anos.png'
        corpo.style.height = '500px'
    }else if(total > 60 && total <= 65){
        img.src = '60anos.png'
        corpo.style.height = '500px'
    }else if(total > 65 && total <= 70){
        img.src = '65anos.png'
        corpo.style.height = '500px'
    }else if(total > 70 && total <= 89){
        img.src = '70anos.png'
        corpo.style.height = '500px'
    }else if(total >= 90 && total <= 120){
        img.src = '90anos.png'
        corpo.style.height = '500px'
    }else{
        resultado.innerHTML = ('[ERRO]: Ano não compatível')
        img.src = ''
    }
}else if (sexo[1].checked){
    genero = 'Homem'
    if(total >= 0 && total <= 10){
        img.src = 'h5anos.png'
        corpo.style.height = '500px'
    }else if(total > 10 && total <= 15){
        img.src = 'h10anos.png'
        corpo.style.height = '500px'
    }else if(total > 15 && total <= 20){
        img.src = 'h15anos.png'
        corpo.style.height = '500px'
    }else if(total > 20 && total <= 25){
        img.src = 'h20anos.png'
        corpo.style.height = '500px'
    }else if(total > 25 && total <= 30){
        img.src = 'h25anos.png'
        corpo.style.height = '500px'
    }else if(total > 30 && total <= 35){
        img.src = 'h30anos.png'
        corpo.style.height = '500px'
    }else if(total > 35 && total <= 40){
        img.src = 'h35anos.png'
        corpo.style.height = '500px'
    }else if(total > 40 && total <= 45){
        img.src = 'h40anos.png'
        corpo.style.height = '500px'
    }else if(total > 45 && total <= 50){
        img.src = 'h45anos.png'
        corpo.style.height = '500px'
    }else if(total > 50 && total <= 55){
        img.src = 'h50anos.png'
        corpo.style.height = '500px'
    }else if(total > 55 && total <= 60){
        img.src = 'h55anos.png'
        corpo.style.height = '500px'
    }else if(total > 60 && total <= 65){
        img.src = 'h60anos.png'
        corpo.style.height = '500px'
    }else if(total > 65 && total <= 70){
        img.src = 'h65anos.png'
        corpo.style.height = '500px'
    }else if(total > 70 && total <= 89){
        img.src = 'h70anos.png'
        corpo.style.height = '500px'
    }else if(total >= 90 && total <= 120){
        img.src = 'h90anos.png'
        corpo.style.height = '500px'
    }else{
        resultado.innerHTML = ('[ERRO]: Ano não compatível')
        img.src = ''
    }
}
}