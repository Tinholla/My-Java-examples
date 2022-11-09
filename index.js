console.log("how far?");
console.log("trying it out");
console.log("To master Javascript you cannot escape practice")

// Js.DATATYPES
// Numbers 1, 300, 200, 5
// strings 'olatunji', 'rhema' "2"
// Boolean True/False
// Null - Variable with no value
// Undefined - for variables not yet defined
// Object
// Symbols

//VARIABLES(var, let, const)
let age = 1;
age = 29;

let name = "rhema";
name = "Akin";

console.log(name);
console.log(age);

let firstName = "Ire";
let Surname = "Duncan";
console.log(Surname, firstName);

// alert("Goodluck Barca")

let fullName = "White Klara Anabelle";
console.log(fullName);

console.log(1+2)

let birthyear = 1980;
let currentyear = 2022;

let Age = currentyear - birthyear;
console.log(Age);
//OR
console.log('currentyear-birthyear🥖');
console.log("Age is", Age);

let firstname = "Ire";
let SurName = "Duncan";
let Middlename = "Mofe";
console.log("My Fullname is", SurName, firstname, Middlename);
console.log(`My Fullname is", ${SurName}, ${firstname}, ${Middlename}`);
console.log("My Fullname is:", SurName + firstname + Middlename);
console.log("My Fullname is:", SurName + " " + firstname + " " + Middlename);

let fullname = Surname + " " + firstname + " " + Middlename;
console.log(fullname);
//getting character
console.log(firstname[0]);
//string properties
console.log(firstname.length);
console.log(fullname.length);
console.log(fullname[0]);
console.log(fullname[6]);
//strings method
console.log(fullname.toUpperCase());
console.log(fullname.toLowerCase());

let gmail = "Tinolaolaleye@gmail.com";
let result = gmail.indexOf('a');
console.log(result);
let result2 = gmail.lastIndexOf('a');
console.log(result2);

let cars = "Lamborghini, Benz, Buggatti";
console.log(cars.slice(5, 14));
console.log(cars.slice(-9, -3));
console.log(cars.slice(6));
console.log(cars.replace("Benz", "Bentley"));

let text = " Liverpool how market! ";
//let anothertext = text.trimEnd()
//let anothertext=text.trimStart()
let anothertext = text.trim();
console.log(anothertext);

//const pie = 3.194
//pie = 2.19
//console.log(pie)

// JavaScript Operators

// Arithmetic Operators 
// - subtraction
// + addition
// * multiplication
// ** exponentiation(raised to power)
// / Division
// % Modulus(Remainder)
// ++ increament
// -- decreament

let x = 4+5;
console.log(x);
let a = 14-5;
console.log(a);
console.log(x+a);
console.log(x*a);
let b = 4;
let c = a / b;
let d = a%b;
console.log(c);
console.log(d);

let g = 6;
//g++;
g --;
console.log(g);

let f = 4;
let y = f ** 2;
console.log(y);

let i = 10;
i += 4;
console.log(i);

let e = "10"
e += "4";
console.log(e);

//Number Concatenation with strings

let teeth = 32;
let statement = `Rhema has ${teeth} teeth`;
// let statement = "Rhema has" + " " + teeth + " " + "teeth";
console.log(statement);

let l = 8-4;
console.log(l);
let k = 10 - 4;
let m = 5 + 1;
let n = k - m;
let v = k % m;
let z = k**m;
let r= k/m;
let t=k*m;
console.log(n);
console.log(v);
console.log(z);
console.log(r);
console.log(t);

let vehicle = 10;
let sentence = 'Rhema has ' + vehicle + ' cars';
console.log(sentence);

let radius = 20;
const pi = 3.14;

console.log(radius, pi);
console.log(radius**2 *pi);
console.log(4 * (20-16) **10);
//console.log(4/"hi");

//ARRAYS
let fruits = ["Apples", "Oranges", "Strawberry"];
console.log(fruits.length);
console.log(fruits);
console.log(fruits[0]);
console.log(fruits[1]);
// array method
//let newvar = fruits.join("-")
// let newvar = fruits.indexOf('strawberry');
// let newvar = fruits.concat("mango", "orange");
// let newvar = fruits.push("grape")
let newvar = fruits.pop();
console.log(newvar);

let num;
console.log(num)

//REVISION
//for loops

for(let i =0; i < 5; i++){
    console.log(i)
}

const names=["tinola", "dave", "Rhema", "Uche"];


for(let i =0; i < names.length; i++){
    console.log('name is',names[i])
}

//While Loops
let u = 0
while(u < 5){
    console.log('while loop', u)
    u++
}

let s = 0;
while(s < names.length){
    console.log('while loop', names[s])
    s++
}

//do while loop
let w = 3;

do{
    console.log('value of w is', w);
    w++
} while(w < 6);

//IF AND ELSE

//logical operators = OR ||, AND &&

const PassWord = 'Tinola1234';
if(PassWord.length >= 12 && PassWord.includes('n')){
    console.log('very strong')
}else if(PassWord.length >=7){
    console.log('PassWord is long enough');
}else{
    console.log("password is not long enough")
}

