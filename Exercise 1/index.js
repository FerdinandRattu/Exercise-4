//Exercise Array
let array = ["Greg", "Mary", "Devon", "James"];

// No.1
for(let i = 0; i< people.lenght; i++){
    console.log(people[i]);
}

// No.2
people.forEach(function (item){
    console.log(item);
})

// No.3
people.shift();

// No.4
people.pop();

// No.5
people.unshift("Matt");

// No.6
people.push("Ferdinand");

// No.7
for(let i = 0; i< people.length; i++){
    if(i > 1){
        break;
    }
    console.log(people[i]);
}

// No.8
people.slice(2);

// No.9
people = ["Greg", "Mary", "Devon", "James"];

people.splice(2,1,"Elizabeth", "Artie");
console.log(people);

// No.10
let withBob = people.concat("Bob");
console.log(people);

// OBJECT EXERCISE

let programming = {
    languages : ["JavaScript", "Python", "Ruby"],
    isChallenging : true,
    isRewarding : true,
    difficulty : 8,
    jokes : "http://stackoverflow.com//questions/234075/what-is-your-best-programmer-joke"

};

// No.1
programming.languages.push("Go");
//console.log(programming);

// No.2
//programming.difficulty = 7;
programming['difficulty'] = 7;
//console.log(programming);

// No.3
delete programming.jokes
//console.log(programming);

// No.4
programming.isFun = true;
console.log(programming);

// No.5
let languages = programming.languages.map(function(item,index){
    return index + "-" + item;
})
console.log(languages);