var button = window.document.querySelector('button#botao')
button.addEventListener('click', clicou)

function clicou(){
    var tabuada = window.document.querySelector('input#numero').value
    var numero = Number(tabuada)
    var teste = window.document.querySelector('select#teste')
    
   
    teste.innerHTML = ('')
   for (c = 0; c <= 10; c++){
    var total = numero * c
    teste.innerHTML += (`<option>${c} X ${numero} = ${total} </option>`)
   }if(numero == ''){
       window.alert('Ocorreu uma falha!')
       teste.innerHTML=('<option value="">Digite um valor a cima</option>')
   }
   
}