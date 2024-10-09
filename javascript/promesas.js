

const promesa = new Promise((resolve, reject) => {
    //accion que se ejecutara
    setTimeout(() => {
        const exito = true;
        if (exito) {
            resolve('fue exitoso');
        } else {
            reject('no fue exitoso');
        }
    }, 4000);
});
promesa.then((resolve)=>{
    alert(mensaje);
});
promesa.catch((reject)=>{
    alert(mensaje);
})