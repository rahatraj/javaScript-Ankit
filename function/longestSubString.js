function longestSub(str){
    function noRepeat(str){
        let sub="";
        for(let letter  of str){
           if(sub.indexOf(letter)==-1){
              sub+=letter
           }
           else{
            break;
           }
        }
        return sub;
    }
    
    let sub,result="";
    for(let i in str){
        sub=noRepeat(str.substring(i))
        if(sub.length>result.length){
            result=sub;
        }
    }

    return result;

}
console.log(longestSub("google.com"))