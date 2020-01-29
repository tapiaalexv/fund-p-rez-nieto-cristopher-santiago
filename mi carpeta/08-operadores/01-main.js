function main() {
    var arregloEstudiantes = [
        { id: 1, nombre: "Adrian", nota: 7 },
        { id: 2, nombre: "Vicente", nota: 9 },
        { id: 3, nombre: "Wendy", nota: 4 },
        { id: 4, nombre: "Carolina", nota: 10 },
        { id: 5, nombre: "Carlos", nota: 6.5 },
    ];
    // OPERADOR FOREACH
    // Enviamos -> NADA
    // Recibimos -> NADA
    var respuestaForEach = arregloEstudiantes.
        forEach(function (valorActual, indice, arreglo) {
        console.log(valorActual.nota);
    });
    console.log(respuestaForEach); // undefined
    // Map -> Transformar el arrelo (Mutar el arr)
    // Enviamos -> el valorActual modificado
    // Recibimos -> Nuevo arreglo con valores modificados 
    var respuestaMap = arregloEstudiantes
        .map(function (valorActual, i, arreglo) {
        var nuevoObjeto = {
            id: valorActual.id,
            nombre: valorActual.nombre,
            nota20: valorActual.nota * 2
        };
        return nuevoObjeto;
    });
    console.log('Respuesta MAP:', respuestaMap);
    console.log(arregloEstudiantes);
    // filter -> filtra el arreglo
    // Enviamos -> CONDICION
    // Recibimos -> Nuevo arreglo con valores filtrados
    var respuestaFilter = arregloEstudiantes
        .filter(function (valorActual, i, arreglo) {
        var condicion7 = valorActual.nota >= 7;
        var condicion5 = valorActual.nota < 5;
        // Condicion es un TRUTY o un TRUE
        return condicion7 || condicion5;
    });
    console.log('Respuesta Filter:', respuestaFilter);
    console.log('arreglosEstudiante:', arregloEstudiantes);
    // AND -> every (que todos cumplan la condicion) / OR -> some (que uno cumpla)
    // Some -> Devuelve verdadero o false dependiendo de la condicion
    //          SI ALGUNO CUMPLE, DEVUELVE TRUE
    //          SI NUNGUNO CUMPLE, DEVUELVE FALSE
    // Enviamos -> CONDICION
    // Recibimos -> BOOLEANO
    var respuestaSome = arregloEstudiantes
        .some(function (valorActual, i, arreglo) {
        var condicion = valorActual.nota < 4;
        // CONDICION TRUTY O TRUE
        return condicion;
    });
    console.log('respuestaSome:', respuestaSome);
    console.log('arregloEstudiantes:', arregloEstudiantes);
    // Some -> Devuelve verdadero o false dependiendo de la condicion
    //          SI TODOS CUMPLE, DEVUELVE TRUE
    //          SI ALGUNO NO CUMPLE, DEVUELVE FALSE
    // Enviamos -> CONDICION
    // Recibimos -> BOOLEANO
    var respuestaEvery = arregloEstudiantes
        .every(function (valorActual) {
        var condicion = valorActual.nota >= 4;
        return condicion;
    });
    console.log('respuestaEvery;', respuestaEvery);
    console.log('arrregloEstudiantes', arregloEstudiantes);
    // Reduce -> Devuelve un valor con el calculo aplicado (a cada iteracion se le asigna a un calculo)
    // Enviamos -> CALUCLO
    // Recibimos -> VALOR
    var respuestaReduce = arregloEstudiantes
        .reduce(function (acumulador, valorActual, i, arreglo) {
        var calculo = acumulador - valorActual.nota;
        return calculo;
    }, 100 // valor inicial del acumulador
    );
    console.log('respuestaReduce', respuestaReduce);
    console.log('Promedio:', respuestaReduce / arregloEstudiantes.length);
    console.log('arregloEstudiantes', arregloEstudiantes);
}
;
main();
