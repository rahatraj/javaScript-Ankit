const array = [1,2,-3,5,6,-2,45,20];
const arr = array.filter((num)=> num > 0).reduce((acc,currentval)=> acc + currentval);
console.log(arr);