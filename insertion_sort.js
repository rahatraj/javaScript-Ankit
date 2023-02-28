function insertion_sort(arr){
   for(var i=1,value;i<arr.length; i++){
     value = arr[i];
     for(j=i;arr[j-1]>value;j--){
        arr[j]=arr[j-1]
     }
     arr[j]=value;
   } 
   return arr;  
}
console.log(insertion_sort([3,4,1,5,6,2]))