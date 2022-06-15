
let product = "";
let price = 0;
let priceConIva = 0;
let agregarMas  = true;
let finalPrice = 0;

const suma = (a,b) => {return a + b}; // función de suma
const resta = (a,b) => {return a - b}; //función de resta

const iva = (x) => {return x * 0.21}; // cálculo del IVA
const descuento = (a, b) => {return a * b /100}; // Calculo del descuento
let descuentoFinal = 0

    do {
        product = prompt("Ingresa el producto a agregar en la lista"); 
        price = Number(prompt("Ingrese el precio inicial del producto"));

        if(product == "" || isNaN(price)){ //Validación de productos y precios validos
            alert("error alguno de los datos ingresados son incorrectos");
            let otroIntento = prompt("¿Desea volver a intentar? si/no "); //Confirmación antes de finalzar
            if (otroIntento == si){
                product = prompt("Ingresa el producto a agregar en la lista");
                price = Number(prompt("Ingrese el precio inicial del producto"));
            } else{
                alert("Programa finalzado");
            }
        }

        priceConIva = suma(price, iva(price)) //Cálculo del IVA

        let agregarDescuento = prompt("Desea agregarle un descuento al producto? si/no").toLowerCase();
            console.log(agregarDescuento);

        if(agregarDescuento == "si" ){
            agregarDescuento=true;
        }else{
                agregarDescuento=false;
            }
        
        if(agregarDescuento==true){ 
            let porcentajeDescuento = Number(prompt("Ingrese el porcentaje de descuetno que desea agregar, del 1 al 100"));
            descuentoFinal =  descuento (price, porcentajeDescuento); // Cálculo para agregar descuento
        }


        finalPrice = resta(priceConIva, descuentoFinal); // Calculo del precio final


        //Armando lista detallada en consola
        console.log(`El producto es ${product}`);
        console.log(`El precio del producto es $${price}`);
        console.log (`El precio con IVA es $${priceConIva}`);
        console.log(`El descuento del producto es $${descuentoFinal}`)
        console.log(`El precio final del producto es $${finalPrice} `);



        //Imprimiendo el producto y el precio del mismo en la página
        document.write(`${product} ha sido agregado a la lista con el precio de ${finalPrice} <br>`);

        agregarMas=confirm("¿Desea agregar mas productos?"); // Confirmación para continuar la compra

        if (agregarMas==false){
            alert(`Hasta aqui llego la carga de stock`);
            console.log(`------Hasta aqui llegó la carga de stock------`);
        }
    } while (agregarMas);
