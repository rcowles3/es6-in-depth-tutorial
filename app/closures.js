// CLOSURES
// ==================================================

// function factory
const addSuffix = (x) => {
    const concat = (y) => {
        return y + x;
    }
    return concat;
}

let add_ness = addSuffix("ness");
console.log(add_ness);
let h = add_ness("happi");
console.log(h);

// With ES6, this function can be simplified by elminiating the use of the 'return' keyword and brackets. 

// const product = (x) => {
//     return y => {
//         return y * x;
//     }
// }

const product = (x) => y => y * x;

let mult5 = product(5);
console.log(mult5(3));

// PRIVATE METHODS
// ==================================================
const budget = () => {
    let balance = 0;
    let changeBal = (val) => {
        return balance += val;
    }

    const deposit20 = () => changeBal(20);
    const check = () => balance;
    return { deposit20, check }
}

let wallet = budget();
wallet.deposit20();
wallet.deposit20();
console.log(wallet.check());