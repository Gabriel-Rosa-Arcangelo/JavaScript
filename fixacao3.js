var num1 = prompt ('Digite um numero')
var ope = prompt ('Digite soma ou subtração?')
var num2 = prompt ('Digite outro numero')

function soma(num1, num2, ope){
num1 = parseFloat(num1)
num2 = parseFloat(num2)
var resultado =0
    if(ope == 'soma'){
        resultado = (num1 + num2)
    }
    if(ope == 'subtração'){
        resultado = (num1 - num2)
    }
    return resultado
}

document.write("O resultado é: "+soma(num1,num2,ope))
