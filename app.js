function filter (array){
   let cont = [];
    for (let i=0; i< array.length; i++){
        if(array[i] > 10 ){
           cont.push(array[i]);
           
        }
    }
    return [cont];
}


let resultado = filter([3, 12, 45, 7]);
console.log(resultado);

