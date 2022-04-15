/*
    Square(n) Sum
    
    Complete the square sum function so that it squares 
    each number passed into it and then sums the results 
    together.
 */
function squareSum(numbers) {
    return numbers
        .reduce((prev, number) => prev + (+number*+number), 0);
}

module.exports = squareSum;