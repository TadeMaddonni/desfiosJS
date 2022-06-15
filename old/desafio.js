//Ciclo con "for", anotación de alumnos

/* let cantidad =parseInt(prompt("Ingrese el numero de alumnos"));

for(let i=1; i<=cantidad; i++){
    let nombre = prompt("ingrese el nombre del alumno");
    alert(`El alumno N° ${i} es ${nombre}`);
    console.log(`El alumno N° ${i} es ${nombre}`)

}
 */

//Ciclo Do..while

let productos="";
let cantidad=0;
let precioInicial=0;
let PrecioFInalManteca=0;
let PrecioFInalCrema=0;
let PrecioFInalTe=0;
let PrecioFInalLeche=0;
let precioFinal=0;
let continuarCompra=false;

do {
    producto = prompt(`
    Aclare cual de los siguientes productos desea comprar:
    .Manteca
    .Crema
    .Leche
    .Té
    `).toLowerCase();

    switch (producto) {
        case "manteca":
            cantidad = Number(prompt("Cuantas mantecas queres comprar"));
            precio= 200;
            PrecioFInalManteca=precio*cantidad;
            break;
        
        case "crema":
            cantidad=Number(prompt("Cuantas cremas desea llevar"));
            precio= 250;
            PrecioFInalCrema= precio * cantidad;
            break;

        case "leche":
            cantidad=Number(prompt("Cuantas leches desea llevar"));
            precio= 190;
            PrecioFInalLeche= precio * cantidad;
            break;

        case "te":
            cantidad=Number(prompt("Cuantos te desea llevar"));
            precio= 120;
            PrecioFInalTe= precio * cantidad;
            break;

        default:
            alert("Alguno de los datos ingresados son incorrectos");
            precio=0;
            cantidad=0
            break;
    }

    precioFinal += PrecioFInalCrema + PrecioFInalLeche + PrecioFInalManteca + PrecioFInalTe;
    continuarCompra=confirm(`
    Seguir comprando:
    Gastado hasta el momento: $${precioFinal}`)
    PrecioFInalCrema=0;
    PrecioFInalLeche=0;
    PrecioFInalManteca=0;
    PrecioFInalTe=0;


} while (continuarCompra);

alert(`El precio final de la compra es de  $${precioFinal}`);
console.log(`Sumar a cuaderno de ventas la cantidad de $${precioFinal}`);

