let challenge = "30 days of JavaScript";
console.log(challenge);
console.log(challenge.length);
console.log(challenge.toUpperCase());
console.log(challenge.toLowerCase());
console.log(challenge.substring(0,2));
console.log(challenge.substring(3, 21));
console.log(challenge.includes("Script"));
console.log(challenge.split());
console.log(challenge.split(" "));

let company = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
console.log(company.split());
console.log(company.split(","))

console.log(challenge.replace("JavaScript", "Python"));

console.log(challenge.charAt(15));
console.log(challenge.charCodeAt("J"));

console.log(challenge.indexOf("a"));
console.log(challenge.lastIndexOf("a"));

let because ="You cannot end a sentence with because because because is a conjunction";
console.log(because.indexOf("because"));
console.log(because.lastIndexOf("because"));

console.log(because.search("because"));

let trim1 = " 30 Days Of JavaScript ";
console.log(trim1.trim());
console.log(challenge.startsWith(30));
console.log(challenge.endsWith("of JavaScript"));
console.log(challenge.match(/a/gi));

let con = "30 days of";
console.log(con.concat(" JavaScript"));

console.log(challenge.repeat(2));

let print1 = "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.";
console.log(print1);

let print2 = "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.";
console.log(print2);

let num = "10";
console.log(typeof(num));
let numm = parseInt(num);
console.log(typeof(numm));
console.log( numm == 10);

let par = "9.8";
let par1 = Math.round(par)
console.log(par1 == 10);

let match1 = "python , jargon";
console.log(match1.match(/on/g));

let match2 = "Match the match with the Matching";
console.log(match2.match(/mat/gi));

let match3 = "I hope this course is not full of jargon";
console.log(match3.match("jargon"));

let rand1 = Math.random();
let rand100 = rand1*100;
console.log(Math.ceil(rand100));

let rand2 = Math.random();
let rand200 = rand2*255;
console.log(Math.ceil(rand200));

let min1 = 50;
let max1 = 100;
console.log(Math.ceil(Math.random()* (max1 - min1)+min1));
console.log(Math.ceil(Math.random()*(5 -2)+2));

let script = "JavaScript";
console.log(script.charAt(8));

let stringLast = script.length-1;
console.log(script.charAt(stringLast));
console.log(script.charAt(0));
console.log(script.charAt(1));
console.log(script.charAt(2));
console.log(script.charAt(3));
console.log(script.charAt(4));
console.log(script.charAt(5));
console.log(script.charAt(6));
console.log(script.charAt(7));
console.log(script.charAt(8));
console.log(script.charAt(script.length-1));

console.log("1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125");

let slice = "You cannot end a sentence with because because because is a conjunction";
console.log(slice.substring(31,55));

let countLove ="Love is the best thing in this world. Some found their love and some are still looking for their love";
console.log(countLove.match(/love/gi));
console.log("love count is: " + countLove.match(/love/gi).length);

console.log("total string count in countLove: " + countLove.length)

let becauseCount = "You cannot end a sentence with because because because is a conjunction";
let counting = /because/gi;
console.log(becauseCount.match(counting));

console.log("because count is: " + becauseCount.match(counting).length);

let freq = "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching";

let repe = /\W+/g;
let repl = " ";
console.log(freq.replace(repe, repl));

let salaryPerMonth = 5000;
let annualBonus = 10000;
let onlineCoursesPerMonth = 15000;

//total annual income
console.log("total annual income: " + ((salaryPerMonth*12)+annualBonus+(onlineCoursesPerMonth*12)));

let income = "Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month";

let digits = /\d+/g;
let digitalNumber = income.match(digits);
console.log(digitalNumber);
let annualIncome = parseInt((digitalNumber[0]*12) + (digitalNumber[1]*1) + (digitalNumber[2]*12));
console.log("total annual income: " + annualIncome); 


