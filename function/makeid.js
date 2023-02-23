function makeId(str){
    let text ="";
    let list = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    for(var i=0;i<str;i++){
        text +=list.charAt(Math.floor(Math.random()*list.length))
    }
    return text;
}
console.log(makeId(8))