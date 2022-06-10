
let numero = Number(prompt("Ingrese un numero"))

if (isNaN(numero) || numero == ""){
    alert("El dato ingresado no es un numero")
    numero=Number(prompt("Por favor ingrese un numero"))
} 

while(numero != 0){
    let numero2 = Number(prompt("ingrese otro numero"));
    resultado =  numero + numero2;
    console.log(`El resultado de la suma entre ${numero} y ${numero2} es ${resultado}`);
    numero = Number(prompt("ingrese otro numero"));
    if (isNaN(numero) || numero == ""){
        alert("El dato ingresado no es un numero")
        numero=Number(prompt("Por favor ingrese un numero"))
    } 
}