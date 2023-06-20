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

// How to destructure an array
const [onion, ginger, pepper] = ['Onion', 'Ginger', 'Pepper'];
console.log(onion);
console.log(ginger);
console.log(pepper);

// How to assign a defualt value when destructuring arrays
const[snack='meatpie', drink='tampico'] = ['meatpie'];
console.log(`I want some ${drink} with ${snack}`);

// How to Skip a Value in an Array
const [programingLanguage, nativeLanguage, fluentLanguage] = ['JavaScript',,'Espanol']
console.log(`Yo programa en ${programingLanguage}, and hablas ${fluentLanguage}. But my native es ${nativeLanguage}`);

// Nested Array Destructuring in JS
const [,,[,bread],[milk]] = ['Banana', 'Manzanas', ['Cake', 'Pan','Dougnut','Pie'],['Leche','Honey'],['Tampico','Choco','Vita']];
console.log(`Mi gustar ${bread} y ${milk}`);

// How to use the rest parametre in JavaScript
const alimento = ['Banana', 'Manzanas', ['Cake', 'Pan','Dougnut','Pie'],['Leche','Honey'],['Tampico','Choco','Vita']];
const [favoritaFruta,,[,pan],...rest] = alimento;
console.log(`Mi favorita fruta es ${favoritaFruta} y mi favorita bocadilo es ${pan} y la ${rest}`);

// How to Use the Spread Operator in JS
// Cloning arrays with spread operator
const alimentoClone = [...alimento];
console.log(alimentoClone);