// const PASSWORD = "Emma12"
// if(PASSWORD.length >=12 && PASSWORD.includes('m')){
//     console.log('very strong')
// }else if(PASSWORD.length >= 7 || PASSWORD.includes('E')){
//     console.log("password is strong enough")
// }else{
//     console.log('password is not long enough')
// }

const PASSWORD = "Emma12"
if(PASSWORD.length >=12 && PASSWORD.includes('m')){
    console.log('very strong')
}else if(PASSWORD.length >= 7 || PASSWORD.includes('E') && PASSWORD.length >=4){
    console.log("password is strong enough")
}else{
    console.log('password is not long enough')
}

// Logical Notfication(!)

let Student = false;
if(!Student){
    console.log("student does not exist")
}

// Functions nameoffunction()
// function declaration

// function greet(){
//     console.log('ekaabo 😍 o');
// }

// //function expression
// const speak = function(){
//     console.log('good day!');
// };

function greet(name){
    console.log(name, 'ekaabo 😍 o');
}

//function expression
const speak = function(Name, time){
    console.log('good', time, Name);
};

speak('Gabriel', 'morning!');
greet('Rhema');

//Method A
//const calcArea = function(radius){
    //console.log(3.14 * radius**2)
    //return 3.14 * radius **2
//}

//Method B
function calcArea(radius){
    console.log(3.14 * radius**2)
    //return 3.14 * radius **2
}
const area = calcArea(5)
//console.log(area)




//TODAY
//Method 1
// function bill(products, tax){
//     total = products * tax;
//     return total;
//     //or
//     // return total = products * tax
// }

// console.log(bill(10, 0.2));

//Method 2
const bill = (products, tax) =>{
    total = products * tax
    return total;
    //or
    // return total = products * tax

};

console.log(bill(10, 0.2));

//functions defined as methods
// const programme = () => 'PythonFullstack'
// console.log(programme)
//Method 2
function programme(){
    'PythonFullstack'
}  
console.log(programme)
//to return as a string
//function programme(){
    //console.log('PythonFullstack')
//}
//programme()

let people = ["jessica", "shewa", "peter", "Olayinka"];

people.forEach(function(){
    console.log('something');
});
people.forEach(function(person){
    console.log(person)
});

//Math Object
console.log(Math);
console.log(Math.PI);
console.log(Math.E);
console.log(Math.LN10);
//Applying different methods
const Area = 7.7;
console.log(Math.round(Area)); //approx
console.log(Math.floor(Area)); // floors it to just the whole number and remove the decimal
console.log(Math.ceil(Area)); // rounds it up to the next whole number
console.log(Math.trunc(Area)); // takes only the remainder

//Random numbers
const random = Math.random();
console.log(random);

console.log(Math.round(random))
console.log(Math.floor(Math.random()*10))

//DOM
//Query selector Method
const paragraph = document.querySelector('p'); //gets the first element
console.log(paragraph);

const paras = document.querySelectorAll('p'); //gets all the similar  element
console.log(paras);
console.log(paras[2]);

const paragraph2 = document.querySelector('.welcome') //gets a unique class to distinguish similar elements
console.log(paragraph2);

const paragraph3 = document.querySelector('.error') //gets a unique class to distinguish similar elements
console.log(paragraph3);

const paragraph4 = document.querySelector('div.error') //gets a unique class to distinguish similar elements
console.log(paragraph4);

const header = document.querySelector('body > h2') 
console.log(header);

const paras2 = document.querySelectorAll('p')

    paras2.forEach(para =>{
        console.log(para)
    })

    // paras2.forEach(function(para){
    //     console.log(para)
    // })

const errs = document.querySelectorAll('.error')
console.log(errs)
    

    //get an Element by ID

    const title = document.getElementById('dom');
    console.log(title);

    const id = document.querySelectorAll('#dom')
    console.log(id)

    const errors = document.getElementsByClassName('error')
    console.log(errors)
    console.log(errors[0])
    //get an element by tag name
    const paras3 = document.getElementsByTagName('p')
    console.log(paras3)

    //to get the inner text(content)
    const para = document.querySelector('p')
    console.log(para.innerText);
    //to change the text on the browser
    para.innerText = 'shey u dey wine me ni'
    //to append
    para.innertext += 'shey u dey me ni'
    console.log(para.innerText)

    const content = document.querySelector('.content')
    console.log(content.innerHTML)

    content.innerHTML = '<h1>New Stuff</h1>'
    content.innerHTML += '<h1>New Stuff2</h1>'
    content.innerHTML += '<h1>New Stuff3</h1>'
    console.log(content.innerHTML)

    //const content = document.querySelector('.content')
    const users = ["Rhema", "uche", "femo", "dave"];
    users.forEach(user =>{
        // content.innerHTML += `<h1>${user}</h1>`
        content.innerHTML += '<h1>'+ user +'</h1>'
    })
