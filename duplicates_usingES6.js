function duplicates(arr){
    return [...new Set(arr)];
}
console.log(duplicates([10,20,30,40,10,40,20]))