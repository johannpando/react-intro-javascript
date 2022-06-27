
// Funciones en JS

// NO usar este tipo de función

function saludarX( nombre ) {
    return `Hola, ${nombre}`;
}

// Usar esta otra
const saludar = function( nombre ) {
    return `Hola, ${ nombre }`;
}

// Incluso mejor usar esta, función con felcha
const saludar2 = ( nombre ) => {
    return `Hola, ${ nombre }`;
}

// La misma función anterior pero resumida (si la función solo contiene una línea)
const saludar3 = ( nombre ) => `Hola, ${ nombre }`;
// Lo mismo pero sin parámetro de función
const saludar4 = () => `Hola Mundo`;

// console.log( saludar('Goku') )

console.log( saludar2('Vegeta') );
console.log( saludar3('Goku') );
console.log( saludar4() );

// En esta versión no indicamos return porque devolvemos un objeto pero es necesario encerrar después de la flecha con paréntesis
const getUser = () => ({
        uid: 'ABC123',
        username: 'El_Papi1502'
});


const user = getUser();
console.log(user);

// Tarea
const getUsuarioActivo = ( nombre ) =>({
    uid: 'ABC567',
    username: nombre
})

const usuarioActivo = getUsuarioActivo('Fernando');
console.log( usuarioActivo );



