function divBythree(strt,end){
    var result =[]
    for(let i=strt; i<=end; i++){
        result.push(i);
        if(i%3==0){
            result.push("div3");
        }  
    }
    return result;
}
console.log(divBythree(2,9))
