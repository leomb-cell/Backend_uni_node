// LISTA DE EXERCÍCIOS JS - ESTRUTURAS DE REPETIÇÃO 

// 1. Contagem crescente: Crie um loop for que imprima os números de 1 a 10.

for (let i = 1; i < 11; i++) {
    console.log(i)
    
}

// 2. Contagem regressiva: Crie um loop for que imprima os números de 10 a 1.

for (let i = 10; i > 0; i--) {
    console.log(i)
    
}

// 3. Pares até um limite: Imprima todos os números pares de 1 até 20 usando um loop for.

for (let i = 1; i < 11; i++) {
    if (i%2 == 0){
        console.log(i)
    }
}


// 4. Soma de números: Calcule a soma dos números de 1 a 50 usando um loop for.

let soma = 0
for (let i = 1; i < 51; i++) {
    soma += i
    console.log(soma)
}


// 5. Tabuada: Crie um loop for para exibir a tabuada do 5.

for (let i = 1; i < 11; i++) {
    console.log(`5 x ${i} = ${5*i}`)
}


// 6. Potências: Calcule as potências de 2 de 0 a 10


for (let i = 0; i < 11; i++) {
    console.log(`2^${i} = ${2**i}`)
}