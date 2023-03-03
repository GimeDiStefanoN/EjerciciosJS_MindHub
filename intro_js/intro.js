                                           //Ejercitación:

//En cada ejercicio utilizar console.log() o alert() para visualizar el resultado en pantalla o en consola.

// 1.	Crear una variable llamada miNombre y guardar en ella su primer nombre.
        // const miNombre = 'Gimena ';
        // alert('Me llamo ' + miNombre)

// 2.	Crear una variable llamada miApellido y guardar en ella su apellido.
        // const miApellido = 'Di Stefano Nicolina';
        // alert('Mi apellido es ' + miApellido)

// 3.	Crear una variable llamada miEdad y guardar en ella su edad.
        // var miEdad = 34;
        // alert('Tengo ' + miEdad + ' años.')

// 4.	Crear una variable llamada miMascota y guardar en ella el nombre de su mascota.
        // var miMascota = ['Jade','Arizona'];
        // alert('Mis mascotas se llaman ' + miMascota[0] + ' y ' + miMascota[1])

// 5.	Crear una variable llamada edadMascota y guardar en ella la edad de la mascota.
        // var edadMascota = [9 , 4];
        // alert(miMascota[0] + ' tiene ' + edadMascota[0] + ' y ' + miMascota[1] + ' tiene ' + edadMascota[1])

// 6.	Visualizar todas las variables dentro de la consola del navegador escribiendo el nombre de cada una de ellas.
        // console.log('Soy ' + miNombre + ' ' + miApellido + ', tengo ' + miEdad + 'años. Tengo 2 mascotas que se llaman: ' + miMascota + '.' + miMascota[0] + ' tiene ' + edadMascota[0] + ' y ' + miMascota[1] + ' tiene ' + edadMascota[1])

// 7.	Crear una variable llamada nombreCompleto y guardar en ella la concatenación de miNombre y miApellido.
        // const nombreCompleto = miNombre + miApellido;
        // alert(nombreCompleto)
        
// 8.	Crear una variable llamada textoPresentacion y guardar en ella un texto comprendido con todas las variables creadas hasta el momento.
        // var textoPresentacion = 'Soy ' + miNombre + ' ' + miApellido + ', tengo ' + miEdad + 'años. Tengo 2 mascotas que se llaman: ' + miMascota[0] + ' y ' + miMascota[1]  + '.' + miMascota[0] + ' tiene ' + edadMascota[0] + ' y ' + miMascota[1] + ' tiene ' + edadMascota[1]
        // alert(textoPresentacion)

// 9.	Crear una variable sumaEdades, restaEdades, productoEdades, divisionEdades y calcular sus respectivas operaciones con las variables miEdad y edadMascota.
        // var sumaEdades = miEdad + edadMascota[0] + edadMascota[1];
        // alert(sumaEdades)

        // var restaEdades = miEdad - edadMascota[0] - edadMascota[1];
        // alert(restaEdades)

        // var productoEdades = miEdad * edadMascota[0] * edadMascota[1];
        // alert(productoEdades)

        // var divisionEdades = miEdad / edadMascota[0] / edadMascota[1];
        // alert(divisionEdades)


