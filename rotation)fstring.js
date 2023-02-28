function rotaionOfstring(str1,str2){
    let temp =str1 +str2;
     for(var i in temp){
         return true;
    }
    return false;
}
let str1 = 'ABCD';
let str2 = 'BDCA';
if(rotaionOfstring(str1,str2)){
    console.log("stirng is rotation ")
}
else{
    console.log("string is not rotation ")
}
