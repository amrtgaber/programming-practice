const expect = require('chai').expect;
const listOfDepths = require('./list-of-depths');

const methods = Object.getOwnPropertyNames( Object.getPrototypeOf(listOfDepths) ).filter( method => method !== 'constructor' );

const tests = require('./list-of-depths-tests');

describe('Chapter 4.3: List of Depths', function() {
    methods.forEach( method => {
        describe(`${method}()`, function() {
            tests.forEach( pair => {
                it('', function() {
                    expect( listOfDepths[method]( pair[0] ) ).to.deep.equal( pair[1] );
                });
            });
        });
    });
});
