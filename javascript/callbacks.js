
const obtenerPostDeUsuario = (usuario , callbacks)=>{
console.log(`obteniendo los post de ${usuario}...`)
setTimeout( ()=>{
let post = [`post1` , 'post2', 'post3']
callbacks(post);
},2000);
}

obtenerPostDeUsuario('carlos',(posts)=>{
console.log(posts)
});