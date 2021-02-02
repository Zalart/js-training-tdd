'use strict';

/*
 * Create a `getLast` function that takes an array or a string
 * and return the last element.
 *
 * @notions Data-Structures, Get
 */

// Your code:
function getLast(s) {

    if (Array.isArray(s)) {
        return s[s.length - 1];
    }
    else {
        let sArray = s.split('');
        return sArray[sArray.length - 1];
    }
}
//* Begin of tests
const assert = require('assert');

assert.strictEqual(getLast([2, 42]), 42);
assert.strictEqual(getLast(['pouet', 4, true]), true);
assert.strictEqual(getLast([getLast]), getLast);
assert.strictEqual(getLast('salut'), 't');
assert.strictEqual(getLast([]), undefined);
// End of tests */
