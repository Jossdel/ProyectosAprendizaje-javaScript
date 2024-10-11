const serieFibonnachi = (limit) =>{
    const arrbib = [0 , 1];
    
    for (let i = 2 ; i < limit; i++) {
     arrbib.push(arrbib[i - 1] + arrbib[ i-2 ]);
    }
    return arrbib;
    }
    const test = serieFibonnachi(100);
    console.log(test)