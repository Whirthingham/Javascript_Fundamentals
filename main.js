//How to access the first and last elements of a 2D array
let MathScore = 
[
    ['Busay', 90, 'A'],
    ['Moses', 80, 'A'],
    ['Bene', 70, 'B'],
    ['Whirthman', 75, 'B']
]

let firstElement = MathScore[0];
console.log("firstElement = "+ firstElement);

// How to access the last element
let lastElement = MathScore[MathScore.length-1];
console.log("lastElement = "+lastElement);

// Accesing first value of first element
let firstValue = MathScore[0][0];
console.log("firstValue = "+firstValue);

// Accessing last value of last element
let lastValue = MathScore[MathScore.length-1][MathScore[MathScore.length-1].length-1]
console.log("Last Value = "+ lastValue);

// Accessing the first value of the last element
let firstValueOfLastElement = MathScore[MathScore.length-1][0];
console.log('firstValueOfLastElement = '+ firstValueOfLastElement);