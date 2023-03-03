function arrayModify(arr,callback){
    arr.push(100);
    console.log("array is pushed ")
    callback();
}
const arr = [1,2,3,4,5];
console.log("Array is created")
arrayModify(arr,function() {
    console.log("array has been modified ")
})