// const saludo = (saludar = 'persona')=>
//     console.log(`hola ${saludar}`);
// saludo('carlos');
// saludo('cesar');
// saludo();
const operacion = (tipo , numero1 , numero2)=>{
   
    if (tipo === 'suma') {
        console.log(numero1 + numero2);
    }
    else if(tipo ==='resta'){
        console.log(numero1 - numero2);

    }
}
operacion('suma', 23 ,34)
operacion('resta', 53,43)