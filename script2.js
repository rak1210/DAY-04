//2.Do the below programs in arrow functions.

// a. Print odd numbers in an array

var numbers = [1,2,3,4,5,6,7,8,9];

var printOddNumbers= arr => arr.forEach(num => {
    if (num % 2 !== 0) {
        console.log(num);
    }
});

printOddNumbers(numbers);

// b. Convert all the strings to title caps in a string array

var strings = ["hello", "world", "javascript", "programming"];

var  convertToTitleCaps = arr => arr.map(str => {
    var  lowerCaseStr = str.toLowerCase();
    var  titleCaseStr = lowerCaseStr.replace(/\b\w/g, char => char.toUpperCase());
    return titleCaseStr;
});

console.log(convertToTitleCaps(strings));


// c. Sum of all numbers in an array

var numbers = [1, 2, 3, 4, 5];

var sumOfNumbers = arr => {
    var sum = arr.reduce((acc, num) => acc + num, 0);
    return sum;
};

console.log(sumOfNumbers(numbers));

// d.Return all the prime numbers in an array

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var isPrime = num => {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
};

var getPrimeNumbers = arr => arr.filter(num => isPrime(num));

console.log(getPrimeNumbers(numbers));

// e. Return all the palindromes in an array

var words = ["level", "radar", "noon", "apple", "banana"];

var  isPalindrome = str => {
    var reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
};

var getPalindromes = arr => arr.filter(str => isPalindrome(str));

console.log(getPalindromes(words));


