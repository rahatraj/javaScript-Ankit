const str = "Everyone likes my code";
const creatWord=(word)=>word[0]+(word.length-2)+word[word.length-1];
const str1 =str
   .split(" ")
   .map((word)=> (word.length>=4 ? creatWord(word):word))
   .join(" ");
console.log(str1)
