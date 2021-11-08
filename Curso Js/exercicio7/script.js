const button = window.document.querySelector('button#button')
button.addEventListener('click', clicou)

function clicou(){
    const input = window.document.querySelectorAll('.sasuke')
    const imagem = window.document.querySelector('img#imagem')
    const resumo = window.document.querySelector('p#resultado')

  
    /*
    if(input[0].checked){
        resumo.innerHTML =('Sasuke Uchiha aos 12 Anos')
        imagem.src = ('sasuke12.png')
    }else if(input[1].checked){
        resumo.innerHTML = ('Sasuke Uchiha aos 16 Anos')
        imagem.src = ('sasuke16.png')
    }else if(input[2].checked){
        resumo.innerHTML = ('Sasuke Uchiha aos 19 Anos')
        imagem.src = ('sasuke19.png')
    }else if(input[3].checked){
        resumo.innerHTML = ('Sasuke Uchiha aos 30 Anos')
            imagem.src = ('sasuke30.png')
    }
    */
   

   
    
    
    switch(input[0].checked || input[1].checked || input[2].checked || input[3].checked){
        case input[0].checked:
            resumo.innerHTML =('Sasuke Uchiha aos 12 Anos')
            imagem.src = ('sasuke12.png')
            break
    
        case input[1].checked:
            resumo.innerHTML = ('Sasuke Uchiha aos 16 Anos')
            imagem.src = ('sasuke16.png')
            break

        case input[2].checked:
            resumo.innerHTML = ('Sasuke Uchiha aos 19 Anos')
            imagem.src = ('sasuke19.png')
            break

        case input[3].checked:
            resumo.innerHTML = ('Sasuke Uchiha aos 30 Anos')
            imagem.src = ('sasuke30.png')
            break

        default:
            imagem.src = ('61771c8ae98d05a44c375317c0f3196e.png')
            break
    }
    
}
