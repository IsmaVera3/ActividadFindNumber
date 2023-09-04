let array = [2, 0, 4, 7, 8, 10, 30];
let n = 30;
let i = array[0];
let f = array[array.length];

array.sort(function(a, b){return a - b;});//acomodamos arreglo con ES6

function encontrarValor(array,i,f,n){
    if(array.length/2 === n){
        return true;
    }
    if(array[array.length/2] > n){
        i = array[array.length/2] + 1;
    }
    else{
        f = array[array.length/2] - 1;
    }
    
    if(i === n){
        return false;
    }

    if(encontrarValor(array,i,f,n)){
        return true;
    }
}

console.log(encontrarValor);