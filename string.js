/** *****************************************************************************************
 *                                                                                          *
 * Plese read the following tutorial before implementing tasks: 
 *                         *
 * 
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String  *
 *                                                                                          *
 ********************************************************************************************/

//////////////Task 1/////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Returns the result of concatenation of two strings.
 *
 * @param {string} value1
 * @param {string} value2
 * @return {string}
 *
 * @example
 *   'aa', 'bb' => 'aabb'
 *   'aa',''    => 'aa'
 *   '',  'bb'  => 'bb'
 */
/************ + ****************************************/  
function concatenateStrings(value1, value2) {
  return value1 + value2;
}

/************ concat() ****************************************/
function concatenateStrings(value1, value2) {
  return value1.concat(value2);
}

// console.log(concatenateStrings('aa', 'bb'));
// console.log(concatenateStrings('aa', ''));
// console.log(concatenateStrings('', 'bb'));

//////////////Task 2/////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Returns the length of given string.
 *
 * @param {string} value
 * @return {number}
 *
 * @example
 *   'aaaaa' => 5
 *   'b'     => 1
 *   ''      => 0
 */
/************ length ****************************************/
function getStringLength(value) {
  return value.length;
}

// console.log(getStringLength('aaaaa'));
// console.log(getStringLength('b'));
// console.log(getStringLength(''));

//////////////Task 3/////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Returns the result of string template and given parameters firstName and lastName.
 * 
 * Please do not use concatenation, use template string :
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/template_strings
 *
 * @param {string} firstName
 * @param {string} lastName
 * @return {string}
 *
 * @example
 *   'John','Doe'      => 'Hello, John Doe!'
 *   'Chuck','Norris'  => 'Hello, Chuck Norris!'
 */
/************ ${expression} ****************************************/
function getStringFromTemplate(firstName, lastName) {
  return `Hello, ${firstName} ${lastName}!`;
}

// console.log(getStringFromTemplate('John','Doe'));
// console.log(getStringFromTemplate('Chuck','Norris'));

//////////////Task 4/////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Extract a name from template string 'Hello, First_Name Last_Name!'.
 *
 * @param {string} value
 * @return {string}
 *
 * @example
 *   'Hello, John Doe!' => 'John Doe'
 *   'Hello, Chuck Norris!' => 'Chuck Norris'
 */
/************ slice or substring****************************************/
function  extractNameFromTemplate(value) {
  return value.slice(7, value.length-1);
}

// console.log(extractNameFromTemplate('Hello, John Doe!'));
// console.log(extractNameFromTemplate('Hello, Chuck Norris!'));

//////////////Task 5/////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Returns a first char of the given string.
 *
 * @param {string} value
 * @return {string}
 *
 * @example
 *   'John Doe'  => 'J'
 *   'cat'       => 'c'
 */

/************ [0] => undefined****************************************/
function getFirstChar(value) {
  return value[0];
}

/************ charAt(0) => empty****************************************/
function getFirstChar(value) {
  return value.charAt(0);
}

/************ slice ****************************************/
function getFirstChar(value) {
  return value.slice(0, 1);
}

// console.log(getFirstChar('John Doe'));
// console.log(getFirstChar('cat'));
// console.log(getFirstChar(''));

//////////////Task 6/////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Removes a leading and trailing whitespace characters from string.
 *
 * @param {string} value
 * @return {string}
 *
 * @example
 *   '  Abracadabra'    => 'Abracadabra'
 *   'cat'              => 'cat'
 *   '\tHello, World! ' => 'Hello, World!'
 */

/************ trim() ****************************************/ 
function removeLeadingAndTrailingWhitespaces(value) {
  return value.trim();
}

// console.log(removeLeadingAndTrailingWhitespaces('  Abracadabra'));
// console.log(removeLeadingAndTrailingWhitespaces('cat'));
// console.log(removeLeadingAndTrailingWhitespaces('\tHello, World! '));

//////////////Task 7/////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Returns a string that repeated the specified number of times.
 *
 * @param {string} value
 * @param {string} count
 * @return {string}
 *
 * @example
 *   'A', 5  => 'AAAAA'
 *   'cat', 3 => 'catcatcat'
 */

