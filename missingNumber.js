function missingNumber(arr,n){
    for(i=0;i<arr.length; i++){
        if(arr[i]===n){
            return i;
        }
    }
    return 0;
}
let array = [3,4,5,6,7,8,1];
let num = 10;
var missing = missingNumber(array,num)
if(missing){
    console.log(`The  number is found at position ${missing} `)
}
else{
    console.log("The number is not found ")
}