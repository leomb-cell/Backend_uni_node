// LISTA DE EXERCÍCIOS JS - SEQUENCIAL 


// 1 Faça um Programa que mostre a mensagem "Alo mundo" na tela.

console.log("Alo mundo")

// 2 Faça um Programa que receba um número e então mostre a mensagem O número informado foi [número].

let num = 95;

console.log(`o numero informado foi ${num}`)

// 3 Faça um Programa que faça a soma de dois números e imprima o resultado.

function soma(num1, num2) {
    return num1 + num2
}

console.log(`A soma dos numeros 5 e 10 é: ${soma(5,10)}`)

// 4 Faça um Programa que tenha 4 variáveis representando as notas bimestrais e mostre a média.

let bim_1 = 7;
let bim_2 = 10;
let bim_3 = 6;
let bim_4 = 9;

let media = (bim_1 + bim_2 + bim_3 + bim_4)/4;

console.log(`A media final do aluno é: ${media}`)

// 5 Faça um Programa que converta metros para centímetros.

function m_to_cm(meters) {
    return meters * 1000
}

console.log(`1000 metros em centimetros são: ${m_to_cm(1000)}`);

// 6 Faça um Programa que peça o raio de um círculo, calcule e mostre sua área.

function circle_area(raio){
    let pi = 3.1415
    let area = pi * (raio**2)
    return area
}

console.log(`Area do circulo com o raio de 10 cm: ${circle_area(10)}`)

// 7 Faça um Programa que calcule a área de um quadrado, em seguida mostre o dobro desta área para o usuário.

function area_quadrado(lado){
    return lado * lado
}

console.log(`A area do quadrado de lado 10: ${area_quadrado(10)}`)

// 8 Faça um Programa que pegue o valor de uma variável que representa o valor por hora trabalhada e o número de horas trabalhadas no mês. Calcule e mostre o total do salário no referido mês.

function salario_mensal(hora_Trabalhada, numero_trabalhado_mes){
    return hora_Trabalhada * numero_trabalhado_mes
}

let vlr_hora  = 100.00
let qtd_horas_mes = 168
let salario = salario_mensal(vlr_hora, qtd_horas_mes)

console.log(`O salario é: ${salario}`)

// 9 Faça um Programa que converta a temperatura de graus Farenheit em graus Celsius e imprima na tela. C = (5 * (F-32) / 9).

function F_temp_converter(F_temp){
    let C = (5 * (F_temp-32) / 9)
    return C
}

console.log(`50°F in celsius é: ${F_temp_converter(50)}°C`)

// 10 Faça um Programa que converta a temperatura de graus Celsius para graus Farenheit e imprima na tela.

function C_temp_converter(C_temp){
    let F = C_temp * (9 / 5) + 32
    return F 
}

console.log(`10°C in Farenheit é: ${C_temp_converter(10)}°F`)
