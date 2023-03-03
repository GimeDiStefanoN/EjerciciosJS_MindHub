                                            // OBJETOS
let mascotas = {
    nombreMascota: 'Jade',
    nacimiento: '26/12/2013',
    especie: 'canino',
    raza: 'Beagle',
    alimento: 'barf',
    vacunas: true,
    kilos: 12,
    tutor: 'Gimena Di Stefano',
    castracion: true,
    temperamento: 'docil'
}

    // OPERACIONES CON OBJETOS

console.warn('modificar'); // modifica una propiedad del objeto que le pasemos
    mascotas.alimento = 'royal canin';
    console.log(mascotas);

console.warn('agregar'); // agrega una propiedad al objeto que le pasemos
    mascotas.cirugiasExtra = false;
    console.log(mascotas);

console.warn('eliminar');  // elimina una propiedad al objeto que le pasemos
    delete mascotas.kilos
    console.log(mascotas);

    // METODOS

console.warn('NewObjet'); // crea un nuevo objeto tal como lo definamos
    let tutores = new Object(
        {
            nombre: '',
            apellido:'',
            dni: '',
            telefono: '',
        }
    );
    console.log(tutores);

    //le voy asignar valores al nuevo objeto
    tutores.nombre = 'Gimena';
    tutores.apellido = 'Di Stefano';
    tutores.dni = '33751772';
    tutores.telefono = '3513172081';
    console.log(tutores);
console.warn('Keys');  // muestra las claves del objeto que le pasemos
    console.log(Object.keys(mascotas));

console.warn('Assign'); // crea un array combinando los objetos que le pasemos
    const paciente = Object.assign(mascotas, tutores);
    console.log(paciente);

console.warn('Entries'); // devuelve un array que dentro tiene tantos array como (clave, valor) tenga el objeto que le pasemos
    console.log(Object.entries(mascotas));

console.warn('Values'); // muestra los valores del objeto que le pasemos
    console.log(Object.values(mascotas));

                                            // ARRAY

let seleccionesClasificadas = ['Argentina', 'Francia', 'Croacia', 'Marruecos', 'Inglaterra','Portugal', 'Paises Bajos', 'Brasil', 'EEUU', 'Ghana', 'Australia', 'Polonia', 'Japon', 'España', 'Corea del Sur', 'Suiza'];
    console.log(seleccionesClasificadas);

console.warn('pop');  //elimina el ultimo elemento del array
    seleccionesClasificadas.pop();
    console.log(seleccionesClasificadas);

console.warn('push'); //añade elementos al final del array
    seleccionesClasificadas.push('Suiza','Italia');
    console.log(seleccionesClasificadas);
console.warn('shift'); //elimina el primer elemento del array
    seleccionesClasificadas.shift();
    console.log(seleccionesClasificadas);

console.warn('unshift'); //añade elementos al inicio del array
        seleccionesClasificadas.unshift('Argentina', 'Chile');
        console.log(seleccionesClasificadas);

console.warn('indexOf');  // el primer índice en el que se puede encontrar un elemento dado en el array, ó retorna -1 si el elemento no esta presente.
    console.log(seleccionesClasificadas.indexOf('Portugal'));
    console.log(seleccionesClasificadas.indexOf('Canada'));

console.warn('includes'); //Devuelve un booleano dependiendo si el elemento que le pasemos está o no en el array
    console.log(seleccionesClasificadas.includes('Bolivia'));
    console.log(seleccionesClasificadas.includes('Brasil'));

console.warn('toString'); //muestra una cadena de caracteres con los elementos del array que le pasamos separados por una coma
    console.log(seleccionesClasificadas.toString());

console.warn('join'); //muestra una cadena de caracteres con los elementos del array que le pasamos separados por el "separador" que le pasemos.
console.log(seleccionesClasificadas.join('-'));
console.log(seleccionesClasificadas.join('&'));
console.log(seleccionesClasificadas.join('   '));
console.warn('concat');  //muestra un nuevo array  donde une los 2 array informados
    // let seleccionesEliminadas = ['Qatar', 'Canadá','Ecuador', 'Irán', 'Gales', 'Dinamarca', 'Túnez', 'México', 'Arabia Saudita', 'Bélgica', 'Alemania', 'Costa Rica', 'Uruguay', 'Ghana', 'Serbia', 'Camerún']; 
    // let mundialQatar = seleccionesClasificadas.concat(seleccionesEliminadas);
    // console.log(mundialQatar);