// 1
for (i = 1; i <= 7; i++) {
    console.log(i);
};
console.log(`===========1===========`);

// 2
for (i = 5; i <= 25; i += 4){
    console.log(i);
};
console.log(`===========2===========`);

// 3a
const wizards = [
    `Harry Potter`,
    `Hermione Granger`,
    `Ron Weasley`
];

// 3b
for (bffs of wizards) {
    console.log(bffs);
};

// 4a
let harryPotterMovies = 0;

// 4b
while (harryPotterMovies < 8) {
    console.log(harryPotterMovies);
    harryPotterMovies ++;
};

// 4c
console.log(harryPotterMovies);
console.log(`===========4c===========`);

// Bonus 5a
const hogwartsHouses = [
    `Gryffindor`, 
    `Hufflepuff`, 
    `Ravenclaw`, 
    `Slytherin`
];

// 5b
for (house of hotwartsHouses) {
    for (letters of house) {
        console.log(letters);
    }
    console.log(`===========`);
};

// 6a
const quote = [
    `Yer`,
    `A`,
    `Wizard`,
    `Harry`
];

// 6b
// console.log(...quote); 
// OR
for (all = 0; all <=0; all++) {
    console.log(quote.join(` `));
};
//OR
/*
let magicQuote = ``;
for (i = 0; i < quote.length; i++) {
    magicQuote += ` ${quote[i]}`
}
magicQuote == magicQuote.trim();
console.log(magicQuote);
*/

// 7 Inspired by FizzBuzz
for (i = 1; i <= 25; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(`Expecto Patronum`);
    } else if (i % 3 === 0) {
        console.log(`Expecto`);
    } else if (i % 5 === 0) {
        console.log(`Patronum`);
    } else {
        console.log(i);
    }
};