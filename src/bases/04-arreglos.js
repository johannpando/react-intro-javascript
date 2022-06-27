// Arreglos en JS

// Se puede hacer de esta forma pero no se recomienda
// const arreglo = new Array( 100 );


const arreglo = [1,2,3,4];

// Se puede usar push pero no se recomienda
// arreglo.push(1)

// Copia un arreglo a otro (no copia la referencia)
let arreglo2 = [ ...arreglo, 5 ];

// Función map (crea un nuevo arreglo), map recibe una función y aplica el return a cada valor del arreglo
const arreglo3 = arreglo2.map( function(numero) {
    return numero * 2;
});


console.log( arreglo );
console.log( arreglo2 );
console.log( arreglo3 );








