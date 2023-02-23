function biggerElement(arr,val){
    var result=[];
    for(var i=0; i<arr.length;i++){
        if(arr[i]>=val)
         result.push(arr[i])
    }
    return result;
}
console.log(biggerElement([11,45,4,31,60],10))