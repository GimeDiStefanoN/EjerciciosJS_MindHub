                           //Ejercitación:                           

// 1.	Realizar un programa que dado 2 números imprima por consola si el primer numero es mayor que el segundo.
        // let num1 = prompt('Ingresá el 1er numero');
        // let num2 = prompt('Ingresá el 2do numero');

        // if(parseInt(num1)>parseInt(num2)){
        //     console.log( 'El primer número es mayor, es ' + num1)
        // }else{
        //     alert('Es mayor el segundo numero ingresado')
        // }
// 2.	Realizar un programa que dado 2 números imprima por consola si los numeros son iguales o si son diferentes.
        // let num3 = prompt('Ingresá un numero');
        // let num4 = prompt('Ingresá el 2do numero');

        // if(parseInt(num3)>parseInt(num4)){
        //     console.log( 'Son iguales')
        // }else{
        //     console.log('Son distintos')
        // }
// 3.	Realizar un programa que dado 2 números imprima por consola cual de los 2 numeros es el mas grande o si son iguales.
        // let num5 = prompt('Ingresá un numero');
        // let num6 = prompt('Ingresá el 2do numero');

        // if(parseInt(num5) > parseInt(num6)){
        //     console.log( 'El primer n° es mas grande')
        // }else if(parseInt(num5) < parseInt(num6)){
        //     console.log('El segundo n° es mas grande')
        // }else{
        //     console.log( 'Son iguales')
        // }
// 4.	Realizar un programa que dado 3 números imprima por pantalla cual de los 3 es el mas chico.
        // let n1 = prompt('Ingresá un numero');
        // let n2 = prompt('Ingresá un numero');
        // let n3 = prompt('Ingresá un numero');

        // if ( parseInt(n1) < parseInt(n2) && parseInt(n1) < parseInt(n3) ){
        //     console.log('el primer número es menor, y es ' + n1)
        // } else if (parseInt(n2) < parseInt(n1) && parseInt(n2) < parseInt(n3) ){
        //     console.log('el segundo número es menor, y es ' + n2)
        // } else if(parseInt(n3) < parseInt(n1) && parseInt(n3) < parseInt(n2) ){
        //     console.log('el tercer número es menor, y es ' + n3)
        // } else{
        //     console.log('Son iguales')
        // }
// 5.	Realizar un programa que dado 2 objetos representando personas con las propiedades nombre, edad y altura imprima por pantalla cual de las 2 personas es la mas alta y cual es la de mayor edad.
        // let pers1 = {
        //     nombre: 'Gimena',
        //     edad: 34,
        //     altura: 166
        // }
        // let pers2 = {
        //     nombre: 'Romina',
        //     edad: 35,
        //     altura: 135
        // }
        // if (pers1.altura < pers2.altura){
        //     console.log(pers2.nombre + ' es mas alta')
        // } else if(pers1.altura > pers2.altura){
        //     console.log(pers1.nombre + ' es mas alta')
        // } else{
        //     console.log(pers1.nombre  + ' y '+ pers2.nombre + ' tienen la misma altura')
        // }

        // if (pers1.edad < pers2.edad){
        //     console.log(pers2.nombre + ' es mas grande de edad')
        // } else if(pers1.edad > pers2.edad){
        //     console.log(pers1.nombre + ' es mas grande de edad')
        // } else{
        //     console.log(pers1.nombre  + ' y '+ pers2.nombre + ' tienen la misma edad edad')
        // }

// 6.	Realizar un programa que permita ingresar por pantalla tu nombre, edad, altura, visión y permita determinar si estas capacitado para conducir. La persona deberá cumplir con una edad mínima de 18 años, medir mas de 150cm y tener una visión de 8 de 10 como mínimo.
        // let conductor = {  //aca defino el objeto conductor e inicializo las variables vacias.
        //     nombre: null,
        //     edad: null,
        //     altura: null,
        //     vision: null
        // }
        // console.table(conductor)

        // let ingresaNombre = prompt('Ingresa tu nombre')  //aca creo la accion para que el usuario interactue ingresando sus datos
        // let ingresaEdad = prompt('Ingresa tu edad')
        // let ingresaAltura = prompt('Ingresa tu altura sin decimales')
        // let ingresaVision = prompt('Ingresa tu nivel de vision del 0 al 10')
        // console.log(ingresaNombre)
        // console.log(ingresaEdad)
        // console.log(ingresaAltura)
        // console.log(ingresaVision)

        // conductor.nombre = ingresaNombre; //aca asigno los valores ingresados al objeto creado previamente
        // conductor.edad = ingresaEdad;
        // conductor.altura = ingresaAltura;
        // conductor.vision = ingresaVision;
        // console.table(conductor)

        // if(conductor.edad > 18 && conductor.altura > 150 && conductor.vision >= 8){
        //     console.log('Puede conducir')
        // }else{
        //     console.log('No puede conducir')
        // }

