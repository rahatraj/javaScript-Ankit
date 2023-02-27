function sumOfArray(arr){
    var result=0;
    for(var i=0;i<arr.length;i++){
      for(var j=0;j<arr[i].length;j++){
        result +=arr[i][j];
      }
        
    }
    return result;
}
const array = [[1,2],[3,4],[5,6]]
console.log(sumOfArray(array))