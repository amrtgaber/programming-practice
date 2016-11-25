'use strict';

class isUnique {
    naive(str) {
        let strArray = str.split('');

        for( let i = 0; i < str.length; i++ ) {
            let char = strArray.shift();

            if( strArray.includes(char) ) {
                return false;
            }
        }

        return true;
    }
}

module.exports = exports = new isUnique();
