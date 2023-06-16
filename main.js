// How to Create an Array in JavaScript
const salad = ['Cabbage','Cucumber','Carrot','Onion','Tomatoes','Green Pepper', 'Eggs', 'Sardine', 'Ketchup'];
console.log(salad);
//How to Get Elements from an Array in JS
console.log(salad[0])
console.log(salad[salad.length-1])
console.log(salad[salad.length-2]);
console.log(salad[salad.length]);
console.log(salad[-1]);
console.log(salad[salad.length+1])

// How to access elements by loop
for(let i=0; i<=salad.length-1; i++){
    console.log(salad[i]);
}

//Access element by using forEach loop
salad.forEach((ingredients)=>{
    console.log(ingredients);
})

// How to create an array using an array constructor
const fruit = new Array('Mango', 'Banana', 'Pea', 'Manzanas', 'Sugar-Cane', 'Orange');
console.log(fruit);

// How to add element to an array
fruit.push('Watermelon');   // Push adds to the end of the array
fruit.unshift('Pineapple') // Unshift adds to the begining of the array;
console.log(fruit);

// How to remove element of an array
fruit.pop();    // Pop removes the last element of an array
fruit.shift();  // Shift removes the first element of an array
console.log(fruit);

// How to copy and clone an array;
const saladCopy = salad.slice();
const fruitHalf = fruit.slice(0,(fruit.length/2)-1);
console.log(`The copy of salad : ${saladCopy}`);
console.log(`Half copy of fruit : ${fruitHalf}`);
console.log(salad == saladCopy);

// How to determing if a value is an array
console.log("saladCopy is an array : " + Array.isArray(saladCopy));
console.log(Array.isArray(390));
console.log(Array.isArray(salad));
