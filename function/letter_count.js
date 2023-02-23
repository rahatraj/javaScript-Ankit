function letter_count(str,letter){
    var count =0;
    for(var i=0; i<str.length; i++){
        if(str.charAt(i) === letter)
        {
            count +=1;
        }
    }
    return count;
}
console.log(letter_count("rahat","a"))