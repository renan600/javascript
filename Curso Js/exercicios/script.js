var hora = new Date()
var h = hora.getHours()
var corpo = window.document.querySelector('body')
var divum = window.document.querySelector('div#um')
var imagem = window.document.querySelector('img#imagem')


if(h == 8 || h <= 12){
    corpo.style.backgroundColor = 'rgb(240, 238, 151)'
    divum.innerHTML = (`Agora são ${h} Horas.`)
    imagem.src = 'manhaa.jpg'
}else if(h == 13 || h <= 16 ){
    corpo.style.backgroundColor = 'rgb(233, 173, 83)'
    divum.innerHTML = (`Agora são ${h} Horas.`)
    imagem.src = 'tardee.jpg'
}else if(h == 17 || h <= 19){
    corpo.style.backgroundColor = 'rgba(185, 107, 18, 0.849)'
    divum.innerHTML = (`Agora são ${h} Horas.`)
    imagem.src = 'anoitecendoo.jpg'
}else{
    corpo.style.backgroundColor = 'rgb(68, 56, 41)'
    divum.innerHTML = (`Agora são ${h} Horas.`)
    imagem.src = 'noitee.jpg'
}