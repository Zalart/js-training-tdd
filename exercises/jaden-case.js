'use strict';

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */

// Your code:
function jadenCase(str) {
    const strArray = str.split(' ');
    const newArray = strArray.map((e) => e.substring(0, 1).toUpperCase() + e.substring(1));
    return newArray.join(' ');
}
//* Begin of tests
const assert = require('assert');
assert.strictEqual(typeof jadenCase, 'function');
assert.strictEqual(jadenCase.length, 1);
assert.strictEqual(jadenCase('a test sen-tence With an 2 ber!'), 'A Test Sen-tence With An 2 Ber!');

//assert.fail('You must write your own tests');
// End of tests */