// 10.	Realizar la carga de las variables del punto 1 al 5 utilizando prompt() y luego ejecutar el código correspondiente para realizar los puntos del 6 al 9 con los datos cargados.
        // let ingreseNombre=prompt('ingrese nombre');
        // console.log(ingreseNombre);
        // let ingreseApellido=prompt('ingrese apellido');
        // console.log(ingreseApellido);
        // let ingreseEdad=prompt('ingrese edad');
        // console.log(ingreseEdad);
        // let ingreseMascota=prompt('ingrese nombre de mascota');
        // console.log(ingreseMascota);
        // let ingreseEdadMascota=prompt('ingrese edad de mascota');
        // console.log(ingreseEdadMascota);

        // console.log(ingreseNombre,ingreseApellido,ingreseEdad,ingreseMascota,ingreseEdadMascota);

        // let nombreyapellido = ingreseNombre + ' ' + ingreseApellido;
        // console.log(nombreyapellido);

        // let presentacion = 'Hola, soy ' + nombreyapellido + ', tengo ' + ingreseEdad + 'años. Mi perrita se llama ' + ingreseMascota + ' y tiene ' + ingreseEdadMascota + ' años.'
        // console.log(presentacion);

        // let sumar = parseInt(ingreseEdad) + parseInt(ingreseEdadMascota);
        // console.log(sumar);

        // let restar = parseInt(ingreseEdad) - parseInt(ingreseEdadMascota);
        // console.log(restar);

        // let multiplicar = parseInt(ingreseEdad) * parseInt(ingreseEdadMascota);
        // console.log(multiplicar);

        // let dividir = parseInt(ingreseEdad) / parseInt(ingreseEdadMascota);
        // console.log(dividir);

// 11.	Crear un objeto llamado alumno con un mínimo de 5 propiedades, mostrar dicho objeto utilizando console.table() y también mostrar cada una de las propiedades del objeto por separado.
        // var alumno ={
        //         nombre: 'Juan',
        //         apellido: 'Perez',
        //         edad: 21,
        //         ingreso: 2021,
        //         inscripto: true
        // }
        // console.table(alumno)
        // console.log(alumno.nombre)
        // console.log(alumno.apellido)
        // console.log(alumno.edad)
        // console.log(alumno.ingreso)
        // console.log(alumno.inscripto)

// 12.	Crear un objeto llamado mascota con un mínimo de 5 propiedades, mostrar dicho objeto utilizando console.table() y también mostrar cada una de las propiedades del objeto por separado.
        // var mascota = {
        //         nombre: 'Pomelo',
        //         edad: 4,
        //         color: 'marron',
        //         especie: 'perro',
        //         alimento: 'barf'
        // }
        // console.table(mascota)
        // console.log(mascota.nombre)
        // console.log(mascota.edad)
        // console.log(mascota.color)
        // console.log(mascota.especie)
        // console.log(mascota.alimento)

// 13.	Crear un array llamado frutas con un mínimo de 5 elementos y mostrar por consola el array completo y cada uno de los elementos por separado.

        // var frutas = ['banana', 'pera', 'sandia', 'melon', 'uva'];
        // console.log(frutas);
        // console.log(frutas[0]);
        // console.log(frutas[1]);
        // console.log(frutas[2]);
        // console.log(frutas[3]);
        // console.log(frutas[4]);

// 14.	Crear un array llamado números con un mínimo de 5 elementos y mostrar por consola el array completo y cada uno de los elementos por separado.
        // var numbers = [5,7,6,2,4];
        // console.log(numbers);
        // console.log(numbers[0]);
        // console.log(numbers[1]);
        // console.log(numbers[2]);
        // console.log(numbers[3]);
        // console.log(numbers[4]);

// 15.	Crear un array llamado familia con un mínimo de 5 objetos y mostrar por consola el array completo y cada uno de los elementos por separado.
        // var MiFamilia= [
        // {
        //         nombre: 'Francisco', 
        //         apellido: 'Di Stefano Nicolina', 
        //         edad: 68, 
        //         parentesco: 'padre',
        // },
        // {
        //         nombre: 'Carmen',
        //         apellido: 'Heredia',
        //         edad: 70,
        //         parentesco: 'madre',
        // },
        // {
        //         nombre: 'Magali',
        //         apellido: 'Di Stefano Nicolina',
        //         edad: 42, 
        //         parentesco: 'hermana',
        // },
        // {
        //         nombre: 'Yanina',
        //         apellido: 'Di Stefano Nicolina',
        //         edad: 38, 
        //         parentesco: 'hermana', 
        // },
        // {
        //         nombre: 'Simon',
        //         apellido: 'Di Stefano',
        //         edad: 5, 
        //         parentesco: 'sobrino', 
        // }
        // ];
        // console.log(MiFamilia);
        // console.log(MiFamilia[0]);
        // console.log(MiFamilia[1]);
        // console.log(MiFamilia[2]);
        // console.log(MiFamilia[3]);
        // console.log(MiFamilia[4]);


