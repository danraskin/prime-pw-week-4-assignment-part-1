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
return console.log(`'${characterName}' is such a lame character name, I bet it's from a really stupid fantasy book!`);
}
// Remember to call the function to test
helloName('Auk');
//I changed the variable 'name' to 'characterName' because i was having a weird
//issue understanding the scope of the function; when testing, i was able to call the name function in the console,
//as a blank string, even when I deleted it from my code. writing different variable names makes more sense; when called in console, they remain undefined.
//
//Anyway, here's what i think is happening in this code: variable 'characterName' is declared as 
//function parameter. it passes the value of this variable to the content of the function, which logs the value of this variable.
// line 20: calls function, and sets value of characterName to 'Auk'. If helloName(), characterName would remain undefined in function.
//was previously confused about the *scope* of characterName; but figured it out!


// 3. Function to add two numbers together & return the result

//lines 35-65: I started playing around with this problem and it spiraled, transforming it into a series of nested functions. Sorry!
//Line 68 has the simple answer.

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

function addNumbers(num1, num2) {
  sum = num1 + num2;
  return console.log(`The sum of ${num1} and ${num2} is: ${sum}`);
  //if i didn't care about logging the sum, the content of function could simply be:
  //return num1 + num2;

}
addNumbers(8,5);


// 4. Function to multiply three numbers & return the result
function multiplyThree(num1, num2, num3){
  product = num1 * num2 * num3;
  return console.log(`The product of ${num1}, ${num2}, ${num3} is: ${product}`);
}
multiplyThree(-.3,9,102);


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
    return false;
  }
}
libStack = ['Neveryon, Samuel R. Delany','Book of the New Sun, Gene Wolfe','Viriconium, John M. Harrison','Mars Trilogy, Kim Stanley Robinson'];
console.log(`The library has a pretty tight stack of sci-fi right now: `,libStack,`, but I'm sick of all these male authors! I've heard good things about Doris Lessing's 'Canopus in Argos', but it's way out of print. Am I in luck?`, find('Canopus in Argos, Doris Lessing', libStack));
// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {

}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
function sumAll( ) {
  let sum = 0
  // TODO: loop to add items
  return sum;
}

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.



// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!
