function Colt(){
    var Numero1 = document.getElementById("B1").valueAsNumber
    var Numero2 = document.getElementById("B2").valueAsNumber
    var resposta = document.getElementById ("respSoma")

    resposta.textContent = Numero1 + Numero2 
}

function subtracao(){
    var Numero3 = parseFloat(document.getElementById("B3").value)
    var Numero4 = parseFloat(document.getElementById("B4").value)
    var respSub = document.getElementById("respSub")

    respSub.textContent = Numero3 - Numero4
}

function multiplicacao(){
    var Numero5 = parseFloat(document.getElementById("B5").value)
    var Numero6 = parseFloat(document.getElementById("B6").value)
    var respSub = document.getElementById("respSub")

    respSub.textContent = Numero5 * Numero6
}

function divsao(){
    var Numero7 = parseFloat(document.getElementById("B7").value)
    var Numero8 = parseFloat(document.getElementById("B8").value)
    var respSub = document.getElementById("respSub")

    if(Numero8 !== 0 ){
    respSub.textContent = Numero7 / Numero8
    }else{
        respSub.textContent = "Não se Dividi por 0"
}
}
