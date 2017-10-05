// STATIC FUNCTIONS
// ==================================================
// Static classes, used to hold relevant methods together in one place.

class Calculator {
    static Multiply(a, b) {
        return a * b;
    }

    static Add(a, b) {
        return a + b;
    }
}

let a = Calculator.Add(5, 7);
let b = Calculator.Multiply(19, 9);
console.log('Add: ', a, 'Multiply: ',b);

// SETS
// ==================================================
// Sets, creates arrays to hold unique varialbes, not duplciates

let chars = 'Ryan Cowles';
let chars_arr = chars.split("");
let chars_set = new Set(chars_arr);
console.log(chars_set);

// replaces string.includes()
console.log(chars_set.has('z'));


// MAPS 
// ==================================================
// Maps have pairs of keys and values, just like objects
// each key is unique, and cant duplicate
let map = new Map();

// To define a map, takes in two parameters, a KEY and a VALUE
let key_1 = "string key";
let key_2 = { map: 'key' };
let key_3 = function () { };

map.set(key_1, 'return value for a string key');
map.set(key_2, 'return value for an object key');
map.set(key_3, 'return value for a function key')
console.log(map);

let numArr = [[1, 'one'], [2, 'two'], [3, 'three']];
let valMap = new Map(numArr);
// console.log(valMap);

for (let [key, value] of valMap.entries()) {
    console.log(`${key} points to ${value}`);
}

let string = 'asdklfharkjhasdfkbaslkrjh';
let letters = new Map();
for (let i = 0; i < string.length; i++){
    let letter = string[i];
    if (!letters.has(letter)) {
        letters.set(letter, 1);
    } else {
        letters.set(letter, letters.get(letter) + 1);
    }
}

console.log(letters);