// 16.	Crear una variable llamada textoAleatorio formando una frase con el segundo elemento del array del punto 13, el cuarto elemento del punto 14 y el quinto objeto del array del punto 15.
        // var textoAleatorio = 'De ' + frutas[1] + ' quedan ' + numbers[3] + ' unidades. Y le gusta comer a ' + MiFamilia[4].nombre
        // console.log(textoAleatorio);

// 17.	Utilizar prompt() para leer por pantalla mi edad y la edad de un compañero y mostrar por consola los resultados de comparar los valores y guardarlos en variables llamadas por ejemplo: edadesIguales, soyMayor, soyMenor, etc. Y mostrar mensajes en consola como los siguientes:
        // let edadMia=prompt('ingresa tu edad');
        // console.log(edadMia);
        // let edadCompa=prompt('ingresa edad de tu compa');
        // console.log(edadCompa);

// a.	Mi edad es igual a la de mi compañero: false
        // let edadesIguales = edadMia == edadCompa;
        // console.log(edadesIguales);

// b.	Mi edad es mayor a la de mi compañero: true
        // let soyMayor = edadMia > edadCompa;
        // console.log(soyMayor);

// c.	Mi edad es menor a la de mi compañero: false
        // let soyMenor = edadMia < edadCompa;
        // console.log(soyMenor);

// 18.	Compare su edad ingresada por pantalla con prompt() con el numero 18 y guardarlo en una variable llamada soyMayorDeEdad y mostrar por consola un mensaje que diga: Soy mayor de edad y el valor de la variable.
        // let soyMayorDeEdad = edadMia >= 18;
        // switch (soyMayorDeEdad){
        //         case true:
        //         console.log('Soy mayor de edad, y tengo ' + edadMia + ' años.')
        //         break;
        //         case false:
        //         console.log('Soy menor')
        //         break;
        // }

// 19.	Introducir por pantalla la edad y la altura de una persona y guardarlas en variables separadas y en una variable llamada puedeSubir el resultado de la operación resultante de si la persona es mayor de 6 años y además tiene una altura mínima de 120cm y mostrar por consola un mensaje como el siguiente: Puede subir a la atracción y el valor de la variable resultante.
        // let edadPersona = prompt('ingresa edad');
        // console.log(edadPersona);
        // let alturaPersona = prompt('ingresa altura');
        // console.log(alturaPersona);

        // var puedeSubir = parseInt(edadPersona) > 6 && parseInt(alturaPersona) >= 120;
        // switch (puedeSubir){
        //         case true:
        //         console.log('Puede subir a la atracción, porque tiene ' + edadPersona + ' años y ademas tiene ' + alturaPersona + ' cm. de altura.')
        //         break;
        //         case false:
        //         console.log('No puede subir. Se queda abajo.')
        //         break;
        // }

// 20.	Introducir por pantalla el pase de una persona el cual puede ser “VIP”, “NORMAL” o “LIMITADO”, el saldo que dispone y guardarlos en variables separadas. En una variable llamada puedePasar guardar el resultado de la operación resultante de si la persona tiene pase “VIP” o si posee un saldo mayor a 1000. Mostrando un mensaje que diga: La persona puede pasar y el resultado de la variable.

        // let tipodePase = prompt('ingrese si es VIP, NORMAL, LIMITADO')
        // console.log(tipodePase);
        // let saldo = prompt('ingrese saldo');
        // console.log(saldo);

        // var puedePasar = tipodePase === 'VIP' || parseInt(saldo) > 1000;
        // switch (puedePasar){
        //         case true:
        //             console.log('La persona puede pasar. Tiene pase ' + tipodePase + ' y un saldo de $' + saldo)
        //             break;
        //         case false:
        //             console.log('Se queda afuera')
        //             break;
        //     }