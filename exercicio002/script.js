var corpo = window.document.querySelector('body')
corpo.addEventListener('onload', carregar())

function carregar(){
    var msg = window.document.querySelector('div#um')
    var imagem = window.document.querySelector('img#imagem')
    var h = new Date()
    var hora = h.getHours()

    msg.innerHTML = (`Agora são ${hora} Horas.`)

    if(hora >= 8 && hora <= 12){
        imagem.src = 'manhaa.jpg'
        corpo.style.backgroundColor = '#FDF2D2'
        
    }else if(hora >=13 && hora <= 17){
        imagem.src = 'tardee.jpg'
        corpo.style.backgroundColor = '#F3D98C'
    }else if(hora >= 18 && hora <= 20){
        imagem.src= 'anoitecendoo.jpg'
        corpo.style.backgroundColor = '#A6601A'
    }else{
        imagem.src = 'noitee.jpg'
        corpo.style.backgroundColor = '#09193B'
    }
}