/************ for + concat() ****************************************/ 
function repeatString(value, count) {
  let res = '';
  for (let i = 0; i < count; i++) {
    res = res.concat(value);
  }
  return res;
}

/************ repeat() ****************************************/ 
function repeatString(value, count) {
  return value.repeat(count);
}

// console.log(repeatString('A', 5));
// console.log(repeatString('cat', 3));

//////////////Task 8/////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Remove the first occurrence of string inside another string
 *
 * @param {string} str
 * @param {string} value
 * @return {string}
 *
 * @example
 *   'To be or not to be', 'not'  => 'To be or to be'
 *   'I like legends', 'end' => 'I like legs',
 *   'ABABAB','BA' => 'ABAB'
 */

/************ indexOf() + slice() ****************************************/ 
function removeFirstOccurrences(str, value)  {
  let pos = str.indexOf(value);
  return str.slice(0, pos) + str.slice(pos+value.length);
}

// console.log(removeFirstOccurrences('To be or not to be', 'not'));
// console.log(removeFirstOccurrences('I like legends', 'end'));
// console.log(removeFirstOccurrences('ABABAB','BA'));

//////////////Task 9/////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Remove the first and last angle brackets from tag string
 *
 * @param {string} str
 * @return {string}
 *
 * @example
 *   '<div>' => 'div'
 *   '<span>' => 'span'
 *   '<a>' => 'a'
 */

/************ slice() ****************************************/  
function unbracketTag(str) {
  return str.slice(1, str.length-1);
}

// console.log(unbracketTag('<div>'));
// console.log(unbracketTag('<span>'));
// console.log(unbracketTag('<a>'));

//////////////Task 10/////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Converts all characters of the specified string into the upper case
 *
 * @param {string} str
 * @return {string}
 *
 * @example
 *   'Thunderstruck' => 'THUNDERSTRUCK'
 *  'abcdefghijklmnopqrstuvwxyz' => 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
 */

/************ toUpperCase() ****************************************/  
function convertToUpperCase(str) {
  return str.toUpperCase();
}

// console.log(convertToUpperCase('Thunderstruck'));
// console.log(convertToUpperCase('abcdefghijklmnopqrstuvwxyz'));

//////////////Task 11/////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Extracts e-mails from single string with e-mails list delimeted by semicolons
 * 
 * @param {string} str
 * @return {array}
 *
 * @example
 *   'angus.young@gmail.com;brian.johnson@hotmail.com;bon.scott@yahoo.com' =>
 *     ['angus.young@gmail.com', 'brian.johnson@hotmail.com', 'bon.scott@yahoo.com']
 *   'info@gmail.com' => ['info@gmail.com']
 */

/************ split() ****************************************/ 
function extractEmails(str) {
  return str.split(';');
}

// console.log(extractEmails('angus.young@gmail.com;brian.johnson@hotmail.com;bon.scott@yahoo.com'));
// console.log(extractEmails('info@gmail.com'));

//////////////Task 12/////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Returns the string representation of rectangle with specified width and height
 * using pseudograhic chars
 * 
 *
 * @param {number} width
 * @param {number} height
 * @return {string}
 *
 * @example
 *
 *            '┌────┐\n'+
 *  (6,4) =>  '│    │\n'+
 *            '│    │\n'+
 *            '└────┘\n'
 *
 *  (2,2) =>  '┌┐\n'+
 *            '└┘\n'
 *
 *             '┌──────────┐\n'+
 *  (12,3) =>  '│          │\n'+
 *             '└──────────┘\n'
 *
 */
function getRectangleString(width, height) {
  throw new Error('Not implemented');
}

//////////////Task 13/////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Encode specified string with ROT13 cipher
 * See details:  https://en.wikipedia.org/wiki/ROT13 
 *
 * @param {string} str
 * @return {string}
 *
 * @example
 *
 *   'hello' => 'uryyb'
 *   'Why did the chicken cross the road?' => 'Jul qvq gur puvpxra pebff gur ebnq?'
 *   'Gb trg gb gur bgure fvqr!' => 'To get to the other side!'
 *   'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz' => 
 *          'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm'
 *
 */
 /************ Cezar cipher > 13****************************************/

