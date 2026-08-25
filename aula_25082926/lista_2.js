// LISTA DE EXERCÍCIOS JS - ESTRUTURAS DE DECISÃO 

// 1 Faça um Programa que tenha duas variáveis contendo números e imprima o maior deles.

let var1 = 10
let var2 = 11
let bigger = 0

if (var1 > var2){
    bigger = var1
} else if (var2 > var1){
    bigger = var2
} else if (var1 == var2){
    bigger = "Os dois são iguais!"
}

console.log(bigger)


// 2 Faça um Programa que dado um valor, mostre na tela se o valor é positivo ou negativo.

let num = -100
let sign = ''

if (num < 0){
    sign = "negativo"
} else if (num > 0){
    sign = "positivo"
}

console.log(`O numero ${num} é ${sign}.`)

// 3 Faça um Programa que verifique se uma letra em uma variável é "F" ou "M". Conforme a letra escrever: F - Feminino, M - Masculino, Sexo Inválido.

let user_Imput = "M"
let sexo = ""

if (user_Imput == "M"){
    sexo = "Masculino"    
} else if (user_Imput == "F"){
    sexo = "Feminino"
}

console.log(sexo)

// 4 Faça um Programa que verifique se uma letra digitada é vogal ou consoante.

let letra_digitada = "m"
let letra = ""

if (letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u"){
    letra = "Vogal"
} else {
    letra = "Consoante"
}

console.log(letra)

// 5 Faça um programa para a leitura de duas notas parciais de um aluno. O programa deve calcular a média alcançada por aluno e apresentar:

// A mensagem "Aprovado", se a média alcançada for maior ou igual a sete;
// A mensagem "Reprovado", se a média for menor do que sete;
// A mensagem "Aprovado com Distinção", se a média for igual a dez.

function checar_media(nota1, nota2){
    let media = (nota1 + nota2)/2
    let status = ""

    if (media >= 10){
        status = "Aprovado com Distinção"
    } else if (media >= 7){
        status = "Aprovado"
    } else if (media < 7){
        status = "Reprovado"
    }
    return status
}

console.log(`O aluno XYZ foi ${checar_media(9,5)}`)

// 6 Faça um Programa que leia três números e mostre o maior deles.

let num1 = 5
let num2 = 14
let num3 = 7

let maior = 0

if (num1 > num2 && num1 > num3 ){
    maior = num1
} else if (num2 > num1 && num2 > num3){
    maior = num2
} else if (num3 > num1 && num3 > num2){
    maior = num3
}

console.log(`Maior numero é: ${maior}`)

// 7 Faça um Programa que leia três números e mostre o maior e o menor deles.

if (num1 > num2 && num1 > num3 ){
    maior = num1
} else if (num2 > num1 && num2 > num3){
    maior = num2
} else if (num3 > num1 && num3 > num2){
    maior = num3
}

let menor = 0

if (num1 < num2 && num1 < num3 ){
    menor = num1
} else if (num2 < num1 && num2 < num3){
    menor = num2
} else if (num3 < num1 && num3 < num2){
    menor = num3
}

console.log(`Maior numero é: ${maior}\nMenor é: ${menor}`)

// 8 Faça um programa que pergunte o preço de três produtos e informe qual produto você deve comprar, sabendo que a decisão é sempre pelo mais barato.

let produto1 = 32.00
let produto2 = 50000.00
let produto3 = 145.00

let barato = 0.00

if (produto1 < produto2 && produto1 < produto3 ){
    barato = produto1
} else if (produto2 < produto1 && produto2 < produto3){
    barato = produto2
} else if (produto3 < produto1 && produto3 < produto2){
    barato = produto3
}

console.log(`O mais barato é: ${barato}`)

// 9 Faça um Programa que leia três números e mostre-os em ordem decrescente.

maior = 0
let medio = 0
menor = 0

let n1 = 50
let n2 = 100
let n3 = 23

if (n1 > n2){
    if (n1 > n3){
        maior = n1
        if (n2 > n3){
            menor = n3
            medio = n2
        } else {
            menor = n2
            medio = n3
        }
    } else {
        if (n3 > n2){
            menor = n2
            medio = n1
            maior = n3
        } else {
            menor = n3
            medio = n2
            maior = n1
        }
    }
} else {
    if (n2 > n3) {
        maior = n2
        if (n1 > n3) {
            medio = n1
            menor = n3
        } else {
            menor = n1
            medio = n3
        }
    } else {
        maior = n3
        medio = n2
        menor = n1
    }
}

console.log(`ordem decrescente de 3 numeros infernais: ${maior} - ${medio} - ${menor}`)



if (n1 > n2 && n1 > n3 ){
    maior = n1
} else if (n2 > n1 && n2 > n3){
    maior = n2
} else if (n3 > n1 && n3 > n2){
    maior = n3
}

if (n1 < n2 && n1 < n3 ){
    menor = n1
} else if (n2 < n1 && n2 < n3){
    menor = n2
} else if (n3 < n1 && n3 < n2){
    menor = n3
}

if (n1 != maior && n1 != menor ){
    medio = n1
} else if (n2 != maior && n2 != menor ){
    medio = n2
} else if (n3 != maior && n3 != menor ){
    medio = n3
}

console.log(`ordem decrescente de 3 numeros infernais: ${maior} - ${medio} - ${menor}`)