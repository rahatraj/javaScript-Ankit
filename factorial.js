// function factorial(num){
//     let result=1;
//     for(i=1; i<=num; i++){
//         result = result *i; 
//     }
//     return result;
// }
// console.log(factorial(5))
const num =5;
const array = new Array(num).fill(null);
const val = array.map ((currentVal,index)=>index + 1)
.reduce((acc,currentVal)=>acc * currentVal);
console.log(val)