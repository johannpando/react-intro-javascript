

const activo = true;

// let mensaje = '';

// if ( !activo ) {
//     mensaje = 'Activo';
// } else {
//     mensaje = 'Inactivo';
// }
// const mensaje = ( activo ) ? 'Activo' : 'Inactivo'; 
// const mensaje = ( activo ) ? 'Activo' : null; 
const mensaje = activo && 'Activo';


console.log(mensaje);


// Desestructuración
// Asignación Desestructurante

// Creación del objeto
const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman',
    pais: 'Perú',
    capital: 'Lima'
};

// Se imprimen sus atributos
console.log( persona.nombre );
console.log( persona.edad );
console.log( persona.clave );

// Ahora se requiere desestructurar el objeto

// Desestructuro el objeto persona a través de su atributo nombre y le asigno un nombre a la constante 'valorConstante'
const { nombre:valorConstante } = persona;

console.log( `valorConstante ${valorConstante}` );

// Si renombramos la variable ya no podemos usar el original.
// console.log(nombre);// Esto da un error 'nombre is undefined'

// Aquí si funciona porque no le hemos asignado otro valor
const {nombre} = persona;
console.log(nombre);

// En este caso me da error
// const {nombre, clave, edad} = persona; 'nombre' is already defined.

const {edad, clave} = persona;
console.log(edad, clave);


// Desestructuración directamente en una función flecha

// En este caso imprimimos a la persona con todos sus atributos
const retornaPersona = (usuario) => {

    console.log(usuario);
}

// En este otro caso podemos 'desestructurar el objeto' pasando solo el parámetro que queremos del objeto.
const retornaPersonaNombre = (nombreUsuario) => {
    console.log(nombreUsuario);
}

retornaPersona(persona);
retornaPersonaNombre(persona);

// Incluso se pueden definir/crear parámetros de la función y/o darle un valor un valor por defecto

const retornaPersonaEdad = (edadPersona, otroValor='cadena') => {
    console.log(edadPersona, otroValor);
}

retornaPersonaEdad(persona);

// También podemos devolver un objeto en el return

const useContext = ({pais, capital}) => {

    return {
        contextPais: pais,
        contextCapital: capital,
        latLng: {
            lat: 12345,
            lon: 56789
        }
    }
}

// Usamos la desestructuración para imprimir los valores de pais y capital
const desUseContext = useContext(persona);
const {contextPais, contextCapital} = desUseContext;
console.log(contextPais, contextCapital);

// También puedo desestructurar un objeto (latLng) que está dentro de otro (return)
const {latLng:{lat, lon} } = useContext;

console.log(lat, lon);