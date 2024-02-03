

let secretNumber = 0
let attempts = 0;
let drawnNumbersList = [];
let maximunNumber = 10;
console.log(secretNumber);
function textElementassignment(element,text){
    let htmlElement = document.querySelector(element);
    htmlElement.innerHTML = text;
    return;
}



function verifyAttempt(){
    let userNumber = parseInt(document.getElementById("userValue").value);

    console.log(attempts);
     // triple igual significa que la comparativa debe ser entre valor y tipo de dato. //
    if(secretNumber === userNumber){
        textElementassignment("p", `You got the number right! you have tried ${attempts} ${(attempts === 1) ? "time":"times"}`);
       document.getElementById("reiniciar").removeAttribute("disabled");
    }else {
    // el usuario no acertó
        if(userNumber > secretNumber){
            textElementassignment("p", "The secret number is smaller");

        }else{
            textElementassignment("p","The secret number is bigger")
        }
        attempts++;
        clearBox();
    };
   
    return;
};
function clearBox(){
  document.querySelector("#userValue").value = "";
   

}
function initialConditions(){
    textElementassignment("h1","Secret Number Game");
    textElementassignment("p",`Please type a number between 1 and ${maximunNumber}`);
    secretNumber = secretNumberGenerate();
    attempts = 1;
}



function secretNumberGenerate(){
let generatedNumber =  Math.floor(Math.random()*maximunNumber)+1;
console.log(generatedNumber);
console.log(drawnNumbersList);
// Si el número generado está incluido en la lista.
if(drawnNumbersList.includes(generatedNumber)){
return secretNumberGenerate();
} else{
    drawnNumbersList.push(generatedNumber);
    return generatedNumber;
}
}
function reloadGame(){
    //limpiar caja
    clearBox();
    //Indicar mensaje de intervalo de números
    initialConditions();
    //Generar el número aleatorio
    //Inicializar el número de intentos
    //Deshabilitar el botón de nuevo juego
    
   
}
initialConditions();
