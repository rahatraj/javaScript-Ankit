function no_of_occurance(str){
    var count=0;
    var unique ="";
    for(var i=0;i<str.length;i++){
        if(str[i]==='')
         continue;
        var index = str.indexOf(str[i],0);
        while(index !=-1){
            count++;
            index = str.indexOf(str[i],index+1);
        } 
        if(unique.indexOf(str[i])===-1){
            unique +=str[i];
            console.log(str[i] + ":" +count)
        }
        count=0;
    }
}
no_of_occurance("abacdb");