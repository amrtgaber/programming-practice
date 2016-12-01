'use strict';

/**
 * There are three types of edits: insert a character, remove a character, or
 * replace a character. Given two strings, write a function to check if they
 * are one edit or zero edits away.
 */
class oneAway {
    /**
     * If str2 is 1 length less than str1 check for replacement, if str2 is
     * 1 length greater than str1 check for insertion, if they are the same length
     * check for replacement.
     * Running time: O(n)
     * Space complexity: O(1)
     * @param  {String} str1 A string
     * @param  {String} str2 Another string
     * @return {boolean}     Returns true if str2 is one edit away from str1, false otherwise
     */
    byLength(str1, str2) {
        // for each case there should only be 1 edit to find, if there is more than 1 return false
        let editFound = false;
        let i = 0;
        let j = 0;

        if( str1.length === str2.length ) {
            // must be replacement
            for( let i = 0; i < str1.length; i++ ) {
                if( str1[i] !== str2[i] ) {
                    if( editFound ) {
                        return false;
                    }

                    editFound = true;
                }
            }
        } else if( str1.length + 1 === str2.length ) {
            // must be insert
            while( i < str1.length && j < str2.length ) {
                if( str1[i] !== str2[j] ) {
                    if( editFound ) {
                        return false;
                    }

                    editFound = true;

                    j++;
                } else {
                    i++;
                    j++;
                }
            }
        } else if( str1.length - 1 === str2.length ) {
            // must be remove
            while( i < str1.length && j < str2.length ) {
                if( str1[i] !== str2[j] ) {
                    if( editFound ) {
                        return false;
                    }

                    editFound = true;
                    i++;
                } else {
                    i++;
                    j++;
                }
            }
        } else {
            // more than one edit away
            return false;
        }

        return true;
    }
}

module.exports = exports = new oneAway();
