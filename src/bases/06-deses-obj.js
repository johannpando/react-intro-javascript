
// Desestructuración
// Asignación Desestructurante

// Creación del objeto
const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman'
};

// Se imprimen sus atributos
console.log( persona.nombre );
console.log( persona.edad );
console.log( persona.clave );

// Ahora se requiere desestructurar el objeto

// Desestructuro el objeto persona a través de su atributo nombre y le asigno un nombre a la constante 'valorConstante'
const { nombre:valorConstante } = persona;

console.log( valorConstante );


// const { edad, clave, nombre, } = persona;
 


const useContext = ({ clave, nombre, edad, rango = 'Capitán' }) => {


    // console.log( nombre, edad, rango );
    
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.1232,
            lng: -12.3232
        }
    }

}

const { nombreClave, anios, latlng: { lat, lng } } = useContext( persona );

console.log(nombreClave, anios);
console.log( lat, lng );


