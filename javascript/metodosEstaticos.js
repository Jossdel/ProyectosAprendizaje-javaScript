class Usuario{
    constructor(nombre , correo){
    this.nombre = nombre; 
    this.correo = correo;
    }
    static borrarUsuario(id_usuario){
        console.log(`El usuario con el id: ${id_usuario} ha sido borrado`);
    }
    static registrados = 1000;
}
// const usuario = new Usuario('carlos','correo@correo.com')
// console.log(usuario.borarUsuario(1));
Usuario.borrarUsuario(1);
console.log(Usuario.registrados);