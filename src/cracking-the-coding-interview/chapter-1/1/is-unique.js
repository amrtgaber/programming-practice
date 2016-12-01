/**
 * Implement an algorithm to determine if a string has all unique characters.
 */
class IsUnique {
    /**
     * Using an array.
     * Running time: O(n^2)
     * Space complexity: O(n)
     * @param  {String} str String to check
     * @return {boolean}    Returns true if string has all unique characters, false otherwise
     */
    usingArray(str) {
        let strArray = str.split('');

        for( let i = 0; i < str.length; i++ ) {
            let char = strArray.shift();

            if( strArray.includes(char) ) {
                return false;
            }
        }

        return true;
    }

    /**
     * Using an array and a hash map.
     * Running time: O(n)
     * Space complexity: O(n^2)
     * @param  {String} str String to check
     * @return {boolean}    Returns true if string has all unique characters, false otherwise
     */
    usingArrayAndMap(str) {
        let strArray = str.split('');
        let map = new Map();

        return strArray.every( char => {
            if( map.has(char) ) {
                return false;
            }

            map.set(char, true);
            return true;
        });
    }

    /**
     * Without additional data structures.
     * Running time: O(n^2)
     * Additional Space: O(1)
     * @param  {String} str String to check
     * @return {boolean}    Returns true if string has all unique characters, false otherwise
     */
    noAdditionalDataStructures(str) {
        for( let i = 0; i < str.length; i++ ) {
            for( let j = i + 1; j < str.length; j++ ) {
                if( str[i] === str[j] ) {
                    return false;
                }
            }
        }

        return true;
    }
}

module.exports = exports = new IsUnique();
