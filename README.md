# HoF Part 2 - each indices, each objects, filter

## Lesson

[Slides - Each Indices](https://docs.google.com/presentation/d/1ooNPlndMft8pn5aSV0NBHcVQWBz1HtgQUugv-CKCNcY/embed?start=false&loop=false&delayms=3000)

[Slides - Each Objects](https://docs.google.com/presentation/d/1IfC_KHc2kZNUeHcTMJPhfGGs6kgI4vMOA53EVwDPEFY/embed?start=false&loop=false&delayms=3000)

[Slides - Filter](https://docs.google.com/presentation/d/16lqFtoGd41QgkclAwS6VeOsvJhZ3qmUT4kJfJ33nXAU/embed?start=false&loop=false&delayms=3000)


## Exercises - Each Indices

```js
function each(array, func) {
  for (var i = 0; i < array.length; i++) {
    func(array[i], i);
  }
}
```

### Basic Requirements

1. Using our new version of each, write a function called `indexedExponentials`
   that, when given an array of numbers as an argument, returns a *new* array of
   numbers where each number has been raised to the power of its index, *e.g.*:

   ```js
   function indexedExponentials(numbers) {
     // TODO: your code here
   }
   indexedExponentials([2, 5, 7, 4]); // => [2^0, 5^1, 7^2, 4^3] => [1, 5, 49, 64]
   ```

2. Write a function called `evenIndexedOddNumbers` that, when given an array of
   numbers as an argument, returns an array of only the *odd* numbers with *even*
   indices.

   ```js
   function evenIndexedOddNumbers(numbers) {
     // TODO: Your code here
   }
   evenIndexedOddNumbers([1, 3, 3, 4, 7, 10]); // => [1, 3, 7]
   ```

3. Write a function called `evenIndexedEvenLengths` (yeah, a bit of a mouthful)
   that accepts an array of strings as a parameter, and returns only the strings
   that are found at an even index that *also* have an even length, *e.g.*:

   ```js
   function evenIndexedEvenLengths(strings) {
     // TODO: your code here
   }
   evenIndexedEvenLengths(["lion", "monkey", "aardvaark", "cat", "doge"]);
   // => ["lion", "doge"]
   evenIndexedEvenLengths(["red", "green", "purple", "blue", "yellow"]);
   // => ["purple", "yellow"]
   ```
   
   ## Exercises - Each Objects

```js
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
```

### Basic Requirements

1. Using our updated version of `each`, write the following functions:

   + `values`: accepts an object as a parameter, and outputs an array of the
     object's *values*.
   + `keys`: accepts an object as a parameter, and outputs an array of the
     object's *keys*.

2. Write a function called `keysLongerThan` that accepts two parameters -- an
   *object* and a *number* -- and returns a new object with only the key/value
   pairs in the input object whose keys are longer than the numeric argument,
   *e.g.*:

   ```js
   keysLongerThan({name: "Annyeong", age: 25, favoriteColor: "blue"}, 3);
   // => {name: "Annyeong", favoriteColor: "blue"}
   keysLongerThan({name: "Annyeong", age: 25, favoriteColor: "blue"}, 4);
   // => {favoriteColor: "blue"}
   ```

   Make sure to use the new version of `each` for this.

3. Write a function called `incrementValues` that accepts an object as a
   parameter, and outputs an object with all of its numeric values incremented
   by one. You'll want to use the updated version of `each` for this, and you
   will need to check the type of each value to determine whether or not it
   should be incremented.

   **HINT:** Try entering the following expressions in to your console:

   ```js
   typeof "hello"; // => "string"
   typeof 1; // => "number"
   typeof true; // => "boolean"
   ```
   
   ## Exercises - Filter

```js
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
```

### Basic Requirements

Use `filter` to write the following functions:

1. Write a function called `evens` that takes an array of **numbers** as a
   parameter, and returns **an array of only the even numbers** in the parameter.

2. Write a function called `multiplesOfThree` that takes an array of **numbers** as a
   parameter, and returns an array of only the numbers that are multiples of
   three.

3. Write a function called `positives` that takes an array of **numbers** as a
   parameter, and returns an array of only the numbers that are positive.

4. Write a function called `evenLength` that takes an array of **strings** and
   returns an array of only the strings with an even length.

### More Practice

1. Use `filter` to write the following functions:
   - `odds`: Accepts an array of numbers, and returns the *odd* ones.
   - `negatives`: Like `positives`, but with negatives!
   - `largerThanSix`: given an array of numbers, returns those larger than 6.

2. Using `filter`, write a function `startsWithChar` that accepts two parameters:
   an array of strings, and a character (*e.g.* "a"), and returns an array of
   only the strings that start with that character:

   ```js
   function startsWithChar(strings, character) {
     // ...
   }
   var words = "the quick brown fox jumps over the lazy dog".split(" ");
   startsWithChar(words, "q"); // => ["quick"]
   startsWithChar(words, "t"); // => ["the", "the"]
   ```

3. Extend the `filter` function to pass the *index* of each element to the
   predicate; then, complete the following:

   Write a function called `evenIndexedEvenLengths` (yeah, a bit of a mouthful)
   that accepts an array of strings as a parameter, and returns only the strings
   that are found at an even index that *also* have an even length, *e.g.*:

   ```js
   function evenIndexedEvenLengths(strings) {
     // TODO: your code here
   }
   evenIndexedEvenLengths(["lion", "monkey", "aardvaark", "cat", "doge"]);
   // => ["lion", "doge"]
   evenIndexedEvenLengths(["red", "green", "purple", "blue", "yellow"]);
   // => ["purple", "yellow"]
   ```

   **HINT:** You'll need to ensure that your version of `filter` also passes
   each elements' *index* (or *key* in the case of objects) to the predicate.

4. Write a version of `filter` that works on arrays **and** objects; then, use
   your updated version of `filter` to filter an object with values of mixed
   types to an object with *only* numeric values. You should be able to use your
   modified version of `filter` as follows:

   ```js
   filter({a: 1, b: "dog", c: true}, function(value) {
     return typeof value === "number";
   });
   // => {a: 1}
   ```
