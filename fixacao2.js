var nome = prompt("Qual o seu nome?")
var altura = prompt ("Qual a sua altura? em cm")
var peso = prompt ("Qual o seu peso?")

var altura = parseFloat(altura)
var peso = parseFloat(peso)

altura /= 100

var imc = peso/(altura*altura)
var classificacao = null

if(imc <16){
    classificacao = "Baixo peso muito grave"
}
if(imc >=16 && imc <=16,99){
    classificacao ="Baixo peso grave"
}
if(imc >=17 && imc <=18,49){
    classificacao ="Baixo peso"
}
if(imc >=18,50 && imc <=24,99){
    classificacao ="peso normal"
}
if(imc >=25 && imc <=29,99){
    classificacao ="sobrepeso"
}
if(imc >=30 && imc <=34,99){
    classificacao ="Obesidade grau I"
}
if(imc >=35 && imc <=39,99){
    classificacao ="Obesidade grau II"
}
if(imc >=40){
    classificacao ="Obesidade grau III"
}

document.write(nome+" possui índice de massa corporal igual a "+imc+" sendo classificado como: "+classificacao)


