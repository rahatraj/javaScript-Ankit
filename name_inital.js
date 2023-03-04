function name_inital(str){
    return str.split(" ").map((word)=> word[0]).join("")
    
}

console.log(name_inital("Good Mornnig Rahat Reza"))