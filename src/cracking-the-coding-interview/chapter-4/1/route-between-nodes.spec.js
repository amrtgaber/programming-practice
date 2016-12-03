const expect = require('chai').expect;
const routeBetweenNodes = require('./route-between-nodes');

const methods = Object.getOwnPropertyNames( Object.getPrototypeOf(routeBetweenNodes) ).filter( method => method !== 'constructor' );

const route = require('./route-between-nodes-tests').route;
const noRoute = require('./route-between-nodes-tests').noRoute;

describe('Chapter 4.1: Route Between Nodes', function() {
    methods.forEach( method => {
        describe(`${method}()`, function() {
            describe('returns true', function() {
                route.forEach( (test, index) => {
                    it(`routeTest${index + 1}`, function() {
                        expect( routeBetweenNodes[method]( test.start, test.end ) ).to.be.true;
                    });
                });
            });

            describe('returns false', function() {
                noRoute.forEach( (test, index) => {
                    it(`noRouteTest${index + 1}`, function() {
                        expect( routeBetweenNodes[method]( test.start, test.end ) ).to.be.false;
                    });
                });
            });
        });
    });
});
