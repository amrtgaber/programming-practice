/**
 * Check if a string is a permutation of a palindrome.
 */
class palindromePermutation {
    /**
     * Count chars. A string is a palindrome if there is only 1 character or less
     * that can be counted an odd number of times.
     * Running time: O(n)
     * Space complexity: O(n)
     * @param  {String} str A string
     * @return {boolean}    Returns true if string is a permutation of a palindrome, false otherwise
     */
    countChars(str) {
        let charCounts = new Map();

        // count chars
        str.split('').forEach( char => {
            if( charCounts.has(char) ) {
                charCounts.set( char, charCounts.get(char) + 1 );
            } else {
                charCounts.set( char, 1 );
            }
        });

        // check odd counts
        let oddCount = 0;
        for( let count of charCounts.values() ) {
            if( count % 2 !== 0 ) {
                oddCount++;
            }

            if( oddCount > 1 ) {
                return false;
            }
        }

        return true;
    }
}

module.exports = exports = new palindromePermutation();
