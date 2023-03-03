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

let selecciones = ['Argentina', 'Francia', 'Croacia', 'Marruecos', 'Inglaterra','Portugal', 'Paises Bajos', 'Brasil', 'EEUU', 'Ghana', 'Australia', 'Polonia', 'Japon', 'España', 'Corea del Sur', 'Suiza'];

console.warn('pop');
console.warn('push');
console.warn('shift');
console.warn('unshift');
console.warn('indexOf');
console.warn('includes');
console.warn('toString');
console.warn('join');
console.warn('concat');