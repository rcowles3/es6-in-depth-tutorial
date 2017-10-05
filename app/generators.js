/*  GENERATORS
 * ==========================================
 * Generators and pause and resume within a function
 * yeild and next()
 * ==========================================
*/

// Generator syntax to create a gneerator is function followed by an astrisk
//  function*

function* letterMaker() {
    yield 'a';
    yield 'b';
    yield 'c';    
}

// No neeed to call NEW
let letterGen = letterMaker();

console.log(letterGen.next().value);
console.log(letterGen.next().value);
console.log(letterGen.next().value);

function* countMaker() {
    let count = 0;
    while (count < 6) {
        yield count += 1;
    }
}

let countGen = countMaker();
console.log(countGen.next().value);
console.log(countGen.next().value);
console.log(countGen.next().value);
console.log(countGen.next().value);
console.log(countGen.next().value);