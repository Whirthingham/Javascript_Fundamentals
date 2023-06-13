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

// How to add element to all Arrays at once
let reviewScore = 10;
MathScore.forEach((score)=>{
    let totalScore = score[1] + reviewScore;
    score.push(totalScore);
});
console.log(MathScore);

// How to add elements of a 2D array
let totalScore = 0
MathScore.forEach((score)=>{
   totalScore += score[score.length-1];
})
console.log("totalScore = "+ totalScore);

//How to add all elements of a 2D array
let numArr = [
    [10, 40, 30],
    [50, 70, 100],
    [120, 10, 80],
    [34, 50, 90]
]

let total = 0;
numArr.forEach((row)=>{
   row.forEach((element)=>{
    total += element;
   })
});
console.log("Total in numArr = "+ total);

// Sorting in ascending order by total value
console.log(MathScore.sort((a,b)=>{
    return a[a.length-1]-b[b.length-1];
}))

// How to insert an element into a 2D array
MathScore.push(['Hammond', 78, 'B', 88]);
console.log(MathScore);
