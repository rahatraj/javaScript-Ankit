function subset(arr){
    var result =[];
    var temArr =[];
    for(var i=0;i<arr.length;i++){
        for(var j=0;j<arr.length;j++){
            if(i!==j){
             result.push(arr[i],arr[j])
        }

    }
    }
    
    console.log(result)
}
subset([1,2,3])