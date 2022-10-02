//primitive data type (immutable, compare)

let num1 = 1;
let num2 = 1;
console.log(num1 == num2);

let js = "javascript";
let py = "python";
console.log(js == py);

let lightOn = true;
let lightOff = false;
console.log(lightOn == lightOff);

//non-primitive data type (mutable, cannot compare by value)

let number = [0,2,3,4,5];
number[0] = 1;
console.log(number);

let number1 = [1,2,3,4,5];
let number2 = [1,2,3,4,5];
console.log(number1 == number2);

let userOne = {
    userName: "Alex",
    country: "India",
    city: "chennai"
};
console.log(userOne);

let userTwo = {
    userName: "Alex",
    country: "India",
    city: "chennai"
};
console.log(userOne == userTwo);

// non-primitive compared by reference

let number3 = [1,2,3,4,5];
let number4 = number3;
console.log(number3 == number4);

let userThree = {
    userName: "Alex",
    country: "India",
    city: "chennai"
};
let userFour = userThree;
console.log(userThree == userFour);


//numbers

let age = 25;
const gravity = 9.81;
let mass = 72;
const Pi = 3.14;

const boilPoint = 100;
const bodyTemp = 37;

console.log(age, gravity, mass, Pi, boilPoint, bodyTemp);




const PI = Math.PI;
console.log(PI);

console.log(Math.round(PI));

console.log(Math.round(9.6));

console.log(Math.floor(5.4));

console.log(Math.ceil(5.4));

let randNum = Math.random()
console.log(randNum)

let rand = Math.floor(Math.random()*12);
console.log(rand);

console.log(randNum*11);

console.log(Math.min(5,8,0,-5,98));
console.log(Math.max(-55,10,55,98));

console.log(Math.abs(-6));
console.log(Math.sqrt(100));
console.log(Math.sqrt(2));
console.log(Math.pow(3, 3));

let firstName = "Alex";
let lastName = "Z";
let country = "India";
let years = 99;

let fullName = firstName + " " +lastName;
console.log(fullName);

console.log(`His name is ${fullName}, He is from ${country}, finally ${fullName} is ${years} old.`);

let a = 5;
let b = 4;

console.log(`is a is lesser than b: ${a >b} `);

console.log(firstName.length);
console.log(lastName.length);
console.log(fullName.length);

console.log(firstName[0]);

let lastIndex = firstName.length-1;
console.log(lastIndex);
console.log(firstName[lastIndex]);

let name1 = "JavaScript";
console.log(name1.toUpperCase());
let name2 = "AleX";
console.log(name2.toUpperCase())
let name3 = "American Flag";
console.log(name3.toUpperCase());
let name4 = "Alex";
console.log(name4.toLowerCase());
let name5 = "JavaScript";
console.log(name5.toLowerCase());
let name6 = "American Flag";
console.log(name6.toLowerCase());

let substr1 = "JavaScript";
console.log(substr1.substr(1,5));
let substr2 = "Alex";
console.log(substr2.substr(1,3));
console.log(substr1.substr(5));

let substring1 = "America";
console.log(substring1.substring(0,4));
console.log(substring1.substring(4,9));
console.log(substring1.substring(4));

let substring2 = "JavaScript";
console.log(substring2.substring(0,4));
console.log(substring2.substring(4,10));
console.log(substring2.substring(4));

let split1 = "America";
console.log(split1.split());
console.log(split1.split(""));

let split2 = "Try until you get";
console.log(split2);
console.log(split2.split());
console.log(split2.split(" "));

let split3 = "India, America, Switzerland";
console.log(split3.split(","));
console.log(split3.split(", "));

let trim1 = "   America   ";
console.log(trim1);
console.log(trim1.trim(" "));
let trim2 = "    India";
console.log(trim2);
console.log(trim2.trim());

let includes1 = "America is in #1";
console.log(includes1.includes("#"));
console.log(includes1.includes("1"));
console.log(includes1.includes("In"));
console.log(includes1.includes("in"));
console.log(includes1.includes("America"));

let includes2 = "India";
console.log(includes2.includes("ia"));
console.log(includes2.includes("india"));
console.log(includes2.includes("India"));

let replace1 = "India";
console.log(replace1.replace("India", "America"));
let replace2 = "America";
console.log(replace2.replace("Amer", "lemur"));


let charAt1 = "india";
console.log(charAt1.charAt(0));
let charAtLast1 = charAt1.length - 1;
console.log(charAt1.charAt(charAtLast1));

let charCodeAt1 = "America";
console.log(charCodeAt1.charCodeAt(0));

let charCodeAtLast = charCodeAt1.length-1;
console.log(charCodeAt1.charCodeAt(charCodeAtLast));

let indexOf1 = "America and India";
console.log(indexOf1.indexOf("and"));
console.log(indexOf1.indexOf("And"));
console.log(indexOf1.indexOf("India"));
console.log(indexOf1.indexOf("America"));

let lastIndexOf1 = "America is in NAM region. it is a powerful country";
console.log(lastIndexOf1.lastIndexOf("a"));
console.log(lastIndexOf1.lastIndexOf("nam"));
console.log(lastIndexOf1.lastIndexOf("NAM"));
console.log(lastIndexOf1.lastIndexOf("America"));

let concat1 = "I am";
console.log(concat1.concat("from" ,"India"));
let concat2 = "Amer";
console.log(concat2.concat("ica"));

let startsWith1 = "America is a country";
console.log(startsWith1.startsWith("America"));
console.log(startsWith1.startsWith("a"));
console.log(startsWith1.startsWith("A"));

let endsWith1 = "I am from earth";
console.log(endsWith1.endsWith("th"));
console.log(endsWith1.endsWith("from"));
console.log(endsWith1.endsWith("from earth"));

let search1 = "hello How are you";
console.log(search1.search(/how/gi));
console.log(search1.search("you"));

let match1 = "JavaScript is a scripting language. JavaScript is powerful";
console.log(match1.match(/JavaScript/));
console.log(match1.match(/javascript/gi));
console.log(match1.match("india"));

let regEx = " i born in November 2, 1994";
let regEx1 = /\d+/gi
console.log(regEx.match(regEx1)); 

let repeat1 = "hi ";
console.log(repeat1.repeat(100));

let checkName = "Alex";
let checkAge = 25;
let job
console.log(typeof(checkName));
console.log(typeof(job));
console.log(typeof(undefined));
console.log(typeof(null));
console.log(typeof(checkAge));
console.log(typeof(true));
console.log(typeof(false));

let parseInt1 = "10";
console.log(parseInt(parseInt1), parseInt1);
console.log(parseInt1);
console.log(Number(parseInt1), parseInt1);
console.log(+(parseInt1));

let float = "10.1"
let parseFloat1 = parseFloat(float);
console.log(parseFloat1, float);
console.log(Number(float), float);
console.log(+(float), float)

let parseInt2 = parseInt(float);
console.log(parseInt2, float);

