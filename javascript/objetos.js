const persona={
    nombre: 'carlos',
    edad: 27,
    correo:'correo@correo.com',
    subscripciones:{
        wep:true,
        correo:true,
    },
    coloresFavoritos:['negro', 'rojos'],
    saludo: ()=>{
        alert('Hola mundo')
    }
};
console.log(persona.nombre)
console.log(persona['edad'])
