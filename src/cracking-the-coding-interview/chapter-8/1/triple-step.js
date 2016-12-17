/**
 * A child is running up a staircase with n steps and can hop either 1 step, 2
 * steps or 3 steps at a time. Implement a method to count how many possible ways
 * the child can run up the stairs.
 */
class tripleStep {
    /**
     * Naive count
     * Running time: O(3^n)
     * Space complexity: O(log3 n)
     * @param  {number} steps How many steps the staircase has
     * @return {number}       Returns the number of possible ways the child can run up the stairs
     */
    recursiveCount(steps) {
        if( steps < 0 ) {
            return 0;
        }

        if( steps === 0 ) {
            return 1;
        }

        return this.recursiveCount(steps - 1) + this.recursiveCount(steps - 2) + this.recursiveCount(steps - 3) ;
    }

    /**
     * Memoization
     * Running time: O(n)
     * Space complexity: O(n)
     * @param  {number} steps How many steps the staircase has
     * @return {number}       Returns the number of possible ways the child can run up the stairs
     */
    memoize(steps) {
        return memoizeHelper(steps, []);

        function memoizeHelper(steps, cache) {
            if( steps < 0 ) {
                return 0;
            }

            if( steps === 0 ) {
                return 1;
            }

            if( !cache[steps] ) {
                cache[steps] = memoizeHelper(steps - 1, cache) + memoizeHelper(steps - 2, cache) + memoizeHelper(steps - 3, cache) ;
            }

            return cache[steps];
        }
    }
}

module.exports = exports = new tripleStep();
