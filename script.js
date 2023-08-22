
const calcular = document.getElementById("calcular");


function imc (){

const nome = document.getElementById("nome").value;
const altura = document.getElementById("altura").value;
const peso = document.getElementById("peso").value;
const resultado = document.getElementById("resultado");

if(nome.value !==`` && altura !== `` && peso !== ``){

   
    const valorIMC = (peso / (altura * altura)).toFixed(2);
let classificação = ``;

if(valorIMC < 18.5){
    classificação = "abaixo do peso."

}else if(valorIMC < 25) {
classificação = `com peso ideal. parabéns!!!`;


}else if(valorIMC < 30){
 
classificação = `levemente acima ddo peso.`;
}else if(valorIMC < 35){
classificação = `´com obesidade grau 1.`;


}else if(valorIMC < 40){
classificação = `com obesidade grau 2.`;

}else{
classificação = `obesidade grau 3. cuidado!!`;

}


    resultado.textContent = `${nome} seu IMC é ${valorIMC} e vocé está ${classificação}`; 
     
}else{
resultado.textContent = "preencha todos os campos"

}


}



calcular.addEventListener("click",imc)