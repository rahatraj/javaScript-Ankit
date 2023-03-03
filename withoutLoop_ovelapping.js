function overlapping(arr){
    var num1 = listOfNums(arr[0],arr[1]);
    var num2 = listOfNums(arr[2],arr[3]);
    if(num1[0] >= num2[0] && num1[0] <= num2[1]){
        overlap = num2[1] - num1[0]+1;
    }
    else{
        overlap = num1[1] - num2[0] +1;
    }
    if(overlap >= arr[4]){
        return true; 
    }
}
function listOfNums(a,b){
    start = a;
    end = b;
    if(a>b){
        start = b;
        end = a;
    }
    return [a,b]
}
console.log(overlapping([4,10,2,6,1]))