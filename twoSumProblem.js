function twoSum(arr,sum){
    var result =[]
    for(var i=0; i<arr.length; i++){
        var element = sum - arr[i];
        for(var j=0; j<arr.length; j++){
            if(i!=j && arr[i]+arr[j]==sum){
                result.push([arr[i],element])
            }
        }
    }
    return result;
}
console.log(twoSum([3,5,2,-4,8,11],7))