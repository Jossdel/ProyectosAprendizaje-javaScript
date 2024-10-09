// const colores = ['rojo', 'azul', 'verde']

// // console.log(colores.length);

// // document.body.innerHTML=colores.toString();
// // console.log(colores.join(''))
// const letras =['c','b', 'a', 'd']
// console.log(letras.sort());
// const numeros =[4,1,2];
// console.log(numeros.sort());


// console.log(letras.reverse())

// const arreglo1 = [1 , 2 , 3];
// const arreglo2 = ['a' , 'b', 'c' ];
// const arreglo3 = arreglo1.concat(arreglo2);
// console.log(arreglo3)

// colores.push('amarillo')

// console.log(colores ')
// colores.pop();
// console.log(colores)

// const dias ={
//     dia1: 'lunes',
//     dia2: 'martes',
//     dia3: 'miercoles',
//     dia4: 'jueves',
//     dia5: 'viernes',
//     dia6: 'sabado',
//     dia7: 'domingo',
// }
// const dia = ['lunes' , 'martes', 'miercoles' , 'jueves', 'viernes', 'sabado', 'domingo' ];
// const diaeliminado = dia.shift();
// console.log(diaeliminado)
// console.log(dia[0])

// const amigos = ['alejando', 'cesar' , 'manuel'];
// amigos.splice(1, 2 ,'rafael', 'roberto', 'samuel');

// const frutas = ['fresa','manzana', 'uva','piña', 'mango', 'naranja' ,'melon']
// const frutasFavoritas = frutas.slice(1,5)
// console.log(frutasFavoritas)

const nombres = ['carlos', 'rafael', 123,'estefania', 'rodrigo','rafael','gema', 'diana','sara'];
// console.log(nombres.indexOf('rafael'))
// console.log(nombres.lastIndexOf('rafael'))


// nombres.forEach((valor,index)=>{
//     console.log(valor,index)
// })
// const resultado = nombres.find((nombre)=>{
//     if(nombre[0] ==='e'){
//     return nombre;
// }
// });
// console.log(resultado)
// const nombresMayusculas = nombres.map((nombre)=> nombre.toUpperCase());
// console.log(nombresMayusculas)

// const nombres4letras = nombres.filter((nombre)=> {
//     if (nombre.length === 4) {
//        return nombre; 
//     }
    
// });
// console.log(nombres4letras)

// console.log(nombres.includes('rafael'));
// console.log(nombres.includes('carlos'));
// const nombresValidos = nombres.every((nombre)=>{
//     if (typeof nombre === 'string') {
//         return true;
//     }
//     else{
//         return false ;
//     }
// });
// console.log(` todos los nombres son validos? ${nombresValidos}`)
const nombresValidos = nombres.some((nombre)=>{
    if (typeof nombre !== 'string') {
        return true;
    }
    else{
        return false ;
    }
});
 console.log(` todos los nombres son validos? ${nombresValidos}`)