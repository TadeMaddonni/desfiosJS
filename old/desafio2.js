
let numero = Number(prompt("Ingrese un numero"))

if (isNaN(numero) || numero == ""){
    if(numero==0){
        alert("El numero ingresado es 0 por lo que no va a funcionar el programa")
    }else{
        alert("El dato ingresado no es un numero")
        numero=Number(prompt("Por favor ingrese un numero"))
    }
} 


while(numero != 0 || numero2 != 0){
    let numero2 = Number(prompt("ingrese otro numero"));
    if (isNaN(numero2) || numero2 == ""){
        if(numero2==0){
            alert("El numero ingresado es 0 por lo que no va a funcionar el programa");
            break;
        }else{
            alert("El dato ingresado no es un numero")
            numero2=Number(prompt("Por favor ingrese un numero"))
        }
    } 
    resultado =  numero + numero2;
    console.log(`El resultado de la suma entre ${numero} y ${numero2} es ${resultado}`);
    numero = Number(prompt("ingrese un nuevo numero"));
    if (isNaN(numero) || numero == ""){
        if(numero==0){
            alert("El numero ingresado es 0 por lo que no va a funcionar el programa");
            console.log("El usuario finalizó el algoritmo")
            break;
        }else{
            alert("El dato ingresado no es un numero")
            numero=Number(prompt("Por favor ingrese un numero"))
        }
    } 
}