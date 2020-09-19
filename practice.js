const calculateAgeInDogYears = (age) => {
    const ageInDogYears = age / 7;
    console.log(ageInDogYears);
}

calculateAgeInDogYears(22);


// Practice: Best in Show
const favoriteDog = (breed) => {
    if (breed === 'meow'){
        return 'I like cats'
    } else {
        return `My favorite dog breed is ${breed}`
    }
}

const myFavorite = favoriteDog('Aussie');

console.log(myFavorite);

// Practice: Addition
const addNumbers = (x, y, z) => {
    return x + y + z;
}

console.log(addNumbers(17,4,11));

// Practice: Self-Driving Cars
const go = (direction, speed) => {
    let speedCheck =  `The car is moving ${direction} at ${speed} mph.`
    if (speed > 75){
        speedCheck += " SLOW DOWN!";
    }
    return speedCheck;
}

console.log(go('forward', 80));


// Practice: Evens or Odds
const evenOrOdd = (number) => {
    if (number % 2 === 0){
        console.log('Even');
    } else {
        console.log('Odd');
    }
}


// Practice: Double Functions
const arrayOfNumbers = [0,1,2,3,4,5,6,7,8,9];

const checkAllNumbers = () => {
    for (const number of arrayOfNumbers){
        evenOrOdd(number);
    }
}

checkAllNumbers();

const words = [
    "The", "killing", "complex", "houses",
    "married", "kittens", "and", "single",
    "soldiers", "and", "their", "kleptomaniacal",
    "families"
]

const filterWords = (arr) => {
    return arr.filter(word => !word.startsWith('k'));
}

filterWords(words);

const stringBuilder = (arr) => {
    let string = ''
    for (let i = 0; i < arr.length; i++){
        string += `${arr[i]} `
    }
    return string;
}

const filteredWords = filterWords(words);

console.log(stringBuilder(filteredWords));


// Practice: You Can Tune a Piano, But You Can't...
const svenFishing = (number) => {
    let chance = Math.random() * number;
    if (chance < 1){
        return 'Sven hooked a tuna!  :)';
    } else {
        return 'Sven came up empty-handed.  :(';
    }
}

console.log(svenFishing(3));


// Practice: Fast Food (Multiple Parameters)
const orderMeal = (sandwich, side, drink, dessert) => {
    return {
        sandwich: sandwich,
        side: side,
        drink: drink, 
        dessert: dessert
    }
}

const takeOutBag = orderMeal("Ultimate Slammer", "Fudge sundae", "Mr. Pepper", "Potato wedges")

console.log(takeOutBag);

// Practice: Same Chores, Different Days
const choreBoy = {
    firstName: "Donald",
    lastName: "McLelland"
}

// tasks 
const groceryStore = (obj) => `${obj.firstName} ${obj.lastName} went to the grocery store`;
const oilChange = (obj) => `${obj.firstName} ${obj.lastName} got the oil changed`;
const mailRetrieval = (obj) => `${obj.firstName} ${obj.lastName} retrieved the mail`;
const fridgeCleaning = (obj) => `${obj.firstName} ${obj.lastName} cleaned the fridge`;
const tunnelDigging = (obj) => `${obj.firstName} ${obj.lastName} dug the escape tunnel`;
const middleEast = (obj) => `${obj.firstName} ${obj.lastName} brought peace to the Middle East`;

// day planner
const dayPlanner = (firstChore, secondChore, thirdChore, person, day) => {
    return `On ${day}, ${firstChore(person)}, and ${secondChore(person)}, and ${thirdChore(person)}.`;
}

console.log(dayPlanner(middleEast, mailRetrieval, tunnelDigging, choreBoy, 'Tuesday'));
