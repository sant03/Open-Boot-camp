
//Usando un if, crear una condición que compare si la variable numeroIf es positivo, negativo, o 0.

let numeroIf = -10;
if(Math.sign(numeroIf) == 1){
    console.log(`El numero ${numeroIf} es positivo`)
}
else if(numeroIf == 0){
    console.log(`El numero es igual a 0`)
}else{
    console.log(`El numero ${numeroIf} es negativo`)
}

/*Crea un bucle While, este bucle tendrá que tener como condición que 
la variable numeroWhile sea inferior a 3, el bloque de código que tendrá el bucle deberá:
Incrementar el valor de la variable en uno cada vez que se ejecute.
Mostrarlo por pantalla cada vez que se ejecute.*/

let numeroWhile = 0;

while (numeroWhile < 3){
    numeroWhile = numeroWhile + 1;
    console.log(numeroWhile);
}

//Para el bucle Do While, deberás crear la misma estructura que en el While, pero solo se debe ejecutar una vez.

let numeroDoWhile = 5

do{
    console.log(numeroDoWhile)
    numeroDoWhile = numeroDoWhile + 1;
} while (numeroDoWhile < 3)

/*Para el bucle For, crea una variable numeroFor, esta variable tendrá como valor 0 y su condición 
será que la variable sea igual o menor que 3, se irá incrementando en 1 su valor cada vez que se 
ejecute y deberá mostrarse por pantalla.*/

let numeroFor = 0;
for(; numeroFor <=3; numeroFor = numeroFor + 1){
    console.log(numeroFor)
}

/*Por último, para el Switch, deberás crear la variable estacion, y distintos case para las cuatro 
estaciones del año. Dependiendo del valor de la variable estacion se deberá mandar un mensaje por consola 
informando de la estación en la que está. 
También habrá que poner un default para cuando el valor de la variable no sea una estación.*/

let estacion = "Otoño";

switch(estacion){
    case "Invierno" :
        console.log(`Es ${estacion}, no olvides llevar tu paraguas`);
    break;
    case "Verano" :
        console.log(`Es ${estacion}, hoy es un buen dia para ir a la playa!`)
    break;
    case "Otoño" :
        console.log(`Es ${estacion}, el equinocio a empezado`)
    break;
    case "Primavera" : 
        console.log(`Es ${estacion}, no olvides armar un ramo de flores para tu amor`)
    break;
    default :
        console.log(`${estacion} NO RECONOSCO ESTA ESTACION`)
}