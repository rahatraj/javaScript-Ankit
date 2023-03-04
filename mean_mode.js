function median(arr){
    arr.sort((a,b)=> a-b);
    let n = arr.length;
    if(n%2!=0)
     return arr[n/2];
    return (arr[Math.floor((n-1)/2)] + arr[n/2])/2; 
}
function Modefind(arr){
    const sum = arr.reduce((acc,cur)=>acc + cur);
    return sum/arr.length;
}
const array =[3,7,1,8,2,9];
console.log("Mode = "+Modefind(array))
console.log("Median = " + median(array))
