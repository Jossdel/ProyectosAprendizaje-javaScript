const fetch = ()=>{
    return new Promise((resolve , reject)=>{
        setTimeout(()=>{
            const post =  ['post1', 'post2', 'post3', 'post4']
            const error =  false;
            if (error) {
                reject('hubo un error al intentar obtener los posts');
            }
            else{
                resolve(post);
            }
        },2000);
    
    })
    }
    
   

    const mostrarPost = async()=>{
        try {
         const post =  await fetch();
        console.log(post)

        } catch (error) {
            console.log(`${error}`)
        }
    
    }
 mostrarPost();