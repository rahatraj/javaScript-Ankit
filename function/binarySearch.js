function binaerySearch(arr,strt,end,value){
    if(end>=strt){
        var mid = Math.floor((strt+end)/2)
    if(arr[mid]==value)
           return mid;
    if(arr[mid]>value)
           return binaerySearch(arr,strt,mid-1,value)
    return binaerySearch(arr,strt,mid-1,value)      
   }
   return -1;
}   
const arr =[1,2,3,4,5,6,7,8,9];

var result = binaerySearch(arr,arr[0],arr[arr.length-1],6)
if(result ==-1) 
  console.log("Element is not present") 
console.log("Elememt is present at index "+result)