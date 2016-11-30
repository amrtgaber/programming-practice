'use strict';

/**
 * Replace all spaces in a string with '%20'. You are given the true length of
 * the string and there is enough space for the new characters. Use a char array
 * to do this in place.
 */
class urlify {
    /**
     * Naive implementation
     * Running time: O(n^2)
     * Space complexity: O(1)
     * @param  {String} str A string passed in as a char array
     * @param  {Number} len Length of string after replacement
     * @return {boolean}    Replaces all spaces in string with '%20'
     */
    doubleLoop(str, len) {
        for( let i = 0; i < len; i++ ) {
            // if this char is a space
            if( str[i] === ' ' ) {
                // shift all characters two spaces
                for( let j = len - 1; j > i + 1; j-- ) {
                    str[j] = str[j - 2];
                }

                // insert '%20'
                str[i]     = '%';
                str[i + 1] = '2';
                str[i + 2] = '0';
            }
        }

        return str;
    }
}

module.exports = exports = new urlify();
