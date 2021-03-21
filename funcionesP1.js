//Declaración de una función
function multiplica( primerOperando ){ 
    var resultado = primerOperando * 2;
    console.log( "El resultado es: " + resultado );
}
multiplica( 12 );

function multiplicaN3(){
    var resultado2 = 12 * 12;
    console.log( "El resultado es: " + resultado2 );
}
multiplicaN3();

//Función como expresión
var resultado = function multiplicaN2( primerOperando ){
    return 2 * primerOperando;
}

resultado( 25 );
console.log( resultado( 25 ));