// 7.	Realizar un programa que permita el ingreso de los siguientes datos: Nombre, pase (vip o normal), si posee entrada (si o no, s o n, true o false). Las personas que posean tu mismo nombre tienen ingreso libre así como también los que posean un pase vip, mostrar un mensaje de bienvenida. Si posee entrada preguntar si desea utilizarla, en caso afirmativo mostrar mismo mensaje de bienvenida. Y por ultimo de no tener el mismo nombre o poseer un pase vip o entrada, preguntar si desea comprar, caso afirmativo solicitar dinero disponible, si posee $1000 o mas, mostrar mensaje de venta de entrada y bienvenida, caso contrario mostrar mensaje de rechazo de venta, y en caso contrario a no querer comprar, mostrar mensaje de despedida.
        // let invitado = {  //aca defino el objeto invitado e inicializo las variables vacias.
        //         nombre: null,
        //         pase: null,
        //         entrada: null
        //     };
        //     console.table(invitado)
        // let nombreInvitado = prompt('ingresa tu nombre').toUpperCase();
        // console.log(nombreInvitado);
        // let tienePase = prompt('¿que pase tenés? VIP o normal');
        // console.log(tienePase);


        // invitado.nombre = nombreInvitado;
        // invitado.pase = tienePase;


        // if ( invitado.nombre === 'GIMENA' || invitado.pase =='VIP'){
        //     alert(`Bienvenid@ ${invitado.nombre}`)
        // } else {
        //         let compra = confirm('¿Queres comprar? OK si es si, CANCEL si es NO');
        //         if (compra == true){
        //                 let dinero = prompt('¿cuanto dinero tenés?');
        //                 if (dinero >= 1000){
        //                         alert(`Compra realizada. Bienvenid@ ${invitado.nombre}`)
        //                 }else{
        //                         alert(`Compra rechazada`)
        //                 }
        //         } else {
        //                 alert('Que lastima, adios!')
        //         }
        // };
        // let tieneEntrada = confirm('¿Tenes entrada? pone OK, sino CANCEL');
        // console.log(tieneEntrada);
        // invitado.entrada = tieneEntrada;
        // console.table(invitado)

        // if (invitado.entrada == true){
        //         let usar = confirm('¿Queres usarla? OK si es si, CANCEL si es NO');
        //         if (usar == true){
        //                 alert(`Mas que Bienvenid@ ${invitado.nombre}`)
        //         }else{
        //                 alert('Un gusto, nos vemos!')
        //         }
        // } else{
        //     let compra = confirm('¿Queres comprar? OK si es si, CANCEL si es NO');    
        //         if (compra == true){
        //                 let dinero = prompt('¿cuanto dinero tenés?');
        //                 if (dinero >= 1000){
        //                         alert(`Compra realizada. Bienvenid@ ${invitado.nombre}`)
        //                 }else{
        //                         alert(`Compra rechazada`)
        //                 }
        //         } else {
        //                 alert('Que lastima, adios!')
        // }
        // }
// 8.	Realizar un juego de adivinanza estableciendo un valor entre 1 y 10 en una variable llamada numeroIncognita y que permita en 3 intentos adivinar el numero. El usuario deberá ingresar un numero del 1 al 10 por pantalla en 3 intentos el cual se deberá guardar en una variable llamada numeroIngresado, y en cada intento deberás mostrarle un mensaje al usuario diciendo: “el numero ingresado es mayor, vuelve a intentarlo” o “el numero ingresado es menor, vuelve a intentarlo” o en caso de adivinar, un mensaje que diga: “Ganaste, haz adivinado el numero.” No te preocupes si usas mucho código repetido, mas adelante veraz como realizar este juego de manera mas eficiente.

        // let numeroIncognita = 9; //establezco el numero para adivinar
        // console.log(numeroIncognita);

        // let numeroIngresado= [null, null, null] //creo un array donde iran todas las opciones
        // console.table(numeroIngresado)

        //        //creo las acciones para interactuar
        // let intento1 = prompt('Intento 1: ingresá un número entre 1 y 10');
        // console.log(intento1);
        // //condiciones del juego
        // if(intento1 < 9){
        //         alert('el numero ingresado es menor, vuelve a intentarlo');
        // } else if (intento1 > 9){
        //     alert('el numero ingresado es mayor, vuelve a intentarlo');
        // }else{
        //         alert(`Ganaste, haz adivinado el numero. Era ${numeroIncognita}`)
        // }

        // let intento2 = prompt('Intento 2 ingresá un número entre 1 y 10');
        // console.log(intento2);
        // if(intento2 < 9){
        //         alert('el numero ingresado es menor, vuelve a intentarlo');
        // } else if (intento2 > 9){
        //     alert('el numero ingresado es mayor, vuelve a intentarlo');
        // }else{
        //         alert(`Ganaste, haz adivinado el numero. Era ${numeroIncognita}`)
        // }
        // let intento3 = prompt('Intento 3: ingresá un número entre 1 y 10');
        // console.log(intento3);
        // if(intento3 < 9){
        //         alert('el numero ingresado es menor, vuelve a intentarlo');
        // } else if (intento3 > 9){
        //     alert('el numero ingresado es mayor, vuelve a intentarlo');
        // }else{
        //         alert(`Ganaste, haz adivinado el numero. Era ${numeroIncognita}`)
        // }
        //  //asigno los valores ingresados al array
        // numeroIngresado[0] = intento1;
        // numeroIngresado[1] = intento2;
        // numeroIngresado[2] = intento3;
        // console.table(numeroIngresado)

