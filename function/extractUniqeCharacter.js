function extractUniqueCharacter(str){
    var str1=str;
    var result="";
    for(var i=0;i<str1.length;i++){
        if(result.indexOf(str1.charAt(i))==-1){

            result +=str1[i];
        }
    }
    return result;
}
console.log(extractUniqueCharacter("rahatreza"))