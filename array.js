/** *******************************************************************************************
 *                                                                                           *
 * Plese read the following tutorial before implementing tasks:                              *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array    *
 *                                                                                           *
 * NOTE : Please do not use loops! All tasks can be implmeneted using standard Array methods *
 *                                                                                           *
 ******************************************************************************************** */

//////////////Task 1/////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Returns an index of the specified element in array or -1 if element is not found
 *
 * @param {array} arr
 * @param {any} value
 * @return {number}
 *
 * @example
 *    ['Ace', 10, true], 10    => 1
 *    ['Array', 'Number', 'string'], 'Date'    => -1
 *    [0, 1, 2, 3, 4, 5], 5    => 5
 */
/************ indexOf() ****************************************/
function findElement(arr, value) {
  return arr.indexOf(value);
}

/************ findIndex() ****************************************/
function findElement(arr, value) {
  return arr.findIndex(item=> item==value)
}

// console.log(findElement(['Ace', 10, true], 10));
// console.log(findElement(['Array', 'Number', 'string'], 'Date'));
// console.log(findElement([0, 1, 2, 3, 4, 5], 5));

//////////////Task 2/////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Generates an array of odd numbers of the specified length
 *
 * @param {number} len
 * @return {array}
 *
 * @example
 *    1 => [ 1 ]
 *    2 => [ 1, 3 ]
 *    5 => [ 1, 3, 5, 7, 9 ]
 */
/************ fill() + map() ****************************************/
function generateOdds(len) {
  let array = new Array(len).fill();

  return array.map(function(item, index){
    return 2*index+1;
  })

}

// console.log(generateOdds(1));
// console.log(generateOdds(2));
// console.log(generateOdds(5));

//////////////Task 3/////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Returns the doubled array - elements of the specified array are repeated twice
 * using original order
 *
 * @param {array} arr
 * @return {array}
 *
 * @example
 *    ['Ace', 10, true]  => ['Ace', 10, true,   'Ace', 10, true]
 *    [0, 1, 2, 3, 4, 5] => [0, 1, 2, 3, 4, 5,   0, 1, 2, 3, 4, 5]
 *    [] => []
 */
/************ concat() ****************************************/
function doubleArray(arr) {
  return arr.concat(arr);
}

// console.log(doubleArray(['Ace', 10, true]));
// console.log(doubleArray([0, 1, 2, 3, 4, 5]));
// console.log(doubleArray([]));

//////////////Task 4/////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Returns an array of positive numbers from the specified array in original order
 *
 * @param {array} arr
 * @return {array}
 *
 * @example
 *    [ 0, 1, 2, 3, 4, 5 ] => [ 1, 2, 3, 4, 5 ]
 *    [-1, 2, -5, -4, 0] => [ 2 ]
 *    [] => []
 */
/************ filter() ****************************************/
function getArrayOfPositives(arr) {
  return arr.filter(item => item >0 )
}

// console.log(getArrayOfPositives([ 0, 1, 2, 3, 4, 5 ]));
// console.log(getArrayOfPositives([-1, 2, -5, -4, 0]));
// console.log(getArrayOfPositives([]));

//////////////Task 5/////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Returns the array with strings only in the specified array (in original order)
 *
 * @param {array} arr
 * @return {array}
 *
 * @example
 *    [ 0, 1, 'cat', 3, true, 'dog' ] => [ 'cat', 'dog' ]
 *    [ 1, 2, 3, 4, 5 ] => []
 *    [ 'cat', 'dog', 'raccon' ] => [ 'cat', 'dog', 'racoon' ]
 */
/************ filter() + typeof ****************************************/
function getArrayOfStrings(arr) {
  return arr.filter(item => typeof item === 'string')
}

// console.log(getArrayOfStrings([ 0, 1, 'cat', 3, true, 'dog' ]));
// console.log(getArrayOfStrings([ 1, 2, 3, 4, 5 ]));
// console.log(getArrayOfStrings([ 'cat', 'dog', 'raccon' ]));

