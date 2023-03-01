function duplicatesItem(arr){
    return arr.filter((item,index)=>
        arr.indexOf(item)===index);
}
console.log(duplicatesItem([2,3,4,1,2,3,5,6,3]))