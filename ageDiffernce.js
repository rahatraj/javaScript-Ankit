const input = [
    {
        name : "Rahat ",
        age : 23,
    },
    {
        name : "Majid ",
        age : 14,
    },
    {
        name : " Aslam",
        age : 20,
    },
    {
        name : "Shah",
        age :25,
    },
    {
        name : "shalique",
        age :12,
    }
];
const ages = input.map((person)=>person.age);
let result = [Math.min(...ages),Math.max(...ages),Math.max(...ages)-Math.min(...ages)];
console.log(result)
