/* Q1 : This is an introduction to how challenges on javascript Problem solving work. In the Code tab above you'll see a starter function that looks like this:
function hello() {

}
All you have to do is type return "hello Javascript" between the curly braces { } */

//Answer :
function hello(){
    return "Hello Javascript";
}

const res = hello();
// console.log(res);

/* Q2: Write a function that returns the string "something" joined with a space " " and the given argument a. 
giveMeSomething("is better than nothing") ➞ "something is better than nothing"

giveMeSomething("Bob Jane") ➞ "something Bob Jane"

giveMeSomething("something") ➞ "something something"
*/

//Answer : 
function givenMeSomething(a) {
    return "something " + a;
}

const res2 = givenMeSomething("something");
console.log(res2);
