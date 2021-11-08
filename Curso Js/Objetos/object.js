
var usuario = {
    nome:'Renan',
    sexo:'Masculino',
    idade:'23',
    cidade:'Matelândia',
    estado:'Parána',
    peso: 75.5 ,
    engordar(a){
        console.log(`Em uma semana ele engordou ${a}kg e ficou com `)
        this.peso += a
    }
    
}



console.log(`${usuario.nome}, morador de ${usuario.cidade} tem aproximadamente ${usuario.peso}Kg.`)
usuario.engordar(20)
console.log(`${usuario.peso}Kg`)