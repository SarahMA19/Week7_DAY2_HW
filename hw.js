//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/



let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
};



// alert(JSON.stringify(person3));

let favoriteFood = person3
for (let p in person3){
    console.log(`my favorite ${p} is ${favoriteFood[p]}`)
};


// console.log(person3['shakes'][0])
    // console.log(person3['pizza']);
    // console.log(person3['tacos']);
    // console.log(person3['burgers']);
    // console.log(person3['ice_cream']);
    // console.log(person3['shakes'][0]);
    // console.log(person3['shakes'][1]);
    // console.log(person3['shakes'][2]);
    // console.log(person3['shakes'][3]);
    // console.log(person3['shakes'][4]);



//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype



// Use an arrow to create the printInfo method


// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 

function Person(name, age){
    this.name = name;
    this.age = age;

    this.printInfo = () => {
        console.log(`Meet ${this.name}, who is ${this.age} years old!`)
    };

    this.newAge = () => {
        this.age++
    } 
};
let Person1 = new Person('Poppy', 75);
let Person2 = new Person('Penny', 65);
let Person3 = new Person('Peter', 55);
Person3.printInfo();
Person3.newAge()
Person3.printInfo();
Person1.newAge()
Person1.newAge()
Person1.newAge()
Person1.printInfo();
Person2.printInfo();


// console.log(incrementAge(Person3));





// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

let checkLength = (string) => {
    return new Promise((resolve, reject) => {
        if (string.length > 10){
            resolve(string);
        } else {
            reject(string);
        }
    })
}

checkLength("howdy")
.then( (result) => {
    console.log(`Big word- ${result}.`);
}).catch( (result) => {
    console.log(`Small Number- ${result}.`);
});

checkLength("supercalifragilisticexpialidocious")
.then( (result) => {
    console.log(`Big word- ${result}.`);
}).catch( (result) => {
    console.log(`Small Number- ${result}.`);
});