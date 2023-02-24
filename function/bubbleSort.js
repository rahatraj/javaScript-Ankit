function bubbleSort(arr){
    var temp;
    for(var i=0; i<arr.length;i++){
        for(var j=i+1; j<arr.length; j++){
            if(arr[i]<arr[j]){
                temp = arr[j];
                arr[j]=arr[i];
                arr[i]=temp;
            }
        }
    }
    return arr;
}
console.log(bubbleSort([3,5,1,4,2,6,]))