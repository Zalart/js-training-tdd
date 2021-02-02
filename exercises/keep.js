'use strict';

/*
 * Create a `keepFirst` function that takes a string as parameter
 * and return the string only keeping the 2 first characters
 *
 * Create a `keepLast` function that takes a string as parameter
 * and return the string only keeping the 2 last characters
 *
 * Create a `keepFirstLast` function that takes a string as parameter
 * and only keep 2 characters from the third character
 *
 */

// Your code:
const keepFirst = (str) => str.substring(0, 2)
const keepLast = (str) => str.substring(str.length - 2)
const keepFirstLast = (str) => str.substring(2, 2 + 2)
//* Begin of tests
const assert = require('assert');
assert.strictEqual(typeof keepFirst, 'function');
assert.strictEqual(typeof keepLast, 'function');
assert.strictEqual(typeof keepFirstLast, 'function');
assert.strictEqual(keepFirst.length, 1);
assert.strictEqual(keepLast.length, 1);
assert.strictEqual(keepFirstLast.length, 1);
assert.strictEqual(keepFirst('Hello'), 'He');
assert.strictEqual(keepLast('Hello'), 'lo');
assert.strictEqual(keepFirstLast('Hello'), 'll');
//assert.fail('You must write your own tests');
// End of tests */
