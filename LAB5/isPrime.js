let input = require('prompt-sync')();
let iputx = input("Enter number: ")
var n = parseInt(iputx)
const isPrime = num => {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++)
        if (num % i === 0) return false;
    return num > 1;
}

function isPrimeNumber() {
    return new Promise(function (resolve, reject) {
        if (isPrime(n)) {
            setTimeout(_ => resolve(`${n} {prime: true}`), 500)
        } else {
            setTimeout(_ => reject(`${n} {prime: false}`), 500)
        }
    })
}

isPrimeNumber()
    .then(r => console.log(r))
    .catch(f => console.log(f))