// const usuario ={
//     edad:27,
//     pais:'mexico',
//     tiket:true,
// }
// if (usuario.edad > 17) {
//     console.log(`el usuaro es mayor de edad , puede entrar`)
// }
// else{
//     console.log(`es menor de edad y no puede entrar`)
// }

// const usuario ={
//     edad:20,
//     pais:'mexico',
//     tiket:false,
// }
// if (usuario.edad >= 18  && usuario.tiket) return console.log(`eres mayor de edad y tienes tu tiked`)
//      console.log(`lo sentimos o no eres mayor de edad o no tenes tiked`)
// const usuario ={
//     edad:20,
//     pais:'mexico',
//     tiket:false,
// }

// if (usuario.edad>=18) {
//     if (usuario.tiket) {
//         console.log(`el usuario el mayor de edad ytiene tiket`)
//     }
//     else{
//         console.log(`el usuario es mayor de edad pero no tiene tiket`)
//     }
   
// } else{
//         console.log(`el usuario es menor de edad`)
//     }

const usuario ={
    edad:20,
    pais:'mexico',
    tiket:false,
}
switch (usuario.pais) {
    case'mexico':
        console.log(`el usuario es mexicano`)
        break;
    case'espana':
        console.log(`el usuario es espanol`)
        break;
        

    default:
        break;
}

