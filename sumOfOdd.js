function sum_of_odd(arr){
    var sum =0;
    for(var i=0;i<arr.length;i++){
        if(arr[i]%2!=0){
            sum +=arr[i];
        }
    }
    return sum;
}
console.log(sum_of_odd([2,3,4,5,6,7,8,9]))