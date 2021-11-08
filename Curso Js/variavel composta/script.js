let numero = [9,8,5,2,6,4,7]
numero[7] = 11
numero.push(20)

let usuario = ['Nome:Renan' , 'Idade:24 Anos' , 'Cidade:Matelândia']

console.log(`${usuario}`)

console.log(`${numero}`)
console.log(`${numero.length}`)

let num = [5 , 6 , 9 , 4 , 1 , 8 , 2 , 3 , 7  ]
num.sort()

for(var c = 0; c < num.length; c++){
    console.log(`Posição${c}, tem o valor ${num[c]}`)
}