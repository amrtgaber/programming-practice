/**
 * Given two strings, determine if one is a permuation of the other.
 */
class checkPermutation {
    /**
     * Using a map.
     * Running time: O(n)
     * Space complexity: O(n)
     * @param  {String} str1 A string
     * @param  {String} str2 Another string
     * @return {boolean}     Returns true if str1 is a permuation of str2, false otherwise
     */
    usingMap(str1, str2) {
        if( str1.length !== str2.length ) {
            return false;
        }

        let charCounts = new Map();

        // create map of character counts in str1
        str1.split('').forEach( char => {
            if( charCounts.has(char) ) {
                charCounts.set( char, charCounts.get(char) + 1 );
            } else {
                charCounts.set( char, 1 );
            }
        });

        // for each character in str2 decrement character count
        str2.split('').forEach( char => {
            if( charCounts.has(char) ) {
                charCounts.set( char, charCounts.get(char) - 1 );
            } else {
                // character is not in str1
                charCounts.set( char, -1 );
            }
        });

        // if any counts are < 0 return false
        for( let count of charCounts.values() ) {
            if( count < 0 ) {
                return false;
            }
        }

        // str2 contains all characters of str1 the same number of times
        return true;
    }
}

module.exports = exports = new checkPermutation();