// 9.	Crear un programa que permita ingresar tu edad y decir si eres un infante (0 a 12 años), adolescente(13 a 18 años), un mayor joven (19 a 45 años) o un anciano (mas de 45 años), y en caso de ingresar una edad mayor a 100 mostrar un mensaje preguntando si en realidad tiene esa edad.
        // let tuEdad = prompt('¿Cual es tu edad?');
        // if( tuEdad <= 12){
        //         console.log(`Sos un infante, porque tenés ${tuEdad}`);
        // }else if(tuEdad >= 13 && tuEdad <= 18){
        //         console.log(`Sos un adolescente, porque tenés ${tuEdad}`);
        // }else if(tuEdad >= 19 && tuEdad <= 45){
        //         console.log(`Sos un mayor joven, porque tenés ${tuEdad}`);
        // }else if(tuEdad > 45 && tuEdad <= 100){
        //         console.log(`Sos un anciano, porque tenés ${tuEdad}`);
        // }else{
        //         let seguro = confirm(`¿Realmente tenés ${tuEdad}?`)
        //         if(seguro ==true){
        //                 console.log(`Sos un Super anciano, porque tenés ${tuEdad}`);
        //         }else{
        //                 console.log('Decime tu verdadera edad')
        //                 let tuEdad2 = prompt('¿Cual es tu verdadera edad?');
        //                 if( tuEdad2 <= 12){
        //                         console.log(`Sos un infante, porque tenés ${tuEdad2}`);
        //                 }else if(tuEdad2 >= 13 && tuEdad2 <= 18){
        //                         console.log(`Sos un adolescente, porque tenés ${tuEdad2}`);
        //                 }else if(tuEdad2 >= 19 && tuEdad2 <= 45){
        //                         console.log(`Sos un mayor joven, porque tenés ${tuEdad2}`);
        //                 }else{
        //                         console.log(`Sos un anciano, porque tenés ${tuEdad2}`);
        //                 }
        //         }
        // }
// 10.	Crear un programa que permita el ingreso de “PIEDRA”, “PAPEL” o “TIJERAS” a 2 jugadores y muestre en pantalla cual de los 2 ha ganado o si han empatado. En caso de algún ingreso incorrecto mostrar por pantalla que uno de los jugadores ha hecho trampa.
        let opciones = ['piedra', 'papel', 'tijeras'];
        let jugador1 = [];
        let ingresoJugador1 = prompt('Jugador 1: ingrese PIEDRA O PAPEL O TIJERAS').toLowerCase();
        jugador1.push(ingresoJugador1);
        
        let jugador2 = [];
        let ingresoJugador2 = prompt('Jugador 2: ingrese PIEDRA O PAPEL O TIJERAS').toLowerCase();
        jugador2.push(ingresoJugador2);

        let partida = [
                {
                        nombre: 'Participante 1',
                        jugo: jugador1[0]
                },
                {
                        nombre: 'Participante 2',
                        jugo: jugador2[0]
                },
        ]
        console.table(partida)

        if(partida[0].jugo === partida[1].jugo){
                console.log(`Empataron porque ambos eligieron ${jugador1[0]}`)
        } // else if(partida[0].jugo === opciones[2] && partida[1].jugo=== opciones[0]){
        //         console.log(`Gano el ${partida[0].nombre} porque eligió ${jugador1[0]} y ${partida[1].nombre} porque eligió ${jugador2[0]}`)
        //  } //else if(partida[0].jugo ==='papel' && partida[1].jugo==='piedra'){
        //         console.log(`Gano el ${partida[0].nombre} porque eligió ${jugador1[0]} y ${partida[1].nombre} porque eligió ${jugador2[0]}`)
        // }


// 11.	Realizar un programa que permita el ingreso de un color y utilizando “switch” mostrar por pantalla los siguientes mensajes según las opciones: Blanco o Negro: Falta de color, Verde: El color de la naturaleza, Azul: El color del agua, Amarillo: El color del sol, Rojo: El color del fuego, Marrón: el color de la tierra, y para cualquier otro valor: Excelente elección, no lo teníamos pensado.



// 12.	Realizar un programa que permita el ingreso de 2 valores numéricos y una operación. Según sea la operación ingresada (suma, resta, multiplicación, división) el programa deberá mostrar en pantalla un mensaje junto con el resultado. En caso de haber elegido división realizar la operación siempre que sea posible o mostrar un mensaje de ERROR si el divisor ingresado fue 0.



// 13.	Crear un programa que permita ingresar todos los datos de tu documento nacional de identidad, mostrar por pantalla un mensaje que imprima todos los datos ingresados y pregunte si están correctos los mismos. En caso afirmativo, crear un objeto llamado dni con todos los datos ingresados y mostrarlos por consola con console.table() mas un mensaje de registro exitoso, en caso de que la persona rechace confirmar los datos, mostrar un mensaje que diga: vuelva a intentarlo en 1 mes.
