var testeum = window.document.querySelector('div#testeum')

testeum.addEventListener('mouseenter', entrou)
testeum.addEventListener('mouseout', saiu)



function entrou(){
    testeum.style.background='yellow'
    testeum.style.color='black'
}
function saiu(){
    testeum.style.background='black'
    testeum.style.color='white'
}


var testedois = window.document.querySelector('div#testedois')
testedois.addEventListener('mouseenter', entrou2)
testedois.addEventListener('mouseout', saiu2)


function entrou2(){
    testedois.style.background='green'
    testedois.style.color='black'
}
function saiu2(){
    testedois.style.background='black'
    testedois.style.color='white'
}


var testetres = window.document.querySelector('div#testetres')

testetres.addEventListener('mouseenter', entrou3)
testetres.addEventListener('mouseout', saiu3)

function entrou3(){
    testetres.style.background='red'
    testetres.style.color='black'
}
function saiu3(){
    testetres.style.background='black'
    testetres.style.color='white'
}




