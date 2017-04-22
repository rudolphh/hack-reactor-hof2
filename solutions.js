
/*  Using https://gist.github.com/cahinton88/3af5e4b6ac8aebb7b3ae9509d0e1bdf5  */

function each(array, func) {
  for (var i = 0; i < array.length; i++) {
    func(array[i], i);
  }
}


function indexedExponentials(numbers) {
  // TODO: your code here
  var exp = []
  each(numbers, function(number, i){
    exp.push(Math.pow(number, i));
  });
  return exp;
}

console.log(indexedExponentials([2, 5, 7, 4])); // => [2^0, 5^1, 7^2, 4^3] => [1, 5, 49, 64]


function evenIndexedOddNumbers(numbers) {
  // TODO: Your code here
  
  var arr = [];
  
  each(numbers, function(number, i){
    if(number % 2 === 1 && i % 2 === 0){
      arr.push(number);
    }
  });
  
  return arr; 
}
console.log(evenIndexedOddNumbers([1, 3, 3, 4, 7, 10])); // => [1, 3, 7]


function evenIndexedEvenLengths(strings) {
  // TODO: your code here
  
  var arr = [];
  
  each(strings, function(string, i){
    if(i % 2 === 0 && string.length % 2 === 0){
      arr.push(string);
    }
  });
  return arr; 
}

var result = evenIndexedEvenLengths(["lion", "monkey", "aardvaark", "cat", "doge"]);
console.log(result);
// => ["lion", "doge"]
result = evenIndexedEvenLengths(["red", "green", "purple", "blue", "yellow"]);
console.log(result);
// => ["purple", "yellow"]



////////////////////////////

function each(coll, func) {
  if (Array.isArray(coll)) {
    for (var i = 0; i < coll.length; i++) {
      func(coll[i], i);
    }
  } else {
    for (var key in coll) {
      func(coll[key], key);
    }
  }
}



//////////

function values(obj){
  
  var arr = [];
  each(obj, function(val, key){
    arr.push(val);
  });
  return arr; 
  
}

console.log('\n--- Testing values() \n');
result = values({name: "Annyeong", age: 25, favoriteColor: "blue"});
console.log(result);

//////////

function keys(obj){
  
  var arr = [];
  each(obj, function(val, key){
    arr.push(key);
  });
  return arr; 
  
}

console.log('\n--- Testing keys() \n');
result = keys({name: "Annyeong", age: 25, favoriteColor: "blue"});
console.log(result);


///////////////////

function keysLongerThan(obj, num){
  
  var newObj = {};
  
  each(obj, function(val, key){
    if(key.length > num){
      newObj[key] = val;
    }
  });
  return newObj; 
  
}

console.log('\n--- Testing keysLongerThan() \n');

result = keysLongerThan({name: "Annyeong", age: 25, favoriteColor: "blue"}, 3);
console.log(result);
// => {name: "Annyeong", favoriteColor: "blue"}
result = keysLongerThan({name: "Annyeong", age: 25, favoriteColor: "blue"}, 4);
console.log(result);
// => {favoriteColor: "blue"}


//////////////////////


function incrementValues(obj){
  
  var newObj = {};
  
  each(obj, function(val, key){
    if(typeof val === 'number'){ 
      newObj[key] = val+1;
    }
    else { newObj[key] = val; }
  });
  return newObj; 
  
}

console.log('\n--- Testing incrementValues() \n');

result = incrementValues({name: "Annyeong", age: 21, favoriteColor: "blue"});
console.log(result);



//////////////////////////
// Filter exercises


function each(coll, f) {
  if (Array.isArray(coll)) {
    for (var i = 0; i < coll.length; i++) {
      f(coll[i], i);
    }
  } else {
    for (var key in coll) {
      f(coll[key], key);
    }
  }
}

function filter(array, predicate) {
  var acc = [];
  each(array, function(element, i) {
    if (predicate(element, i)) {
      acc.push(element);
    }
  });
  return acc;
}

