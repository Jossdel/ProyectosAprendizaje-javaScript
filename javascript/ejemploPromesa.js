const fetch =()=>{
return new Promise((resolve , reject)=>{
    setTimeout(()=>{
        const post = ['post1', 'post2', 'post3', 'post4']
        const error = false;
        if (error) {
            reject('hubo un error al intentar obtener los posts');
        }
        else{
            resolve(post);
        }
    },2000);

})
}


 fetch().then((post)=>{console.log(post)}).catch((err)=>{console.log(err)})
