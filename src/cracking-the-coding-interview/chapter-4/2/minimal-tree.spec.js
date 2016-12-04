const expect = require('chai').expect;
const minimalTree = require('./minimal-tree');

const methods = Object.getOwnPropertyNames( Object.getPrototypeOf(minimalTree) ).filter( method => method !== 'constructor' );

const tests = require('./minimal-tree-tests');

describe('Chapter 4.2: Minimal Tree', function() {
    methods.forEach( method => {
        describe(`${method}()`, function() {
            tests.forEach( pair => {
                it(pair[0].toString(), function() {
                    expect( minimalTree[method]( pair[0] ) ).to.deep.equal( pair[1] );
                });
            });
        });
    });
});
