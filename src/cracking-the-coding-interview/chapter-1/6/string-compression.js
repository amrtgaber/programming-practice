/**
 * Implement a method to perform basic string compression using the counts of repeated
 * characters. If the string would not become smaller than the original string, return
 * the original string. You can assume the string has only uppercase and lowercase letters (a-z).
 */
class stringCompression {
    /**
     * One loop
     * Running time: O(n)
     * Space complexity: O(number of unique chars in str)
     * @param  {String} str A string
     * @return {boolean}    If compressed string is shorter than original returns compressed string, otherwise returns original
     */
    oneLoop(str) {
        let char = str.charAt(0);
        let count = 0;
        let compressedString = '';

        for( let i = 0; i < str.length; i++ ) {
            if( str.charAt(i) !== char ) {
                compressedString += char + count;
                char = str.charAt(i);
                count = 1;
            } else {
                count++;
            }
        }

        // add the last char count
        compressedString += char + count;

        if( str.length <= compressedString.length ) {
            return str;
        }

        return compressedString;
    }
}

module.exports = exports = new stringCompression();
