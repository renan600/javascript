
        var gerador = window.document.querySelector('input#gerador')
        gerador.addEventListener('click', clicou)

        function clicou(){
            var mate = window.document.querySelector('input#mate').value
            var port = window.document.querySelector('input#port').value
            var ingl = window.document.querySelector('input#ingl').value
            var artes = window.document.querySelector('input#artes').value
            var edfisica = window.document.querySelector('input#edfisica').value
            var socio = window.document.querySelector('input#socio').value
            var boletim = window.document.querySelector('div#boletim')
         

            mate =  Number(mate) 
            port =  Number(port)
            ingl =  Number(ingl)
            artes =  Number(artes)
            edfisica =  Number(edfisica)
            socio =  Number(socio)

            var testemat = mate >= 7.0? 'APROVADO':'REPROVADO'
            var testepor = port >= 7.0? 'APROVADO':'REPROVADO'
            var testeing = ingl >= 7.0? 'APROVADO':'REPROVADO'
            var testeart = artes >= 7.0? 'APROVADO':'REPROVADO'
            var testeedf = edfisica >= 7.0? 'APROVADO':'REPROVADO'
            var testesoc = socio >= 7.0? 'APROVADO':'REPROVADO'


        
            boletim.innerHTML = (`<p>Matemática: ${testemat}</p>`)
            boletim.innerHTML +=(`<p>Português: ${testepor}</p>`)
            boletim.innerHTML +=(`<p>Inglês: ${testeing}</p>`)
            boletim.innerHTML +=(`<p> Artes:${testeart}</p>`)
            boletim.innerHTML +=(`<p>Educação Física: ${testeedf}</p>`)
            boletim.innerHTML +=(`<p> Sociologia: ${testesoc}</p>`)
        }

        var reset = window.document.querySelector('input#resete')
        reset.addEventListener('click', resete)

        function resete(){
            var mate = window.document.querySelector('input#mate').value
            var port = window.document.querySelector('input#port').value
            var ingl = window.document.querySelector('input#ingl').value
            var artes = window.document.querySelector('input#artes').value
            var edfisica = window.document.querySelector('input#edfisica').value
            var socio = window.document.querySelector('input#socio').value
            var boletim = window.document.querySelector('div#boletim')

            var boletim = window.document.querySelector('div#boletim')
            var resett = 0 
    
            mate = resett
            port = resett
            ingl = resett
            artes = resett
            edfisica = resett
            socio = resett

            boletim.innerHTML =(``)
          
        }

        
        