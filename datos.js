// EJERCICIOS N° 1 - VARIABLES
let miNombre= 'Gimena';
let miApellido= 'Di Stefano Nicolina';
let miEdad= 34;
let miCiudad= 'Córdoba';
let misHijos= 0;
let miMascotas= ['Jade', 'Arizona'];
let Jade = {
    especie: 'canino',
    sexo: 'hembra',
    edad: 9,
    raza: 'Beagle',
    color: 'Tricolor',
    alimentacion: 'comida BARF',
    hobby: 'comer'
}
let Arizona = {
    especie: 'felino',
    sexo: 'hembra',
    edad: 4,
    raza: 'Mestizo',
    color: 'Atigrado',
    alimentacion: 'comida BARF',
    hobby: 'Dormir en la cama'
}

// console.log(miMascotas[0])

// EJERCICIOS N° 2 - CONDICIONALES

if(misHijos === 0){
    console.log('No tengo hijos') 
}
if(miEdad > 18){
    console.log('Soy Mayor de Edad')
}else{
    console.log('Soy menor')
}
let miMascotitas= 'Jade';
switch (miMascotitas){
    case 'Jade':
        console.log('Es mi perrita Beagle')
        break;
    case 'Arizona':
        console.log('Es mi gatita Atigrada')
        break;
}