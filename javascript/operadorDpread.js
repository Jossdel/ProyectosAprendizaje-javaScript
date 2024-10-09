
const frutas = ['Fresa', 'Manzana', 'Uva', 'Piña', 'Mango', 'Naranja', 'Melon'];
const comidaFavorita = ['pizza','sushi', ...frutas ]
// console.log(comidaFavorita);


const datosLongin = {
    nombre:'arturo',
    correo: 'correo@correo.com',
    password:'123',
}   
const ususario = {
    ...datosLongin,
    nombre: 'carlos',
    edad:27,
   
}
// console.log(ususario)



const registrarUsuario = (nombre , correo, ...datosAdicionales)=>{
    console.log(nombre , correo ,...datosAdicionales );

}
// registrarUsuario('carlos', 'correo@correo.com', 28 , 'españa');
const amigos=[ 'alejandro', 'cesar' , 'manuel']
const [primerAmigo , segundoAmigo, tercerAmigo] = amigos;
console.log(primerAmigo)

const persona ={
    nombre: 'carlos',
    edad:27,
    ciudad: 'mexico'
}
const {nombre, pais , ciudad} = persona;
console.log(nombre, ciudad)


const mostrarEdad = (nombre , edad ,...agregarDatos)=>{
    console.log(`${nombre} ${edad} ${agregarDatos}`)
}
mostrarEdad(persona.nombre, persona.edad , 'hola');