function encodeToRot13(str) {
  var input     = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  var output    = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm';
  var index     = x => input.indexOf(x);
  var translate = x => index(x) > -1 ? output[index(x)] : x;
  return str.split('').map(translate).join('');
}

  // console.log(encodeToRot13('hello'));
  // console.log(encodeToRot13('Why did the chicken cross the road?'));
  // console.log(encodeToRot13('Gb trg gb gur bgure fvqr!'));
  // console.log(encodeToRot13('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'));

//////////////Task 14/////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Returns true if the value is string; otherwise false.
 * 
 * 
 * @param {string} value
 * @return {boolean}
 *
 * @example
 *   isString() => false
 *   isString(null) => false
 *   isString([]) => false
 *   isString({}) => false
 *   isString('test') => true
 *   isString(new String('test')) => true
 */
function isString(value) {
  return typeof value === 'string' || value instanceof String
}

  // console.log(isString());
  // console.log(isString(null));
  // console.log(isString([]));
  // console.log(isString({}));
  // console.log(isString('test'));
  // console.log(isString(new String('test')));

//////////////Task 15/////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Returns playid card id.
 *
 * Playing cards inittial deck inclides the cards in the following order:
 * 
 *  'A♣','2♣','3♣','4♣','5♣','6♣','7♣','8♣','9♣','10♣','J♣','Q♣','K♣',
 *  'A♦','2♦','3♦','4♦','5♦','6♦','7♦','8♦','9♦','10♦','J♦','Q♦','K♦',
 *  'A♥','2♥','3♥','4♥','5♥','6♥','7♥','8♥','9♥','10♥','J♥','Q♥','K♥',
 *  'A♠','2♠','3♠','4♠','5♠','6♠','7♠','8♠','9♠','10♠','J♠','Q♠','K♠'
 *
 * (see https://en.wikipedia.org/wiki/Standard_52-card_deck)
 * Function returns the zero-based index of specified card in the initial deck above.
 *
 * @param {string} value
 * @return {number}
 *
 * @example
 *   'A♣' => 0
 *   '2♣' => 1
 *   '3♣' => 2
 *     ...
 *   'Q♠' => 50
 *   'K♠' => 51
 */
function getCardId(value) {
    let cards ='A♣,2♣,3♣,4♣,5♣,6♣,7♣,8♣,9♣,10♣,J♣,Q♣,K♣,A♦,2♦,3♦,4♦,5♦,6♦,7♦,8♦,9♦,10♦,J♦,Q♦,K♦,A♥,2♥,3♥,4♥,5♥,6♥,7♥,8♥,9♥,10♥,J♥,Q♥,K♥,A♠,2♠,3♠,4♠,5♠,6♠,7♠,8♠,9♠,10♠,J♠,Q♠,K♠';
    let arrayCards = cards.split(',');
    
    return arrayCards.indexOf(value)
  }
  
  // console.log(getCardId('A♣'));
  // console.log(getCardId('2♣'));
  // console.log(getCardId('3♣'));
  // console.log(getCardId('Q♠'));
  // console.log(getCardId('K♠'));
  
/*
module.exports = {
  concatenateStrings: concatenateStrings,
  getStringLength: getStringLength,
  getStringFromTemplate: getStringFromTemplate,
  extractNameFromTemplate: extractNameFromTemplate,
  getFirstChar: getFirstChar,
  removeLeadingAndTrailingWhitespaces: removeLeadingAndTrailingWhitespaces,
  repeatString: repeatString,
  removeFirstOccurrences: removeFirstOccurrences,
  unbracketTag: unbracketTag,
  convertToUpperCase: convertToUpperCase,
  extractEmails: extractEmails,
  getRectangleString: getRectangleString,
  encodeToRot13: encodeToRot13,
  isString: isString,
  getCardId: getCardId
};
*/