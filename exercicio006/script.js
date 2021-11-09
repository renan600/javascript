var fotoum = window.document.querySelector('div#um')
fotoum.addEventListener('click', click)

function click(){
    imagemum = window.document.querySelector('img#imagemum')
    para = window.document.querySelector('p#um')
   
    imagemum.src = ('fotoum.jpg')

    para.innerHTML = ('')

    
}

var fotodois = window.document.querySelector('div#dois')
fotodois.addEventListener('click', clickk)

function clickk(){
    imagemdois = window.document.querySelector('img#imagemdois')
    para = window.document.querySelector('p#dois')
   
    imagemdois.src = ('fotodois.jpg')
    para.innerHTML = ('')


}

var fototres = window.document.querySelector('div#tres')
fototres.addEventListener('click', clickkk)

function clickkk(){
    imagemtres = window.document.querySelector('img#imagemtres')
    para = window.document.querySelector('p#tres')
   
    imagemtres.src = ('fototres.jpg')
    para.innerHTML = ('')


}