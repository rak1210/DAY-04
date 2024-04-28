// 1. do the below programs in anonymous function & IIFE

// Anonymous Function

// a. Print odd numbers in an array

let odd = [1, 2, 3, 4, 5, 6, 7, 8, 9];
((arr) => {
    arr.forEach(num => {
        if (num % 2 !== 0) {
            console.log(num);
        }
    });
})(odd);

// IIFE

(function() {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const oddNumbers = arr.filter(num => num % 2 !== 0);
    console.log("Odd numbers:", oddNumbers);
})();



// b. Convert all the strings to title caps in a string array


let title = ["hello", "world", "javascript", "example"];
((arr) => {
    let titleCapsArr = arr.map(str => str.charAt(0).toUpperCase() + str.slice(1));
    console.log(titleCapsArr);
})(title);

// IIFE

(function() {
    const strings = ["hello", "world", "javascript"];
    const titleCaps = strings.map(str => str.charAt(0).toUpperCase() + str.slice(1));
    console.log("Title caps:", titleCaps);
})();


// c. Sum of all the numbers in an array

let add = [1, 2, 3, 4, 5];
let sum = ((arr) => {
    return arr.reduce((acc, curr) => acc + curr, 0);
})(add);
console.log(sum);

// IIFE

(function() {
    const numbers = [1, 2, 3, 4, 5];
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    console.log("Sum:", sum);
})();

// d. Return all the prime numbers in an array

let pri = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let primes = ((arr) => {
    return arr.filter(num => {
        if (num <= 1) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    });
})(pri);
console.log(primes);

// IIFE

(function() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    
    function isPrime(num) {
        if (num <= 1) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    }

    const primeNumbers = numbers.filter(num => isPrime(num));
    console.log("Prime numbers:", primeNumbers);
})();

// e. Return all the palindromes in an array

let pal = ["hello", "level", "world", "madam"];
let palindromes = ((arr) => {
    return arr.filter(str => str === str.split('').reverse().join(''));
})(pal);
console.log(palindromes);

// IIFE

(function() {
    const words = ["level", "hello", "radar", "world"];
    const palindromes = words.filter(word => word === word.split('').reverse().join(''));
    console.log("Palindromes:", palindromes);
})();

// f. Return median of two sorted arrays of the same size

let arrA = [1, 3, 5];
let arrB = [2, 4, 6];
let median = ((arr1, arr2) => {
    let merged = arr1.concat(arr2).sort((a, b) => a - b);
    let mid = Math.floor(merged.length / 2);
    if (merged.length % 2 === 0) {
        return (merged[mid - 1] + merged[mid]) / 2;
    } else {
        return merged[mid];
    }
})(arrA, arrB);
console.log(median);

// IIFE

(function() {
    const arr1 = [1, 3, 5];
    const arr2 = [2, 4, 6];
    
    function medianOfSortedArrays(arr1, arr2) {
        const mergedArray = arr1.concat(arr2).sort((a, b) => a - b);
        const mid = Math.floor(mergedArray.length / 2);
        if (mergedArray.length % 2 === 0) {
            return (mergedArray[mid - 1] + mergedArray[mid]) / 2;
        } else {
            return mergedArray[mid];
        }
    }

    console.log("Median:", medianOfSortedArrays(arr1, arr2));
})();

// g. Remove duplicates from an array

let dup = [1, 2, 2, 3, 4, 4, 5];
let uniqueArr = ((arr) => {
    return arr.filter((value, index, self) => self.indexOf(value) === index);
})(dup);
console.log(uniqueArr);

// IIFE

(function() {
    const arr = [1, 2, 2, 3, 4, 4, 5];
    const uniqueArr = Array.from(new Set(arr));
    console.log("Unique array:", uniqueArr);
})();

// h. Rotate an array by k times

let arr1 = [1, 2, 3, 4, 5];
let k = 2;
let rotatedArr = ((arr, k) => {
    let n = arr.length;
    k = k % n;
    return arr.slice(k).concat(arr.slice(0, k));
})(arr1, k);
console.log(rotatedArr);

// IIFE

(function() {
    const arr = [1, 2, 3, 4, 5];
    const k = 2;
    const rotatedArr = [...arr.slice(k), ...arr.slice(0, k)];
    console.log("Rotated array:", rotatedArr);
})();