//////////////Task 6/////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Removes falsy values from the specified array
 * Falsy values: false, null, 0, "", undefined, and NaN.
 * (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean#Description)
 *
 * @param {array} arr
 * @return {array}
 *
 * @example
 *    [ 0, false, 'cat', NaN, true, '' ] => [ 'cat', true ]
 *    [ 1, 2, 3, 4, 5, 'false' ]         => [ 1, 2, 3, 4, 5, 'false' ]
 *    [ false, 0, NaN, '', undefined ]   => [ ]
 */
/************ filter() + Boolean(value) ****************************************/
function removeFalsyValues(arr) {
  return arr.filter(item => Boolean(item))
}

// console.log(removeFalsyValues([ 0, false, 'cat', NaN, true, '' ]));
// console.log(removeFalsyValues([ 1, 2, 3, 4, 5, 'false' ]));
// console.log(removeFalsyValues([ false, 0, NaN, '', undefined ]));

//////////////Task 7/////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Returns the array of uppercase strings from the specified array
 *
 * @param {array} arr
 * @return {array}
 *
 * @example
 *    [ 'permanent-internship', 'glutinous-shriek', 'multiplicative-elevation' ] =>
 *        [ 'PERMANENT-INTERNSHIP', 'GLUTINOUS-SHRIEK', 'MULTIPLICATIVE-ELEVATION' ]
 *    [ 'a', 'b', 'c', 'd', 'e', 'f', 'g' ]  => [ 'A', 'B', 'C', 'D', 'E', 'F', 'G' ]
 */
/************ map() + toUpperCase() ****************************************/
function getUpperCaseStrings(arr) {
  return arr.map( item => item.toUpperCase())
}

// console.log(getUpperCaseStrings([ 'permanent-internship', 'glutinous-shriek', 'multiplicative-elevation' ]));
// console.log(getUpperCaseStrings([ 'a', 'b', 'c', 'd', 'e', 'f', 'g' ]));

//////////////Task 8/////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Returns the array of string lengths from the specified string array.
 *
 * @param {array} arr
 * @return {array}
 *
 * @example
 *    [ '', 'a', 'bc', 'def', 'ghij' ]  => [ 0, 1, 2, 3, 4 ]
 *    [ 'angular', 'react', 'ember' ] => [ 7, 5, 5 ]
 */
/************ map() + length ****************************************/
function getStringsLength(arr) {
  return arr.map( item => item.length)
}

// console.log(getStringsLength([ '', 'a', 'bc', 'def', 'ghij' ]));
// console.log(getStringsLength([ 'angular', 'react', 'ember' ]));

//////////////Task 9/////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Inserts the item into specified array at specified index
 *
 * @param {array} arr
 * @param {any} item
 * @param {number} index
 *
 * @example
 *    [ 1, 3, 4, 5 ], 2, 1  => [ 1, 2, 3, 4, 5 ]
 *    [ 1, 'b', 'c'], 'x', 0  => [ 'x', 1, 'b', 'c' ]
 */
/************ splice() ****************************************/
function insertItem(arr, item, index) {
  arr.splice(index, 0, item);
  return arr;
}

// console.log(insertItem([ 1, 3, 4, 5 ], 2, 1));
// console.log(insertItem([ 1, 'b', 'c'], 'x', 0));

//////////////Task 10/////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Returns the n first items of the specified array
 *
 * @param {array} arr
 * @param {number} n
 *
 * @example
 *    [ 1, 3, 4, 5 ], 2  => [ 1, 3 ]
 *    [ 'a', 'b', 'c', 'd'], 3  => [ 'a', 'b', 'c' ]
 */
/************ slice() ****************************************/
function getHead(arr, n) {
  return arr.slice(0, n);
}

/************ filter() ****************************************/
function getHead(arr, n) {
  return arr.filter((item, index)=> {
    return index < n
  })
}

// console.log(getHead([ 1, 3, 4, 5 ], 2));
// console.log(getHead([ 'a', 'b', 'c', 'd'], 3));

//////////////Task 11/////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Returns the n last items of the specified array
 *
 * @param {array} arr
 * @param {number} n
 *
 * @example
 *    [ 1, 3, 4, 5 ], 2  => [ 4, 5 ]
 *    [ 'a', 'b', 'c', 'd'], 3  => [ 'b', 'c', 'd' ]
 */
/************ slice() + reverse()****************************************/
function getTail(arr, n) {
  return arr.reverse().slice(0, n).reverse();
}

/************ filter() + reverse()****************************************/
function getTail(arr, n) {
  return arr.reverse().filter((item,index)=> index < n).reverse();
}

// console.log(getTail([ 1, 3, 4, 5 ], 2));
// console.log(getTail([ 'a', 'b', 'c', 'd'], 3));

//////////////Task 12/////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Returns CSV represebtation of two-dimentional numeric array.
 * https://en.wikipedia.org/wiki/Comma-separated_values
 *
 * @param {array} arr
 * @return {string}
 *
 * @example
 *    [
 *       [  0, 1, 2, 3, 4 ],
 *       [ 10,11,12,13,14 ],
 *       [ 20,21,22,23,24 ],
 *       [ 30,31,32,33,34 ]
 *    ]
 *           =>
 *     '0,1,2,3,4\n'
 *    +'10,11,12,13,14\n'
 *    +'20,21,22,23,24\n'
 *    +'30,31,32,33,34'
 */
function toCsvText(arr) {
  throw new Error('Not implemented');
}

//////////////Task 13/////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Transforms the numeric array into the according array of squares:
 *   f(x) = x * x
 *
 * @param {array} arr
 * @return {array}
 *
 * @example
 *   [ 0, 1, 2, 3, 4, 5 ] => [ 0, 1, 4, 9, 16, 25 ]
 *   [ 10, 100, -1 ]      => [ 100, 10000, 1 ]
 */
/************ map()****************************************/
function toArrayOfSquares(arr) {
  return arr.map( item => item*item)
}

// console.log(toArrayOfSquares([ 0, 1, 2, 3, 4, 5 ]));
// console.log(toArrayOfSquares([ 10, 100, -1 ]));

//////////////Task 14/////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Transforms the numeric array to the according moving sum array:
 *     f[n] = x[0] + x[1] + x[2] +...+ x[n]
 *  or f[n] = f[n-1] + x[n]
 *
 * @param {array} arr
 * @return {array}
 *
 * @example
 *   [ 1, 1, 1, 1, 1 ]        => [ 1, 2, 3, 4, 5 ]
 *   [ 10, -10, 10, -10, 10 ] => [ 10, 0, 10, 0, 10 ]
 *   [ 0, 0, 0, 0, 0]         => [ 0, 0, 0, 0, 0]
 *   [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ] => [ 1, 3, 6, 10, 15, 21, 28, 36, 45, 55 ]
 */

/************ reduce() + push()****************************************/
function getMovingSum(arr) {
  return arr.reduce(function(total, item, index, array){
    if (index === 0) {
      total.push(item);
    } else {
      total.push(total[index -1] + item);
    }

    return total;
  },[]);
}

// console.log(getMovingSum([ 1, 1, 1, 1, 1 ]));
// console.log(getMovingSum([ 10, -10, 10, -10, 10 ]));
// console.log(getMovingSum([ 0, 0, 0, 0, 0]));
// console.log(getMovingSum([ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]));

//////////////Task 15/////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Returns every second item from the specified array:
 *
 * @param {array} arr
 * @return {array}
 *
 * Example :
 * [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ] => [ 2, 4, 6, 8, 10 ]
 * [ 'a', 'b', 'c' , null ]  => [ "b", null ]
 * [ "a" ] => []
 */
function getSecondItems(arr) {
  return arr.filter((item, index)=> index%2==1)
}

//console.log(getSecondItems([ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]))
//console.log(getSecondItems([ 'a', 'b', 'c' , null ]))
//console.log(getSecondItems([ "a" ]))

//////////////Task 16/////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Propagates every item in sequence its position times
 * Returns an array that consists of: one first item, two second items, tree third items etc.
 *
 * @param {array} arr
 * @return {array}
 *
 * @example :
 *  [] => []
 *  [ 1 ] => [ 1 ]
 *  [ 'a', 'b' ] => [ 'a', 'b','b' ]
 *  [ 'a', 'b', 'c', null ] => [ 'a', 'b','b', 'c','c','c',  null,null,null,null ]
 *  [ 1,2,3,4,5 ] => [ 1, 2,2, 3,3,3, 4,4,4,4, 5,5,5,5,5 ]
 */

/************ for + fill + concat ****************************************/
function propagateItemsByPositionIndex(arr) {
  let finishArray = [];
  for (let item = 0; item < arr.length; item++) {
    
    let curentArray = finishArray.concat(new Array(item+1).fill(arr[item]))
    finishArray = curentArray;
  }
  return finishArray;
}

/************ forEach + fill + concat ****************************************/
function propagateItemsByPositionIndex(arr) {
  let finishArray = [];

  arr.forEach((item,index) => {
    let curentArray = finishArray.concat(new Array(index+1).fill(item));
    finishArray=curentArray;
  });
  
  return finishArray
}

/************ reduce + fill + concat ****************************************/
function propagateItemsByPositionIndex(arr) {
  return arr.reduce((acc,item,index)=>{
    let curent = acc.concat(new Array(index+1).fill(item));
    return acc = curent;
  },[])
}

// console.log(propagateItemsByPositionIndex([]))
// console.log(propagateItemsByPositionIndex([ 1 ]))
// console.log(propagateItemsByPositionIndex([ 'a', 'b' ]))
// console.log(propagateItemsByPositionIndex([ 'a', 'b', 'c', null ]))
// console.log(propagateItemsByPositionIndex([ 1,2,3,4,5 ]))

//////////////Task 17/////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Returns the 3 largest numbers from the specified array
 *
 * @param {array} arr
 * @return {array}
 *
 * @example
 *   [] => []
 *   [ 1, 2 ] => [ 2, 1 ]
 *   [ 1, 2, 3 ] => [ 3, 2, 1 ]
 *   [ 1,2,3,4,5,6,7,8,9,10 ] => [ 10, 9, 8 ]
 *   [ 10, 10, 10, 10 ] => [ 10, 10, 10 ]
 */
function get3TopItems(arr) {
  return arr.reverse().slice(0,3);
}

// console.log(get3TopItems([]))
// console.log(get3TopItems([ 1, 2 ]))
// console.log(get3TopItems([ 1, 2, 3 ]))
// console.log(get3TopItems([ 1,2,3,4,5,6,7,8,9,10 ]))
// console.log(get3TopItems([ 10, 10, 10, 10 ]))

//////////////Task 18/////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Returns the number of positive numbers from specified array
 *
 * @param {array} arr
 * @return {number}
 *
 * @example
 *   [ ]          => 0
 *   [ -1, 0, 1 ] => 1
 *   [ 1, 2, 3]   => 3
 *   [ null, 1, 'elephant' ] => 1
 *   [ 1, '2' ] => 1
 */

//1-счетчик + условие
//2-отсор + длину

/************ 1-option (condition + counter) ****************************************/
function getPositivesCount(arr) {
  let count = 0;
  arr.forEach(item => {
    typeof item === 'number' && item > 0? count++ : null
  })
  return count
}

/************ 2- option (selection + length) ****************************************/
function getPositivesCount(arr) {
  return arr.filter(item => typeof item === 'number' && item > 0).length
}

// console.log(getPositivesCount([ ]))
// console.log(getPositivesCount([ -1, 0, 1 ]))
// console.log(getPositivesCount([ 1, 2, 3]))
// console.log(getPositivesCount([ null, 1, 'elephant' ]))
// console.log(getPositivesCount([ 1, '2' ]))

//////////////Task 19/////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Sorts digit names
 *
 * @param {array} arr
 * @return {array}
 *
 * @example
 *   [] => []
 *   [ 'nine','one' ]                 => [ 'one', 'nine' ]
 *   [ 'one','two','three' ]          => [ 'one','two', 'three' ]
 *   [ 'nine','eight','nine','eight'] => [ 'eight','eight','nine','nine']
 *   [ 'one','one','one','zero' ]     => [ 'zero','one','one','one' ]
 */
/*********forEach() + push() + indexOf() + sort()****************************************/
function sortDigitNamesByNumericOrder(arr) {
  let numArray = ['zero','one','two','three','four','five','six','seven','eight','nine','ten'];
  let indexArray = [];
  let finishArray = [];

  arr.forEach(item => indexArray.push(numArray.indexOf(item)));
  indexArray.sort().forEach(item=> finishArray.push(numArray[item]));

  return finishArray;
}

// console.log(sortDigitNamesByNumericOrder([]))
// console.log(sortDigitNamesByNumericOrder([ 'nine','one' ]))
// console.log(sortDigitNamesByNumericOrder([ 'one','two','three' ]))
// console.log(sortDigitNamesByNumericOrder([ 'nine','eight','nine','eight']))
// console.log(sortDigitNamesByNumericOrder([ 'one','one','one','zero' ]))


//////////////Task 20/////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Returns the sum of all items in the specified array of numbers
 *
 * @param {array} arr
 * @return {number}
 *
 * @example
 *   [] => 0
 *   [ 1, 2, 3 ]           => 6
 *   [ -1, 1, -1, 1 ]      => 0
 *   [ 1, 10, 100, 1000 ]  => 1111
 */
/*********forEach()****************************************/
function getItemsSum(arr) {
  let sum = 0;
  arr.forEach(item => sum+= item)
  return sum;
}
/*********reduce()****************************************/
function getItemsSum(arr) {
  return arr.reduce((acc, item) => {
    return acc + item
  }, 0)
}

// console.log(getItemsSum([]));
// console.log(getItemsSum([ 1, 2, 3 ]));
// console.log(getItemsSum([ -1, 1, -1, 1 ]));
// console.log(getItemsSum([ 1, 10, 100, 1000 ]));

//////////////Task 21/////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Returns the number of all falsy value in the specified array
 *
 * @param {array} arr
 * @return {array}
 *
 * @example
 *  [] => 0
 *  [ 1, '', 3 ] => 1
 *  [ -1, 'false', null, 0 ] => 2
 *  [ null, undefined, NaN, false, 0, '' ]  => 6
 */
/*********forEach()****************************************/
function getFalsyValuesCount(arr) {
  let count = 0;
  arr.forEach(item => Boolean(item)? null: count++);
  return count;
}

/*********reduce()****************************************/
function getFalsyValuesCount(arr) {
  return arr.reduce((acc,item)=> {
    Boolean(item)? acc: acc++
      return acc
  },0)
}

// console.log(getFalsyValuesCount([]));
// console.log(getFalsyValuesCount([ 1, '', 3 ]));
// console.log(getFalsyValuesCount([ -1, 'false', null, 0 ]));
// console.log(getFalsyValuesCount([ null, undefined, NaN, false, 0, '' ]));

//////////////Task 22/////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Returns a number of all occurences of the specified item in an array
 *
 * @param {array} arr
 * @param {any} item
 * @return {number}
 *
 * @example
 *    [ 0, 0, 1, 1, 1, 2 ], 1 => 3
 *    [ 1, 2, 3, 4, 5 ], 0 => 0
 *    [ 'a','b','c','c' ], 'c'=> 2
 *    [ null, undefined, null ], null => 2
 *    [ true, 0, 1, 'true' ], true => 1
 */
/*********forEach()****************************************/
function findAllOccurences(arr, item) {
  let count = 0;
  arr.forEach(element => {
    element===item? count++ : count
  })
  return count;
}

/*********reduce()****************************************/
function findAllOccurences(arr, item) {
  return arr.reduce((acc, element)=>{
    element===item? acc++ : acc;
    return acc;
  },0)
}

// console.log(findAllOccurences([ 0, 0, 1, 1, 1, 2 ], 1));
// console.log(findAllOccurences([ 1, 2, 3, 4, 5 ], 0));
// console.log(findAllOccurences([ 'a','b','c','c' ], 'c'));
// console.log(findAllOccurences([ null, undefined, null ], null));
// console.log(findAllOccurences([ true, 0, 1, 'true' ], true));

//////////////Task 23/////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Concatenates all elements from specified array into single string with ',' delimeter
 *
 * @param {array} arr
 * @return {string}
 *
 * @example
 *    [0, false, 'cat', NaN, true, '']  => '0,false,cat,NaN,true,'
 *    [1, 2, 3, 4, 5]                   => '1,2,3,4,5'
 *    ['rock', 'paper', 'scissors']     => 'rock,paper,scissors'
 */
/*********toString()****************************************/
function toStringList(arr) {
  return arr.toString()
}

/*********join(',')****************************************/
function toStringList(arr) {
  return arr.join(',')
}

// console.log(toStringList([0, false, 'cat', NaN, true, '']));
// console.log(toStringList([1, 2, 3, 4, 5]));
// console.log(toStringList(['rock', 'paper', 'scissors']));

//////////////Task 24/////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Sorts the specified array by country name first and city name (if countries are
 * equal) in ascending order.
 *
 * @param {array} arr
 * @return {array}
 *
 * @example
 *    [
 *      { country: 'Russia',  city: 'Moscow' },
 *      { country: 'Belarus', city: 'Minsk' },
 *      { country: 'Poland',  city: 'Warsaw' },
 *      { country: 'Russia',  city: 'Saint Petersburg' },
 *      { country: 'Poland',  city: 'Krakow' },
 *      { country: 'Belarus', city: 'Brest' }
 *    ]
 *                      =>
 *    [
 *      { country: 'Belarus', city: 'Brest' },
 *      { country: 'Belarus', city: 'Minsk' },
 *      { country: 'Poland',  city: 'Krakow' },
 *      { country: 'Poland',  city: 'Warsaw' },
 *      { country: 'Russia',  city: 'Moscow' },
 *      { country: 'Russia',  city: 'Saint Petersburg' }
 */
function sortCitiesArray(arr) {
   arr.sort(function(a,b){
     let countryA = a.country.toLowerCase();
     let countryB = b.country.toLowerCase();

     if(countryA === countryB){
       if(a.city < b.city){
         return -1;
       } else {
        return 1;
       }
     }

     if(countryA < countryB){
      return -1;
     } 

     if(countryA > countryB){
      return 1;
     } 
     
   })

   return arr;
}

// console.log(sortCitiesArray(
//       [
//         { country: 'Russia',  city: 'Moscow' },
//         { country: 'Belarus', city: 'Minsk' },
//         { country: 'Poland',  city: 'Warsaw' },
//         { country: 'Russia',  city: 'Saint Petersburg' },
//         { country: 'Poland',  city: 'Krakow' },
//         { country: 'Belarus', city: 'Brest' }
//       ]))

//////////////Task 25/////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Creates an indentity matrix of the specified size
 *
 * @param {number} n
 * @return {array}
 *
 * @example
 *     1  => [[1]]
 *
 *     2 => [[1,0],
 *           [0,1]]
 *
 *          [[1,0,0,0,0],
 *           [0,1,0,0,0],
 *     5 =>  [0,0,1,0,0],
 *           [0,0,0,1,0],
 *           [0,0,0,0,1]]
 */
/*********for + fill() + push()****************************************/
function getIdentityMatrix(n) {
  let finishArray = [];

  for(let i=0; i < n; i++){
    let m = new Array(n).fill(0);
    m[i] = 1;
    finishArray.push(m)
  }
  
  return finishArray;
}

/*********reduce() + fill() + push()****************************************/
function getIdentityMatrix(n) {
  let finishArray = new Array(n).fill(0);

  return finishArray.reduce((acc, item, index, arr)=> {
    let m = [...arr];
    m[index] = 1;
    acc.push(m);
    return acc;
  }, [])
}

// console.log(getIdentityMatrix(1));
// console.log(getIdentityMatrix(2));
// console.log(getIdentityMatrix(5));

//////////////Task 26/////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Creates an array of integers from the specified start to end (inclusive)
 *
 * @param {number} start
 * @param {number} end
 * @return {array}
 *
 * @example
 *     1, 5  => [ 1, 2, 3, 4, 5 ]
 *    -2, 2  => [ -2, -1, 0, 1, 2 ]
 *     0, 100 => [ 0, 1, 2, ..., 100 ]
 *     3, 3   => [ 3 ]
 */
/*********for****************************************/
function getIntervalArray(start, end) {
  let finishArray = [];
  for(let i = start; i <= end; i++){
    finishArray.push(i)
  }
  return finishArray;
}

/*********while****************************************/
function getIntervalArray(start, end) {
  let finishArray = [];
  let num = start;

  while (num <= end){
    finishArray.push(num);
    num++;
  }
 
  return finishArray;
}

// console.log(getIntervalArray(1, 5));
// console.log(getIntervalArray(-2, 2));
// console.log(getIntervalArray(0, 100));
// console.log(getIntervalArray(3, 3));

//////////////Task 27/////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Returns array containing only unique values from the specified array.
 *
 * @param {array} arr
 * @return {array}
 *
 * @example
 *   [ 1, 2, 3, 3, 2, 1 ] => [ 1, 2, 3 ]
 *   [ 'a', 'a', 'a', 'a' ]  => [ 'a' ]
 *   [ 1, 1, 2, 2, 3, 3, 4, 4] => [ 1, 2, 3, 4]
 */

/*********filter()****************************************/
function distinct(arr) {
  return arr.filter((item, index)=> arr.indexOf(item) === index)
}

//console.log(distinct([ 1, 2, 3, 3, 2, 1 ]));
//console.log(distinct([ 'a', 'a', 'a', 'a' ]));
//console.log(distinct([ 1, 1, 2, 2, 3, 3, 4, 4]));

//////////////Task 28 not myself/////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Groups elements of the specified array by key.
 * Returns multimap of keys extracted from array elements via keySelector callback
 * and values extracted via valueSelector callback.
 * See: https://en.wikipedia.org/wiki/Multimap
 *
 * @param {array} array
 * @param {Function} keySelector
 * @param {Function} valueSelector
 * @return {Map}
 *
 * @example
 *   group([
 *      { country: 'Belarus', city: 'Brest' },
 *      { country: 'Russia', city: 'Omsk' },
 *      { country: 'Russia', city: 'Samara' },
 *      { country: 'Belarus', city: 'Grodno' },
 *      { country: 'Belarus', city: 'Minsk' },
 *      { country: 'Poland', city: 'Lodz' }
 *     ],
 *     item => item.country,
 *     item => item.city
 *   )
 *            =>
 *   Map {
 *    "Belarus" => ["Brest", "Grodno", "Minsk"],
 *    "Russia" => ["Omsk", "Samara"],
 *    "Poland" => ["Lodz"]
 *   }
 */
function group(array, keySelector, valueSelector) {
  let map = new Map(),
      count = array.length;

  for (let key, i = 0; i < count; ++i) {
      key = keySelector(array[i]);
      if (map.has(key))
          map.get(key).push(valueSelector(array[i]));
      else
          map.set(key, [valueSelector(array[i])]);
  }
  return map;
}

// console.log(group([
//         { country: 'Belarus', city: 'Brest' },
//         { country: 'Russia', city: 'Omsk' },
//         { country: 'Russia', city: 'Samara' },
//         { country: 'Belarus', city: 'Grodno' },
//         { country: 'Belarus', city: 'Minsk' },
//         { country: 'Poland', city: 'Lodz' }
//        ],
//        item => item.country,
//        item => item.city
//      ))

//////////////Task 29/////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Projects each element of the specified array to a sequence and flattens the
 * resulting sequences into one array.
 *
 * @param {array} arr
 * @param {Function} childrenSelector, a transform const to apply to each element
 *  that returns an array of children
 * @return {array}
 *
 * @example
 *   [[1, 2], [3, 4], [5, 6]], (x) => x     =>   [ 1, 2, 3, 4, 5, 6 ]
 *   ['one','two','three'], x=>x.split('')  =>   ['o','n','e','t','w','o','t','h','r','e','e']
 */
function selectMany(arr, childrenSelector) {
  throw new Error('Not implemented');
}

//////////////Task 30/////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Returns an element from the multidimentional array by the specified indexes.
 *
 * @param {array} arr
 * @param {array} indexes
 * @return {any} element from array
 *
 * @example
 *   [[1, 2], [3, 4], [5, 6]], [0,0]  => 1        (arr[0][0])
 *   ['one','two','three'], [2]       => 'three'  (arr[2])
 *   [[[ 1, 2, 3]]], [ 0, 0, 1 ]      => 2        (arr[0][0][1])
 */
function getElementByIndexes(arr, indexes) {
  throw new Error('Not implemented');
}

//////////////Task 31/////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Swaps the head and tail of the specified array:
 * the head (first half) of array move to the end, the tail (last half) move to the start.
 * The middle element (if exists) leave on the same position.
 *
 *
 * @param {array} arr
 * @return {array}
 *
 * @example
 *   [ 1, 2, 3, 4, 5 ]   =>  [ 4, 5, 3, 1, 2 ]
 *    \----/   \----/
 *     head     tail
 *
 *   [ 1, 2 ]  => [ 2, 1 ]
 *   [ 1, 2, 3, 4, 5, 6, 7, 8 ]   =>  [ 5, 6, 7, 8, 1, 2, 3, 4 ]
 *
 */
function swapHeadAndTail(arr) {
  throw new Error('Not implemented');
}

/*
module.exports = {
  findElement: findElement,
  generateOdds: generateOdds,
  doubleArray: doubleArray,
  getArrayOfPositives: getArrayOfPositives,
  getArrayOfStrings: getArrayOfStrings,
  removeFalsyValues: removeFalsyValues,
  getUpperCaseStrings: getUpperCaseStrings,
  getStringsLength: getStringsLength,
  insertItem: insertItem,
  getHead: getHead,
  getTail: getTail,
  toCsvText: toCsvText,
  toStringList: toStringList,
  toArrayOfSquares: toArrayOfSquares,
  getMovingSum: getMovingSum,
  getSecondItems: getSecondItems,
  propagateItemsByPositionIndex: propagateItemsByPositionIndex,
  get3TopItems: get3TopItems,
  getPositivesCount: getPositivesCount,
  sortDigitNamesByNumericOrder: sortDigitNamesByNumericOrder,
  getItemsSum: getItemsSum,
  getFalsyValuesCount: getFalsyValuesCount,
  findAllOccurences: findAllOccurences,
  sortCitiesArray: sortCitiesArray,
  getIdentityMatrix: getIdentityMatrix,
  getIntervalArray: getIntervalArray,
  distinct: distinct,
  group: group,
  selectMany: selectMany,
  getElementByIndexes: getElementByIndexes,
  swapHeadAndTail: swapHeadAndTail
};
*/