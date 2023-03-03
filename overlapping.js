function overlapTwoRanges(arr){
    var count =0;
    for(var i= arr[0]; i<=arr[1];i++){
        if(i >=arr[2] && i<=arr[3]){
            count++;
        }
    }
    return count >=arr[4] ? true : false;
   
}
console.log(overlapTwoRanges([1,5,3,8,3]))