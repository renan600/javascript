

var botaopri = window.document.querySelector('input#p')
botaopri.addEventListener('click', relatoriopri)

function relatoriopri(){
   
    
    var matepri = window.document.querySelector('input#mate').value
    var matepri = Number(matepri)

    var portpri = window.document.querySelector('input#port').value
    var portpri = Number(portpri)

    var quimpri = window.document.querySelector('input#quim').value
    var quimpri = Number(quimpri)

    var artepri = window.document.querySelector('input#arte').value
    var artepri = Number(artepri)

    var edfipri = window.document.querySelector('input#edfi').value
    var edfipri = Number(edfipri)

    var filopri = window.document.querySelector('input#filo').value
    var filopri = Number(filopri)

    var primeiro = window.document.querySelector('p#primeiro')
    var primeirosemestre = window.document.querySelector('span#primeirosemestre')

    if(matepri == ('') || portpri == '' || quimpri == '' || artepri == '' || edfipri =='' || filopri == ''){

        window.alert('Faltou Preencher algum campo a cima!')
        primeiro.innerHTML = ('Preencha os campos a cima , para obter a média!')
    }else{
    var total = (matepri + portpri + quimpri + artepri + edfipri + filopri )
    var media = (total / 6)
    }if(media >= 7){
    primeiro.innerHTML = (`&#x1F449; ${media.toFixed(2)} &#x1F448;`)
    primeiro.style.textAlign =('center')
    primeiro.style.fontWeight = ('bold')
    primeirosemestre.innerHTML = (`<span style =" font-weight: bold;">${media.toFixed(2)}</span>`)
    }else if(media <= 7){
        primeiro.innerHTML = (`&#x1F449; ${media.toFixed(2)} &#x1F448;`)
        primeiro.style.textAlign =('center')
        primeiro.style.fontWeight = ('bold')
        primeiro.style.color =('red')
        primeirosemestre.innerHTML = (`<span style =" font-weight: bold; color:red;">${media.toFixed(2)}</span>`)
    }
    
}


var botaoseg = window.document.querySelector('input#s')
botaoseg.addEventListener('click', relatorioseg)

function relatorioseg(){
    
    
    var mateseg = window.document.querySelector('input#mate2').value
    var mateseg = Number(mateseg)

    var portseg = window.document.querySelector('input#port2').value
    var portseg = Number(portseg)

    var quimseg = window.document.querySelector('input#quim2').value
    var quimseg = Number(quimseg)

    var arteseg = window.document.querySelector('input#arte2').value
    var arteseg = Number(arteseg)

    var edfiseg = window.document.querySelector('input#edfi2').value
    var edfiseg = Number(edfiseg)

    var filoseg = window.document.querySelector('input#filo2').value
    var filoseg = Number(filoseg)

    var segundo = window.document.querySelector('p#segundo')
    var segundosemestre = window.document.querySelector('span#segundosemestre')

    if(mateseg == ('') || portseg == '' || quimseg == '' || arteseg == '' || edfiseg =='' || filoseg == ''){

        window.alert('Faltou Preencher algum campo a cima!')
        segundo.innerHTML = ('Preencha os campos a cima , para obter a média!')
    }else{
    var total2 = (mateseg + portseg + quimseg + arteseg + edfiseg + filoseg )
    var media2 = (total2 / 6)
    }if(media2 >= 7){
    segundo.innerHTML = (`&#x1F449; ${media2.toFixed(2)} &#x1F448;`)
    segundo.style.textAlign =('center')
    segundo.style.fontWeight = ('bold')
    segundosemestre.innerHTML = (`<span style =" font-weight: bold;">${media2.toFixed(2)}</span>`)
    }else if(media2 <= 7){
    segundo.innerHTML = (`&#x1F449; ${media2.toFixed(2)} &#x1F448;`)
    segundo.style.textAlign =('center')
    segundo.style.fontWeight = ('bold')
    segundo.style.color =('red')
    segundosemestre.innerHTML = (`<span style =" font-weight: bold; color:red;">${media2.toFixed(2)}</span>`)
}
}

    


   