/*
console.log("Prueba Javascript");

let mensaje = 1+1;  


console.log(mensaje); //muestra mensaje

const IVA = 21;

let precio = parseInt("ingresa texto y convierte a Entero");

let numeroA = parseInt(prompt("Ingrese su primer número:"));
let numeroB = parseInt(prompt("Ingrese el segundo número:"));
let resultado = parseInt(numeroA + numeroB);
//console.log("El resultado de la suma es:" + resultado); Muestra el mensaje por consola


while(confirm("Quiere ver el resultado?")==true){
    console.log("El resultado de la suma es:" + resultado); //Muestra el mensaje por consola
    console.log(`El resultado de la suma de ${numeroA} + ${numeroB} = ${resultado}.`); //Muestra texto con variables
}


//confirm("Desea salir?"); //booleano

if(confirm("Desea salir?")==true){

    document.writeln("El resultado de la suma es:" + resultado); //muestra el resultado en la pagina

} else{

    alert("El resultado de la suma es:" + resultado); //muestra ventana como mensaje

}



//Validacion si no es un número


let valida=true;

let edad = prompt("Ingrese su edad");

while((isNaN(edad))){

    edad=parseInt(prompt(`Error usted debe ingresar un número, usted ingreso ${edad}`));

}

 alert(`Usted tiene ${edad}`);


//-------------------------------------------------

  let edad = prompt("Ingrese su edad");

    if(isNaN(edad)){  //Pregunta si no es un numero devuelve booleano

        alert(`Error usted debe ingresar un número, usted ingreso ${edad}`);

    } else{

        alert(`Usted tiene ${edad}`);
        valida =false;
    }



 

 //Listas Arrays

 let productos = ["laptop", "tv", "celular"];  //Se cuentan a partir del elemento 0

 console.log(productos);

 productos.push("teclado"); //Agrega productos a la lista

 productos.pop("")  //Si esta vació elimina el último elemento, sino pongo el elemento a eliminar

 console.log(productos.length) // Muestra cantidad de elementos de la lista

 for(let i=0; i < productos.length; i++)  //Recorre la lista
 {
    console.log(productos[i]);
 }

 */

 // Objetos que es igual a diccionario

 let productos=[
    { nombre:'laptop', descuento: true, precio: 6000},
    { nombre:'tv', descuento: false, precio: 3000},
    { nombre:'celular', descuento: true, precio: 5000}
 ];

 for (let i=0; i < productos.length; i++) {

    let producto = productos[i];

    if(producto.descuento == true){

        console.log(`Nombre: ${producto.nombre} Precio: ${producto.precio} Tiene Descuento Aplicado`)

    }

    if (!producto.descuento){  // ! Cambia el valor booleano

         console.log(`Nombre: ${producto.nombre} Precio: ${producto.precio} No Tiene Descuento Aplicado`)

    }


 }