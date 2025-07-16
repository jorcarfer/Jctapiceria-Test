//funciones simples

function saludar(){
    console.log("Hola Mundo")
}

saludar() //llama a la funcion

//funciones con parametros
function saludar(nombre){
    console.log(`Hola ${nombre} `);
}

saludar("Jorge");


function suma(a,b){

    console.log(a+b);

}

suma (5,10);

//funcion Arrow o Flecha

const sumar=(a,b) => console.log(a+b);

sumar(2,9)

//Funciones con retorno

function AreaRectangulo(base, altura){

    return base*altura; 

}


let base= parseFloat(prompt("Ingrese la base: "));
let altura= parseFloat(prompt("Ingrese la altura: "));

let area= AreaRectangulo(base,altura);

alert(area);

