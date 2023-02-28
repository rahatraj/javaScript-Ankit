function sumByAddOne(arr){
    let sum=0;
    for(var i=0; i<arr.length; i++){
        sum +=arr[i]+1;
    }
    return sum;
}


function sumByAddOne(arr){
    return arr.reduce(function(sum,value){
        return sum +=value+1;
       
    });
    
}
console.log(sumByAddOne([1,2,3,4,5]))

