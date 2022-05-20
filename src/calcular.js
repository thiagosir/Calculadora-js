
// var abertura = prompt("Escolha a operação:" + "\n" + "1 - Somar" + "\n" + "2 - Subtrair" + "\n"
//     + "3 - Dividir" + "\n" + "4 - Multiplicar" + "\n" + "5 - Média" + "\n" + "6 - Raiz²");

// if (abertura == 1) {
//     var num1 = prompt("Primeiro valor:");
//     var num2 = prompt("Segundo valor:");
//     var somando = parseInt(num1) + parseInt(num2);

//     alert("A soma dos números escolhidos é: " + somando + "\n");
// } else {
//     if (abertura == 2) {
//         var num1 = prompt("Primeiro valor:");
//         var num2 = prompt("Segundo valor:");
//         var subtraindo = parseInt(num1) - parseInt(num2);

//         alert("A subtração dos números escolhidos é: " + subtraindo + "\n");
//     }
// } if (abertura == 3) {
//     var num1 = prompt("Primeiro valor:");
//     var num2 = prompt("Segundo valor:");
//     var dividindo = parseInt(num1) / parseInt(num2);

//     alert("A divisão dos números escolhidos é: " + dividindo + "\n");
// } if (abertura == 4) {
//     var num1 = prompt("Primeiro valor:");
//     var num2 = prompt("Segundo valor:");
//     var multiplicando = parseInt(num1) * parseInt(num2);

//     alert("A Multiplicação dos números escolhidos é: " + multiplicando + "\n");
// } if (abertura == 5) {
//     var num1 = prompt("Primeiro valor:");
//     var num2 = prompt("Segundo valor:");
//     var media = (parseInt(num1) + parseInt(num2))/2;

//     alert("A média dos números escolhidos é: " + media + "\n");
// } if (abertura == 6) {
//     var num1 = prompt("Número que deseja saber a raiz: ");
//     var raiz = Math.sqrt(parseFloat(num1));

//     alert("A raiz dos números escolhidos é: " + raiz + "\n");
// }



function somar() {
    var n1 = parseFloat(document.querySelector("#n1").value);
    var n2 = parseFloat(document.querySelector("#n2").value);
    var soma = n1 + n2;
    document.getElementById("resp").innerHTML = soma
}
function subtrair() {
    var n1 = parseFloat(document.querySelector("#n1").value);
    var n2 = parseFloat(document.querySelector("#n2").value);
    var subtracao = n1 - n2;
    document.getElementById("resp").innerHTML = subtracao
}
function dividir() {
    var n1 = parseFloat(document.querySelector("#n1").value);
    var n2 = parseFloat(document.querySelector("#n2").value);
    var divisao = n1 / n2;
    document.getElementById("resp").innerHTML = divisao
}
function multiplicacao() {
    var n1 = parseFloat(document.querySelector("#n1").value);
    var n2 = parseFloat(document.querySelector("#n2").value);
    var multi = n1 * n2;
    document.getElementById("resp").innerHTML = multi
}
function media() {
    var n1 = parseFloat(document.querySelector("#n1").value);
    var n2 = parseFloat(document.querySelector("#n2").value);
    var media = (n1 + n2) / 2;
    document.getElementById("resp").innerHTML = media
}
function raiz() {
    var n1 = parseFloat(document.querySelector("#n1").value);
    var n2 = parseFloat(document.querySelector("#n2").value);
    var raiz = Math.sqrt(n1);
    document.getElementById("resp").innerHTML = raiz
}
function clean() {
    document.getElementById('n1').value = "";
    document.getElementById('n2').value = "";
    document.getElementById("resp").innerHTML = "";
}
function cleanVelo() {
    document.getElementById('velo').value = "";
    document.getElementById('dist').value = "";
    document.getElementById('temp').value = "";
    document.getElementById("resp2").innerHTML = "";
}
function cleanBin() {
    document.getElementById('n3').value = "";
    document.getElementById("resp1").innerHTML = "";
}
function bin(n3) {
    var n3 = parseInt(document.querySelector("#n3").value);
    var resultado = parseInt(n3).toString(2);
    document.getElementById("resp1").innerHTML = resultado
}
function velocidade() {
    var velo = parseInt(document.querySelector("#velo").value);
    var dist = parseInt(document.querySelector("#dist").value);
    var temp = parseInt(document.querySelector("#temp").value);

    if (velo && dist != NaN) {
        resultado = dist / velo;
        document.getElementById("resp2").innerHTML = resultado.toFixed(2) + " segundos";
        console.log(temp)
        
    }  else if (velo && temp != NaN) {
        resultado = velo * temp;
        document.getElementById("resp2").innerHTML = resultado.toFixed(2) + " metros";
        console.log(resultado)

    }  else if (dist && temp != NaN) {
        resultado = dist / temp;
        document.getElementById("resp2").innerHTML = resultado.toFixed(2) + " M/s";
        console.log(resultado)
    }

    // var resultado = parseFloat(n4) / parseFloat(n5);
    // document.getElementById("resp2").innerHTML = resultado.toFixed(2) + "M/s"
}
