console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());

// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName(characterName) {
  return `'${characterName}' is such a lame character name, I bet it's from a really stupid fantasy book!`;
}
// Remember to call the function to test
console.log(helloName('Auk'));
//I changed the variable 'name' to 'characterName' because i was having a weird
//issue understanding the scope of the function; when testing, i was able to call the name function in the console,
//as a blank string, even when I deleted it from my code. writing different variable names makes more sense; when called in console, they remain undefined.
//
//Anyway, here's what i think is happening in this code: variable 'characterName' is declared as 
//function parameter. it passes the value of this variable to the content of the function, which logs the value of this variable.
// line 20: calls function, and sets value of characterName to 'Auk'. If helloName(), characterName would remain undefined in function.
//was previously confused about the *scope* of characterName; but figured it out!


// 3. Function to add two numbers together & return the result

function addNumbers(num1, num2) {
  sum = num1 + num2;
  return `The sum of ${num1} and ${num2} is: ${sum}`;
  //if i didn't care about logging the sum, the content of function could simply be:
  //return num1 + num2;

}
console.log(addNumbers(8,5));

// 4. Function to multiply three numbers & return the result
function multiplyThree(num1, num2, num3){
  product = num1 * num2 * num3;
  return `The product of ${num1}, ${num2}, ${num3} is: ${product}`;
}

console.log(multiplyThree(1,2,3));

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return true;
  }
    return false;
}
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
function getLast( array ) {
  if (array.length > 0) {
    return array[array.length-1];
  }
    return undefined;
}
console.log( `getLast - should return 4 when array is [1,2,3,4]:`, getLast([1,2,3,4]));
console.log( `getLast - should return 'undefined' when array is empty:`, getLast([]));

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
function find( value, array ){
  for (x of array) {
    if (x === value) {
      return true;
    }  
  } return false; //wow, forgot to test for a positive case, but cohort-mates mentioned this in the slack and i was able to correct this mistake.
}

libStack = ['Neveryon, Samuel R. Delany','Book of the New Sun, Gene Wolfe','Viriconium, John M. Harrison','Mars Trilogy, Kim Stanley Robinson,','And Chaos Died, Joanna Russ'];
console.log(`The library has a pretty tight stack of sci-fi right now: `,libStack,`, but I'm sick of all these male authors! I've heard good things about Doris Lessing's 'Canopus in Argos', but it's way out of print. Am I in luck?`, find('Canopus in Argos, Doris Lessing', libStack));
console.log('What about any Joanna Russ?', find('And Chaos Died, Joanna Russ', libStack));

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  letter = letter.toLowerCase();
  string = string.toLowerCase();
  if (string.charAt(0) === letter) {
    return true;
  }
    return false;
}
console.log( 'isFirstLetter - a to apple - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - A to apple - should say true', isFirstLetter('A', 'apple') );
console.log( 'isFirstLetter - a to Apple - should say true', isFirstLetter('a', 'Apple') );
console.log( 'isFirstLetter - z to apple - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array

//got carried away with this one; was curious about nesting functions. answer is Line 129.

const nightsideTheLongSun = 333, //series of numbers, written to sum in functions
    lakeOfTheLongSun = 352,    
    caldeOfTheLongSun = 370,
    exodusFromTheLongSun = 430; 

let year = 1993; //this is user-input parameter!

function lengthOfSeries(year){ //function returns numerical array: pages in each book of series as a function of year/when books were published
  if (year === 1993) {
    bookOfTheLongSun = [nightsideTheLongSun];
  } else if (year >= 1994 && year < 1996) {
      bookOfTheLongSun = [nightsideTheLongSun,lakeOfTheLongSun,caldeOfTheLongSun];
  } else if (year >=1996) {
      bookOfTheLongSun = [nightsideTheLongSun,lakeOfTheLongSun,caldeOfTheLongSun,exodusFromTheLongSun];
    } else {
      bookOfTheLongSun = [];
    }
  return bookOfTheLongSun;
  }

function addPages(bookOfTheLongSun) { //this is the function that sums the array. it is a repeat of my solution to problem 8 in week 3 assignment 3. had to declare an extra variable in order to return output of for loop.
  let pagesTotal;
  for (let i = 0, pages = 0 ;i<bookOfTheLongSun.length;i++){
    pages += bookOfTheLongSun[i];
    pagesTotal = pages;
  }
  return pagesTotal;
}

console.log(`By the year ${year}, the sum of pages in Gene Wolfe's 'Book of the Long Sun' tetrology (orignal TOR paperback editions) is: `,
   addPages(lengthOfSeries(year)));

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.

function badBrainsHasThatAttitude(mentalAttitude) {
  let positiveMentalAttitude = [];
  for (x of mentalAttitude) {
    if (x > 0) {
      positiveMentalAttitude.push(x);
    }
  }
  return positiveMentalAttitude;
}

badVibes = [-3,-4,-28,0,-2];
fineVibes = [-3,0,2,3,1,-12,18];

console.log(`Your vibes are kinda bad.`, badBrainsHasThatAttitude(badVibes));
console.log(`Your vibes are allright, but we can make 'em better! Let's listen to Bad Brains.`, badBrainsHasThatAttitude(fineVibes));

// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!

// Edabit problem h4ck3r sp34k
// Create a function that takes a string as an argument and returns a coded (h4ck3r 5p34k) version of the string.

//method one: 172-189. converts string to array; deals with character case differences
function n3wsp34k(string) {
  let stringLC = string.toLowerCase(); //most efficient way to deal with cOmplex casEs?
  string = string.split("");
  for (let i=0; i < string.length; i++) {
    if (stringLC.charAt(i) === 'a') {
      string.splice(i,1,'4');
    } else if (stringLC.charAt(i) === 'e') {
      string.splice(i,1,'3');
    } else if (stringLC.charAt(i) === 'i') {
      string.splice(i,1,'1');
    } else if (stringLC.charAt(i) === 'o') {
      string.splice(i,1,'0');
    } else if (stringLC.charAt(i) === 's') {
      string.splice(i,1,'5');
    }
  } return string.join('');
}

console.log(n3wsp34k('All your base are belong to us!'));

//method two: 193-206. simpler code, all case instances need to be specified
function n3wsp34k2(string) {
  string = string.replace(/a/g,'4');
  string = string.replace(/A/g,'4');
  string = string.replace(/e/g,'3');
  string = string.replace(/E/g,'3');
  string = string.replace(/i/g,'1');
  string = string.replace(/I/g,'1');
  string = string.replace(/o/g,'0');
  string = string.replace(/O/g,'0');
  string = string.replace(/s/g,'5');
  string = string.replace(/S/g,'5');
  return string;
}
console.log(n3wsp34k2('Stop all thems DOWNLOADING'));