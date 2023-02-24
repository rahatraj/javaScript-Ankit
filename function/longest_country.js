function longest_country(arr){
    var max = 0
    for(let i of arr){
        max = Math.max(max,i.length)
    }
    for(let e of arr){
        if(max === e.length)
        return e;
    }
}
console.log(longest_country(['india','germeny',"United_State_of_America"]))