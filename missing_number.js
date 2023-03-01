function missing_number(arr, upperBound,lowerBound){
    var sum=0
    for(var i=0; i<arr.length; i++){
        sum +=arr[i];
    }
    upperLImit = (upperBound*(upperBound+1)/2);
    lowerLimit = (lowerBound*(lowerBound-1)/2);
    theoritacalSum = upperLImit-lowerLimit;
    return theoritacalSum-sum;
}
let array = [3,2,4,5,6,1,9,7];
let upperBound=9;
let lowerBound=1;
let missing = missing_number(array,upperBound,lowerBound);
console.log(missing)
