// class Usuario {
//     tipo = 'usuario';
//     constructor(nombre , apellido){
//         this.nombre = nombre;
//         this.apellido = apellido;
//     }
//     nombreCompleto(){
//       return ` ${this.nombre} ${this.apellido}`;
//     }


// }
// const usuario1 = new Usuario('manuel', 'peralta');
// console.log(usuario1);
// console.log(usuario1.nombreCompleto());

class Usuario {
    tipo = 'usuario';
    constructor(usuario , password){
        this.usuario = usuario;
        this.password = password;
    }
  obtenerPosts(){
    const post = ['post1', 'post2'];
    return post;
  }
    }
    
    class Moderador extends Usuario{
        constructor(usuario , password , permisos){
            super(usuario , password);
            this.permisos = permisos;
        }
        borrarPost (id){
            if (this.permisos.includes('borrar')) return console.log(`el post con el ${id} a sido borrado`)
                else return console.log(`no tienes los permisos para borrar el post`)
           
        }
    }

const usuario = new Usuario('carlos', '123');
console.log(usuario.obtenerPosts());
// usuario.borrarPost(7);

const usuario2 = new Moderador ('arturo','456',['borrar ','editar']);
console.log(usuario2.obtenerPosts());
console.log(usuario2.permisos);
usuario2.borrarPost(7);