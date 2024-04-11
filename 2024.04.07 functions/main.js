// function SayHello() {
//     let text = "Hello World!";
//     let result = text.toLowerCase();
//     console.log(result);
// }
// SayHello();


// function upper(str) {
//     let x = str.toUpperCase();
//     console.log(x);
// }
// upper("dave");


// function repeat2(str,num) {
//     let newstr = "";
//     for (let i = 0; i < num; i+++) {
//         newstr += str;
//     }
//     console.log(newstr);
// }
// repeat2("Dave")


// function sayHi(name, LastName) {
//     console.log(`Good week ${name} ${LastName[0]}`);
// }
// sayHi("Dave", "The Great");


// function number(number1, number2) {
//     console.log((number1 + number2)/ 2);

// }
// number(10, 20);


// function snake(number1, number2){
//     if (number1 === 1 && number2 === 1) {
//         console.log("snake eyes");
//     }
//     else {
//         console.log("not snake eyes");
//     }
// }
// const randomNumber = Math.ceil(Math.random() * 6);
// const randomNumber2 = Math.ceil(Math.random() * 6);
// snake(randomNumber, randomNumber2);



// function multi(num1, num2){
//     let result = num1 * num2;
//     return result;
// }
// const num1 = Math.ceil(Math.random() * 10);
// const num2 = Math.ceil(Math.random() * 10);
// console.log(multi(num1, num2));


// function ishot(num){
//     let x = 40;
//     if(x > 30) {
//         console.log("true");
//         return true;
//     }
//     return false;
// }


// const creature = "Common Sea Dragon";
// function scubaDive(){
//     const creature = "Spanish Dancer"; //A type of sea slug
//     console.log(creature);
// }
//  scubaDive();
//  console.log(creature);



// let array = [2, 8, 6, 44, 2];
// function double(num){
//     let result = num * 2;
//     console.log(result);
//     return result;
// }
// array.forEach(double);


// let movies = [
//     {name: "The dictator", score: 5},
//     {name: "Hobbit", score: 4},
// ];

// // movies.forEach((movie) => {
// //     console.log(`${movie.name} ${movie.score}/5`);
// // });
// let arr = movies.map((movie) => {
//     return `${movie.name} ${movie.score}/5`;
// });
// console.log(arr);
// console.log(movies);


// let names = [
//     {name: "David", Surname: "Levi"},
//     {name: "John", Surname: "Alfasi"},
//     {name: "Jane", Surname: "Doe"},
// ];
// let arr = names.map((user) => {
//     return user.name;
// });
// console.log(arr)


// let array = [5, 19, 71, 7, 6, 81];
// let arr = array.filter((num) => {
//     return num < 10
// });
// console.log(arr);


// let names = [
//     {name: "David", Surname: "Levi"},
//     {name: "AbuDhabiKing", Surname: "Alfasi"},
//     {name: "CoccoMelon", Surname: "Doe"},
// ];
// let longNames = names.filter(name => name.length > 10);
// console.log(longNames);

// let longNames = names.filter(e => e.name.length > 10).map(e => e.name);
// console.log(longNames);


// some
// let grades = [85, 75, 96, 16, 100, 52, 64];
// let is100 = grades.some((num) => {
//     return num === 100;
// });
// console.log(is100);

// easy tasks
const num = ["0", 1, 2];
// fruits.push("Lemon");

// const arr2 = (arr) => {
//     arr.push(3);
//     return arr;
// }
// console.log(arr2(num));


// const arr2 = (arr) => {
//     arr.pop();
//     return arr;
// }
// console.log(arr2(num));


// const arr2 = (arr) => {
//     arr.unshift(-1);
//     return arr;
// }
// console.log(arr2(num));


// const arr2 = (arr) => {
//     arr.shift();
//     return arr;
// }
// console.log(arr2(num));

const names = ["David", "Lior"];
// const arr2 = (arr) => {
//     return arr.map((x) => x.toUpperCase());
// }
// console.log(arr2(names));


// const arr2 = (arr) => {
//     return arr.filter((z) => z % 2 == 0);
// }
// console.log(arr2(num));


// my own code, David's function
// const arr2 = num.find((x) => x == 2);
// console.log(arr2);

// const arr2 =(y) =>{ 
//     return y.find((x) => x == 2);}
//     console.log(arr2(num));


// const FindElement = (num) => {
//   return num.findIndex((x) => x === 2);
// };
// console.log(FindElement(num));


// const arr3 = (x, y) => {
//   return x.concat(y);
// };
// console.log(arr3(arr, arr2));







// class contest

const data = [
    { name: "John Doe", age: 25, city: "New York", district: "Manhattan" },
    { name: "Jane Smith", age: 30, city: "Los Angeles", district: "Hollywood" },
    { name: "Michael Johnson", age: 28, city: "Chicago", district: "Downtown" },
    { name: "Emily Davis", age: 35, city: "San Francisco", district: "Financial District" },
    { name: "William Brown", age: 40, city: "Seattle", district: "Capitol Hill" },
    { name: "Sarah Wilson", age: 27, city: "Boston", district: "Back Bay" },
    { name: "David Martinez", age: 33, city: "Houston", district: "Midtown" },
    { name: "Jessica Anderson", age: 22, city: "Miami", district: "South Beach" },
    { name: "Christopher Lee", age: 31, city: "Philadelphia", district: "Center City" },
    { name: "Amanda Taylor", age: 29, city: "Dallas", district: "Uptown" },
    { name: "Daniel Thomas", age: 26, city: "Atlanta", district: "Buckhead" },
    { name: "Lauren Clark", age: 34, city: "Denver", district: "LoDo" },
    { name: "Kevin Rodriguez", age: 32, city: "Phoenix", district: "Downtown" },
    { name: "Megan Lewis", age: 23, city: "Portland", district: "Pearl District" },
    { name: "Brian Walker", age: 37, city: "Austin", district: "Downtown" },
    { name: "Rachel Hill", age: 24, city: "Nashville", district: "The Gulch" },
    { name: "Jason Wright", age: 39, city: "San Diego", district: "Gaslamp Quarter" },
    { name: "Stephanie King", age: 36, city: "Minneapolis", district: "Downtown West" },
    { name: "Ryan Turner", age: 28, city: "Las Vegas", district: "The Strip" },
    { name: "Elizabeth Scott", age: 31, city: "Orlando", district: "Lake Buena Vista" }
];

// str = prompt("enter name,age,city,district");
// const array = str.split("-");
// console.log(array);
// const obj = {
//   name: array[0],
//   age: array[1],
//   city: array[2],
//   district: array[3],
// };
// console.log(obj);
// data.push(obj);

//mission 2 :

// str2 = prompt(" enter parameter-value");

// const array = str2.split("-");
// console.log(array);

// for (let i = 0; i < data.length; i++) {
//   if (data[i][array[0]] == array[1]) {
//     console.log(data[i]);
//   }
// }
// console.log("end of loop");

// misson 3 :

// const func = (x) => {
//   x.shift();
//   console.log(x);

// };

// console.log(func(data));