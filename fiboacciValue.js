function fibonacci(num){
    let result =[0,1];
    for(var i=2; i<num+1; i++){
        result.push(result[i-2]+result[i-1])
    }
    
    return result[num]
}
console.log("fibonacci ="+fibonacci(4))