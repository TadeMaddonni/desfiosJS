
/* let longitud =parseInt( prompt("ingrese cuan larga desea la tabla"));
let multi = parseInt( prompt("ingrese el multiplicador"));


for(let i = 1; i <= longitud; i++){
    console.log(`${multi} x ${i} = ${multi * i}`); 
}
 

/* 
for(let i = 0; i<5; i++){
    console.log(i);
} */

//Sentencia Break

/* for(let i = 1; i<10; i++){
    if(i==5){
        break
    }
    console.log(i);
} */


//Practica 
/* let entrada = prompt("Ingrese una palabra");

while(entrada != "ESC" && entrada != "esc" && entrada != "Esc"){
    alert(`El usuario ingreso: ${entrada}`);
    entrada=prompt("Ingrese otra palabra");
}

if(entrada=="Esc" || entrada=="ESC" || entrada== "esc"){
    alert(`El mensaje ingresado es ${entrada}
    Hasta aqui llegaron las preguntas!`)
} */

/* let entrada = prompt("Ingresar un nombre:").toUpperCase();

while (entrada != "ESC") {
    switch (entrada) {
        case "ANA":
            alert("Hola Ana");
            entrada = "ESC"
            break;
        case "JUAN":
            alert("Hola Juan");
            entrada = "ESC"
            break;
        default:
            alert("¿Quién sos?");
            break;
    }
    if ( entrada == "ESC") {
        break;
    }
    entrada = prompt("Ingrese un nombre").toUpperCase();
}

 */

//Simulador de compra
/* 
let producto = "";

let precio = 0;

let cantidad = 0;

let precioTotal = 0;

let seguirCompra=false;

do {
    producto=prompt("queres comprar shampoo, acondicionador o ambos?");
    cantidad=Number(prompt("Cuantos queres comprar?"))

    switch (producto) {
        case "shampoo":
            precio = 500;
            break;
        
        case "acondicionador":
            precio =700;
            break;

        case "ambos":
            precio=1100;
            break;

        default:
            alert("Alguno de los datos ingresados no son correctos");
            precio=0;
            cantidad=0;
            break;
    }

    precioTotal += precio * cantidad

    seguirCompra = confirm("¿queres seguir comprando?")
} while (seguirCompra);


alert(`El valor de la compra es ${precioTotal}`); */