function insertionSort(arr){
    let temp,j;
    for(var i=0; i<arr.length; i++){
        temp=arr[i];
        j = i-1;
        while(j>=0 && temp<=arr[j]){
            arr[j+1]=arr[j];
            j--;
        }
        arr[j+1]=temp;
        
    }
    return arr;
}
console.log(insertionSort([2,6,8,4,1]))