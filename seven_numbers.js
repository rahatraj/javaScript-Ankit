function seven_number(arr){
    for(var i=arr.length;i>=0; i--){
        if(arr[i] + arr[i-1] +arr[i-2] === 7){
            return true;
        }
    }
    return false;
}
console.log(seven_number([1,2,3,1,5,1,5,2]))