/* solution to last problem, new vversion of filter to handle object

function filter(coll, predicate) {
  
  if (Array.isArray(coll)){
    var acc = [];
    each(coll, function(element, i) {
      if (predicate(element, i)) {
        acc.push(element);
      }
    });
    return acc;
  } else if (typeof coll === 'object') {
    var newObj = {};
    each(coll, function(val, key){
      if(predicate(val, key)){
        newObj[key] = val; 
      }
    });
    return newObj; 
  }
}

*/

///////////////////// User filter to write the following

// 1.

function evens(numbers){
  
  return filter(numbers, function(elem, i){
    return elem % 2 === 0
  });
  
}

console.log('\n--- Testing evens() \n');
result = evens([1, 3, 3, 4, 7, 10]);
console.log(result); // => [4, 10]



// 2. 

function multiplesOfThree(numbers){
  
  return filter(numbers, function(num){
    return num % 3 === 0; 
  })
}

console.log('\n--- Testing multiplesOfThree() \n');
result = multiplesOfThree([1, 3, 3, 4, 7, 9, 10]);
console.log(result); // => [3, 3, 9]


// 3.

function positives(numbers){
  
  return filter(numbers, function(num){
    return num > 0; 
  });
}

console.log('\n--- Testing positives() \n');
result = positives([-3, -2, -5, 0, 1, 3, 3, 4, 7, 9, 10]);
console.log(result); // => [1, 3, 3, 4, 7, 9, 10]


// 4. 

function evenLength(strings){
  
  return filter(strings, function(str){
    return str.length % 2 === 0;
  })
}

console.log('\n--- Testing evenLength() \n');
var someStrings = ['rudy', 'carmen', 'madison', 'chloe', 'lily'];
result = evenLength(someStrings);
console.log(result); // => ["rudy", "carmen", lily"]



///////////////////////  More Practice

// 1. 

function odds(numbers) {
  
  return filter(numbers, function(num){
    return num % 2 === 1; 
  })
}

console.log('\n--- Testing odds() \n');
result = odds([1, 3, 3, 4, 7, 10]);
console.log(result); // => [1, 3, 3, 7]



function negatives(numbers) {
  
  return filter(numbers, function(num){
    return num < 0; 
  })
}

console.log('\n--- Testing negatives() \n');
result = negatives([-3, -2, -5, 0, 1, 3, 3, 4, 7, 9, 10]);
console.log(result); // => [-3, -2, -5]



function largerThanSix(numbers) {
  
  return filter(numbers, function(num){
    return num > 6; 
  });
}

console.log('\n--- Testing largerThanSix() \n');
result = largerThanSix([-3, -2, -5, 0, 1, 3, 3, 4, 7, 9, 10]);
console.log(result); // => [7, 9, 10]


// 2. 

function startsWithChar(strings, char){
  
  return filter(strings, function(str){
    return str[0] === char; 
  });
  
}

console.log('\n--- Testing startsWithChar() \n');
var words = "the quick brown fox jumps over the lazy dog".split(" ");
result = startsWithChar(words, "q"); // => ["quick"]
console.log(result);

result = startsWithChar(words, "t"); // => ["the", "the"]
console.log(result);


// 3. 

function evenIndexedEvenLengths(strings){
  
  return filter(strings, function (str, i){
    return i % 2 === 0 && str.length % 2 === 0; 
  })
}

console.log('\n--- Testing evenIndexedEvenLengths() \n');
var someStrings = ['rudy', 'carmen', 'madison', 'chloe', 'lily'];
result = evenIndexedEvenLengths(someStrings);
console.log(result); // => ["rudy", "lily"]
result = evenIndexedEvenLengths(["lion", "monkey", "aardvaark", "cat", "doge"]);
console.log(result);
// => ["lion", "doge"]
result = evenIndexedEvenLengths(["red", "green", "purple", "blue", "yellow"]);
console.log(result);
// => ["purple", "yellow"]


// 4.

console.log('\n--- Testing new version of filter() for objects \n');
result = filter({a: 1, b: "dog", c: true}, function(value) {
  return typeof value === "number";
});

console.log(result);



