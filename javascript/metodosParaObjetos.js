
const usuario ={
    nombre: 'carlos',
    edad: 27,
    amigos:['alejandro','cesar','manuel'],
    saludo:()=>{
        console.log('hola');
    }
}
usuario.saludo();
// const resultado = Object.keys(usuario);
// console.log(resultado)

const resultados = Object.values(usuario);
 console.log(resultados)