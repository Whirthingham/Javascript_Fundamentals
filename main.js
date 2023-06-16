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