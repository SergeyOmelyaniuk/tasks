/** ******************************************************************************************
 *                                                                                          *
 * Plese read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Numbers_and_dates          *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number  *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math    *
 *                                                                                          *
 ******************************************************************************************* */

//////////////Task 1/////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Returns an area of a rectangle given by width and heigth.
 *
 * @param {numder} width
 * @param {number} height
 * @return {number}
 *
 * @example:
 *   5, 10 => 50
 *   5, 5  => 25
 */
function getRectangleArea(width, height) {
  return width * height;
}

// console.log(getRectangleArea(5, 10));
// console.log(getRectangleArea(5, 5));

//////////////Task 2/////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Returns a circumference of circle given by radius.
 * https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/PI
 *
 * @param {number} radius
 * @return {number}
 *
 * @example:
 *   5    => 31.41592653589793
 *   3.14 => 19.729201864543903
 *   0    => 0
 */
function getCicleCircumference(radius) {
  return 2 * Math.PI * radius;;
}

// console.log(getCicleCircumference(5));
// console.log(getCicleCircumference(3.14));
// console.log(getCicleCircumference(0));

//////////////Task 3/////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Returns an average of two given numbers.
 *
 * @param {numder} value1
 * @param {number} value2
 * @return {number}
 *
 * @example:
 *   5, 5  => 5
 *  10, 0  => 5
 *  -3, 3  => 0
 */
function getAverage(value1, value2) {
  return (value1 + value2) /2;
}

// console.log(getAverage(5, 5));
// console.log(getAverage(10, 0));
// console.log(getAverage(-3, 3));

//////////////Task 4/////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Returns a distance beetween two points by cartesian coordinates.
 *
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 *
 * @return {number}
 *
 * @example:
 *   (0,0) (0,1)    => 1
 *   (0,0) (1,0)    => 1
 *   (-5,0) (10,-10) => 18.027756377319946
 *   (4, 2) (1, 6) => 5
 */
function getDistanceBetweenPoints(x1, y1, x2, y2) {
  throw new Error('Not implemented');
}

//////////////Task 5/////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Returns a root of linear equation a*x + b = 0 given by coefficients a and b.
 *
 * @param {number} a
 * @param {number} b
 * @return {number}
 *
 * @example:
 *   5*x - 10 = 0    => 2
 *   x + 8 = 0       => -8
 *   5*x = 0         => 0
 */
function getLinearEquationRoot(a, b) {
  throw new Error('Not implemented');
}

//////////////Task 6/////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Returns an angle (in radians) between two vectors given by xi and yi, coordinates
 * in Cartesian plane
 * See details https://en.wikipedia.org/wiki/Euclidean_vector#Representations
 *
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 * @return {number}
 *
 * @example:
 *   (1,0) (0,1)     => π/2
 *   (0,1) (0,-1)    => π
 *   (0,-1) (1,0)    => π/2
 *   (0,1) (0,1)     => 0
 *   (0,1) (1,2)     => 0
 */
function getAngleBetweenVectors(x1, y1, x2, y2) {
  throw new Error('Not implemented');
}

//////////////Task 7/////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Returns a last digit of a integer number.
 *
 * @param {number} value
 * @return {number}
 *
 * @example:
 *   100     => 0
 *    37     => 7
 *     5     => 5
 *     0     => 0
 */
/************ String + charAt + length****************************************/
function getLastDigit(value) {
  let str = String(value);
  return str.charAt(str.length-1);
}
/************ toString + split + length ****************************************/
function getLastDigit(value) {
  let str = value.toString().split('');
  return str[str.length-1];
}

// console.log(getLastDigit(100));
// console.log(getLastDigit(37));
// console.log(getLastDigit(5));
// console.log(getLastDigit(0));

//////////////Task 8/////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Returns a number by given string representation.
 *
 * @param {string} value
 * @return {number}
 *
 * @example:
 *    '100'     => 100
 *     '37'     => 37
 * '-525.5'     => -525.5
 */
function parseNumberFromString(value) {
  return Number(value);
}

// console.log(parseNumberFromString('100'));
// console.log(parseNumberFromString('37'));
// console.log(parseNumberFromString('-525.5'));

//////////////Task 9/////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Returns a diagonal length of the rectangular parallelepiped given by its sides a,b,c.
 *
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 *
 * @example:
 *   1,1,1   => 1.7320508075688772
 *   3,3,3   => 5.196152422706632
 *   1,2,3   => 3.741657386773941
 */
function getParallelipidedDiagonal(a, b, c) {
  throw new Error('Not implemented');
}

//////////////Task 10/////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Returns the number rounded to specified power of 10.
 *
 * @param {number} num
 * @param {number} pow
 * @return {number}
 *
 * @example:
 *   1234, 0  => 1234
 *   1234, 1  => 1230
 *   1234, 2  => 1200
 *   1234, 3  => 1000
 *   1678, 0  => 1678
 *   1678, 1  => 1680
 *   1678, 2  => 1700
 *   1678, 3  => 2000
 */
function roundToPowerOfTen(num, pow) {
  throw new Error('Not implemented');
}

//////////////Task 11/////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Returns true is the number is prime; otherwise false.
 * See: https://en.wikipedia.org/wiki/Primality_test
 *
 * @param {number} n
 * @return {bool}
 *
 * @example:
 *   4 => false
 *   5 => true
 *   6 => false
 *   7 => true
 *   11 => true
 *   12 => false
 *   16 => false
 *   17 => true
 */
function isPrime(n) {
  throw new Error('Not implemented');
}

//////////////Task 12/////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Tries to convert value to number and returns it if conversion was successfull;
 * otherwise returns default value passed as a second argument.
 *
 * @param {any} value
 * @param {any} def
 * @return {number}
 *
 * @example
 *   toNumber(null, 0) => 0
 *   toNumber('test', 0) => 0
 *   toNumber('1', 0) => 1
 *   toNumber(42, 0) => 42
 *   toNumber(new Number(42), 0) => 42
 */
function toNumber(value, def) {
  if (!isNaN(parseFloat(value)) && isFinite(value)) {
    return parseInt(value);
  }
  return def;
}

// console.log(toNumber(null, 0));
// console.log(toNumber('test', 0));
// console.log(toNumber('1', 0));
// console.log(toNumber(42, 0));
// console.log(toNumber(new Number(42), 0));

/*
module.exports = {
  getRectangleArea: getRectangleArea,
  getCicleCircumference: getCicleCircumference,
  getAverage: getAverage,
  getDistanceBetweenPoints: getDistanceBetweenPoints,
  getLinearEquationRoot: getLinearEquationRoot,
  getAngleBetweenVectors: getAngleBetweenVectors,
  getLastDigit: getLastDigit,
  parseNumberFromString: parseNumberFromString,
  getParallelipidedDiagonal: getParallelipidedDiagonal,
  roundToPowerOfTen: roundToPowerOfTen,
  isPrime: isPrime,
  toNumber: toNumber
};
*/