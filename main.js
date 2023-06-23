// Array.forEach Method
const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

month.forEach((value)=>{
   value += " New Month";
//    console.log(value);
})

// Array.map Method
const transformedMonth = month.map((value)=>{
    return value.toUpperCase();
})

// console.log(transformedMonth)
const users = [
    {
        firstname : "Bismarck",
        lastname : "Nyame",
        city    :  "Wassa Akropong"
    },
    {
        firstname : "Benjamin",
        lastname  : "Nyame",
        city      : "Komenda"
    },
    {
        firstname : "Kojo",
        lastname  : "Odoom",
        city      : "Accra" 
    }
];

const usersList = users.map((user)=>{
    return user.firstname + " " + user.lastname;
})
// console.log(usersList);

const userCities = users.map((user)=>{
    return user.city;
})
// console.log(userCities);

// How to generate arrays with dynamic contents
const dynamicContent = users.map((user)=>{
    return `${user.firstname + " " + user.lastname} lives in ${user.city}`;
})
// console.log(dynamicContent.join("**||**"));

// Array.find method
const findUser = users.find((user)=>{
    return user.firstname == "Bismarck";
})
console.log(findUser);

// Array. findIndex method
const findIndex = users.findIndex((user)=>{
    return user.firstname == "Kojo";
}) 

console.log(findIndex);

// Array.fileter method
const filterLastName = users.filter((user)=>{
    return user.lastname == "Nyame";
})
console.log(filterLastName);

const filterCity = users.filter((user)=>{
    return user.city == "Komenda";
})

console.log(filterCity);

const numbers = [2,4,6,8,10,12]
const even = numbers.every((value)=>{
    return value % 2 == 0;
});

console.log("Numbers are even : "+ even);

const positive = numbers.every((value)=>{
    return value > 0;
});
console.log("Numbers are positive : "+ positive);