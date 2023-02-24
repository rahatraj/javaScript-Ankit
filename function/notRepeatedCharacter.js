function not_repeated(str){
    var result =0;
    for(var i=0; i<str.length; i++){
         result=0;
       for(var j=0;j<str.length;j++){
          if(str[i]===str[j])
          {
             result++;
          }
       }
    }
    console.log(result)
}
not_repeated("ababcdcde")
