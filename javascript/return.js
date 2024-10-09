const operacion = (tipo , numero1 , numero2)=>{
     if (tipo === 'suma') {
        return numero1+numero2
    } else if(tipo ==='resta'){
       return numero1-numero2
    }
   
};
operacion('suma', 23 ,3)
console.log(operacion('suma', 23 ,3))