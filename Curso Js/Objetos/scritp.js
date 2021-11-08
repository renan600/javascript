let botao = window.document.querySelector('button#bot')
botao.addEventListener('click', enviar)


function enviar(){

    let nome = window.document.querySelector('input#nome').value
    let sobre = window.document.querySelector('input#sobre').value
    let idade = window.document.querySelector('input#idade')
    let tdn = window.document.querySelector('td#name')
    let tds = window.document.querySelector('td#sobrename')
    let tdi = window.document.querySelector('td#old')
    let tabela = window.document.querySelector('table#tabela')
    
   
    let ida = Number(idade.value)

    if(nome.length == 0 || sobre.length == 0  || ida == '' ){
        window.alert('Por Favor , preencha o formulário a cima! ')
    }else{

        let teste = document.createElement('tr')
        teste.innerHTML += (`<td class="th">${nome}</td>`) 
        teste.innerHTML += (`<td class="th">${sobre}</td>`) 
        teste.innerHTML += (`<td class="th">${ida}</td>`) 

        tabela.appendChild(teste)
    }

    idade.value = ('')
    

    
}

