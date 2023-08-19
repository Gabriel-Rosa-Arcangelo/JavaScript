function calcularArea(largura,comprimento){
    var area = largura*comprimento
    return area
}

var largura = prompt("Digite a largura")
var comprimento = prompt("Digite o comprimento")
var largura = parseFloat(largura)
var comprimento = parseFloat(comprimento)

var area = calcularArea(largura,comprimento)

document.write("Area total é: "+area)